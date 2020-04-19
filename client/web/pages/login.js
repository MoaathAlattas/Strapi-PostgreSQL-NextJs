import { useState } from 'react'
import fetch from 'node-fetch'
import Cookies from 'js-cookie'
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

  const logout = async () => {
    const url = 'http://hhar.com/api/logout'

    const req = await fetch(url, {
      method: 'POST',
      //credentials: "include",
    })

    if (req.ok) {
      console.log(req)
    } else {
      console.log("you Suck!")
    }
  }

  const cok = () => {
    console.log(Cookies.get())
    console.log(Cookies.get('Authorization'))
  }

  return (
    <>
      <h1>Login Form</h1><br />
      {auth.username || "None"} | {auth.password || "None"}
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" id="username" value={auth.username} onChange={handleChange} />
          <input type="password" name="password" id="password" value={auth.password} onChange={handleChange} />
          <button type="submit">Login</button>
        </form>
        <button onClick={logout}>Logout</button>
      </div>
      <button onClick={fetchData}>Fetch Now</button>
      <button onClick={cok}>Get Cookies</button>
    </>
  )
}

Home.getInitialProps = ({ req, res }) => {

  return {}

}

export default Home