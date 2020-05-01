import MainLayout from '../layouts/mainLayout'
import { auth } from '../services/api'
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
  globalThis.ctx = ctx
  const result = await auth.logout()
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
