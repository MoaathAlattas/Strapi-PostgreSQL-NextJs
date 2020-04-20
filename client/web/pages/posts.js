import fetch from 'node-fetch'
import Navbar from '../components/navbar'
import WithAuth from '../components/helpers/withAuth'

const Posts = ({ data, user }) => {
  return (
    <>
    <Navbar />
      <h1>Next.js App!</h1><br />
      {user && user.username}
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

Posts.getInitialProps = async ({req}) => {

  const options = {
    method: 'GET',
    credentials: 'include', // for client side requests
  }

  if (req) {
    options.headers = { cookie: req.headers.cookie }; // for server side request
  }

  const data = await fetch(`http://api.hhar.com/posts`, options)
  const js = await data.json()
  return { data: js  }
}


export default WithAuth(Posts)
