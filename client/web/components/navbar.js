import Link from 'next/link'
import { useState, useEffect } from 'react'
import {current} from '../utils/auth'
const Page = ({}) => {

  const [user, setUser] = useState({})
  
  const getUser = async () => {
    const currentUser = await current()
    setUser(currentUser)
  }
  
useEffect(()=>{
   if(!user.id) getUser(); 
},[])

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
