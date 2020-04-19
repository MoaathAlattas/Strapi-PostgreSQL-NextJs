import fetch from 'node-fetch'
import Navbar from '../components/navbar'


const Home = ({ data }) => {
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

Home.getInitialProps = async (ctx) => {

  const res = await fetch(`http://api.hhar.com/posts`, {
    credentials: "include",
  })
  const js = await res.json()
  return { data: js  }
}


export default Home
