import Link from 'next/link'
const Page = ({}) => {

  return (
    <div>
        <Link href="/"><a>Home</a></Link> -
        <Link href="/posts"><a>Posts</a></Link> -
        <Link href="/login"><a>Login</a></Link> -
        <Link href="/logout"><a>Logout</a></Link> -
    </div>
  )
}


export default Page
