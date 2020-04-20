import { useState } from 'react'
import fetch from 'node-fetch'
import {login} from '../utils/auth'

import Navbar from '../components/navbar'


const Home = ({}) => {

  const [auth, setAuth] = useState({
    identifier: '',
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
    await login({identifier: auth.identifier,password: auth.password})
  }

  return (
    <>
      <Navbar />
      <h1>Login Form</h1><br />
      {auth.username || "None"} | {auth.password || "None"}
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="identifier" id="identifier" value={auth.identifier} onChange={handleChange} />
          <input type="password" name="password" id="password" value={auth.password} onChange={handleChange} />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  )
}

export default Home