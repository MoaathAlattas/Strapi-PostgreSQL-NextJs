import { useState } from 'react'
import fetch from 'node-fetch'
import Cookies from 'js-cookie'

import Navbar from '../components/navbar'


const Home = ({}) => {

  const [auth, setAuth] = useState({
    username: '',
    password: '',
    error: null
  })

  const handleChange = (e) => {
    setAuth({
      ...auth,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const url = 'http://hhar.com/api/login'

    const req = await fetch(url, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        identifier: auth.username,
        password: auth.password
      })
    })


    if (req.ok) {
      const res = await req.json()
      console.log(res)
    } else {
      console.log("you Suck!")
    }

  }


  const fetchData = async () => {

    const req = await fetch("http://api.hhar.com/posts",
      {
        credentials: "include",
      }
    )
    const json = await req.json()
    console.log(json)
  }

  return (
    <>
      <Navbar />
      <h1>Login Form</h1><br />
      {auth.username || "None"} | {auth.password || "None"}
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" id="username" value={auth.username} onChange={handleChange} />
          <input type="password" name="password" id="password" value={auth.password} onChange={handleChange} />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  )
}

export default Home