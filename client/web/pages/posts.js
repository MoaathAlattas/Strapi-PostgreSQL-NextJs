import fetch from 'node-fetch'

const Home = ({ data }) => {
  return (
    <>
      <h1>Next.js App!</h1><br />
      {data.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <hr />
        </div>
      ))}
    </>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch(`${process.env.API_URL}/posts`)
  return { data: await res.json() }
}


export default Home
