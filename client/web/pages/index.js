

const Home = () => {
  return (
    <>
      <h1>Next.js App!</h1>
    </>
  )
}

// Home.getInitialProps = async () => {
//   const res = await fetch('http://api.hhar.com/posts')
//   return { data: await res.json() }
// }

console.log(process.env.APP_PATH)


export default Home
