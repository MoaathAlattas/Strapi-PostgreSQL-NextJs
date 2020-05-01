import MainLayout from '../layouts/mainLayout'
import { logout } from '../utils/auth'
import Router from 'next/router'
import { AppContext } from "../context/appContext"
import { useContext, useEffect } from 'react'


const Page = () => {

  const { setUser } = useContext(AppContext)

  useEffect(() => { setUser({}) }, [])

  return (
    <MainLayout>
      <h1>Logged out!</h1>
    </MainLayout>
  )
}

Page.getInitialProps = async (ctx) => {
  const { res } = ctx
  const result = await logout(ctx)
  if (!result.ok) {
    if (typeof window === 'undefined') {
      res.writeHead(301, { Location: `/` })
      res.end()
    } else {
      Router.push(`/`)
    }
  }
  return { result }
}


export default Page
