import Link from 'next/link'
import { useState, useEffect } from 'react'
import Navbar from '../components/navbar'

const Page = ({}) => {

  
  const logout = async () => {
    const url = 'http://hhar.com/api/logout'

    const req = await fetch(url, {method: 'POST'})

    if (req.ok) {
      console.log(req)
    } else {
      console.log("you Suck!")
    }
  }

useEffect(()=>{ logout() },[])

  return (
    <div>
        <Navbar />
        <h1>Logged out!</h1>
    </div>
  )
}


export default Page
