import fetch from 'node-fetch'
import Navbar from '../components/navbar'

const Page = () => {

  return (
    <>
      <Navbar />
      <h1>Next.js App!</h1><br />
    </>
  )
}

Page.getInitialProps = async () => {

  if (typeof window === "undefined") {
    let data = await fetch(`http://api.hhar.com/posts`)
  }

  return {}
}

export default Page
