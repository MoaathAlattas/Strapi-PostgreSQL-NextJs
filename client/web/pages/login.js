import { useState } from 'react'
import Router from "next/router"
import {login} from '../utils/auth'

import Navbar from '../components/navbar'


const Page = ({}) => {

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
    const result =  await login({identifier: auth.identifier,password: auth.password})
    if(result.jwt){
     if(Router.query && Router.query.redirect){ 
        Router.push(Router.query.redirect)
    }else{
      Router.push('/')
    }

    }
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

export default Page