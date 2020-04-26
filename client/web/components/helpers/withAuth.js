
import { current } from '../../utils/auth'
import Router from "next/router"
import { useContext, useEffect } from 'react'
import { AppContext } from '../../context/appContext'

const withAuth = (Page) => {

      function Component(props) {

            const { setUser } = useContext(AppContext)

            useEffect(() => {
                  setUser(props.user)
            }, [])

            if (props.user?.id) return <Page {...props} />;

            Router.push(`/login?redirect=${props.pathname}`)
            return null
      }

      Component.getInitialProps = async (ctx) => {
            const { res, pathname } = ctx
            let prevProps = {}

            const user = await current(ctx)

            if (!user?.id) {
                  if (typeof window === 'undefined') {
                        res.writeHead(301, { Location: `/login?redirect=${pathname}` })
                        res.end()
                  }

            } else {
                  if (Page.getInitialProps) prevProps = await Page.getInitialProps(ctx);
            }

            return { ...prevProps, user, pathname }
      }


      return Component
}

export default withAuth