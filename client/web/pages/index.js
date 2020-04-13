

const Home = () => {
  return (
    <>
      <h1>posts</h1>
    </>
  )
}

// Home.getInitialProps = async () => {
//   const res = await fetch('http://api.hhar.com/posts')
//   return { data: await res.json() }
// }

console.log(process.env.HOST)


export default Home
