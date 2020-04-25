import fetch from 'node-fetch'
import Navbar from '../components/navbar'

const Page = () => {

  return (
    <>
      <Navbar />
      {process.env.API_URL}
      <h1>Next.js App!</h1><br />
    </>
  )
}

Page.getInitialProps = async () => {

  let data = await fetch(`${process.env.API_URL}/posts`)

  return {}
}

export default Page
