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

  await fetch(`${process.env.API_URL}/posts`, {
    credentials: "include",
  })

  return {}
}

export default Page
