import fetch from 'node-fetch'
import Navbar from '../components/navbar'
import WithAuth from '../components/helpers/withAuth'

const Posts = ({ data }) => {
  return (
    <>
      <Navbar />
      <h1>Next.js App!</h1><br />
      {data[0] && data.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <hr />
        </div>
      ))}
    </>
  )
}

Posts.getInitialProps = async ({ req }) => {
  const options = {
    method: 'GET',
    credentials: 'include',
  }
  if (req) {
    options.headers = { cookie: req.headers.cookie }
  }
  const data = await fetch(`${process.env.API_URL}/posts`, options)
  const js = await data.json()
  return { data: js }
}


export default WithAuth(Posts)
