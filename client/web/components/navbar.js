import Link from 'next/link'
import { AppContext } from '../context/appContext'
import { useContext } from 'react'

const Page = () => {

  const { user } = useContext(AppContext)

  return (
    <div>
      {user?.id && `Welcome ${user.username} | `}
      <Link href="/"><a>Home</a></Link> - {' '}
      <Link href="/posts"><a>Posts</a></Link> - {' '}
      {!user?.id
        ? <Link href="/login"><a>Login</a></Link>
        : <Link href="/logout"><a>Logout</a></Link>
      }
    </div>
  )
}



export default Page
