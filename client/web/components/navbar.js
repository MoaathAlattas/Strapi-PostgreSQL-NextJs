import Link from 'next/link'
import { useState, useEffect } from 'react'

const Page = ({}) => {

  const [user, setUser] = useState({})
  
 const  getUser = async () => {
    const res = await fetch(`http://api.hhar.com/users/me`, {
      credentials: "include",
    })
    if(res.ok){
      const js = await res.json()
      setUser(js)
      return js
    }
  }
useEffect(()=>{ getUser() },[])

  return (
    <div>
        <Link href="/"><a>Home</a></Link> -
        <Link href="/posts"><a>Posts</a></Link> -
        <Link href="/login"><a>Login</a></Link> -
        <Link href="/logout"><a>Logout</a></Link> -
        ({user&& user.username})
    </div>
  )
}


export default Page
