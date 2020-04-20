import Link from 'next/link'
import { useEffect } from 'react'
import Navbar from '../components/navbar'
import {logout} from '../utils/auth'

const Page = () => {

useEffect(()=>{ logout() },[])

  return (
    <div>
        <Navbar />
        <h1>Logged out!</h1>
    </div>
  )
}


export default Page
