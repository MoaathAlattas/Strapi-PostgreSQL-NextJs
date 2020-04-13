import fetch from 'node-fetch'

const Home = ({ data }) => {
  return (
    <>
      <h1>posts</h1>
      <br />
      {data.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <small>{post.created_at}</small>
          <h2>{post.content}</h2>
          <hr />
        </div>
      ))}
    </>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch('http://api.hhar.com/posts')
  return { data: await res.json() }
}

export default Home
