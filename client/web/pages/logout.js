import Navbar from '../components/navbar'
import WithAuth from '../components/helpers/withAuth'
import {logout} from '../utils/auth'
import Router from 'next/router'
import Cookies from 'cookies'

const Page = () => {
  return (
    <div>
        <Navbar />
        <h1>Logged out!</h1>
    </div>
  )
}

Page.getInitialProps = async (ctx) => {
  const {res} = ctx
  const result = await logout(ctx)
  if(!result.ok){
    if(typeof window === 'undefined') {
        res.writeHead(301,{Location: `/`})
        res.end()
    } else {
        Router.push(`/`)
    }
  }
  return {}
}


export default Page
