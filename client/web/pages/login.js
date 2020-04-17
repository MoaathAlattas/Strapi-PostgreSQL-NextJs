import { useState } from 'react'
import fetch from 'node-fetch'

const Home = ({ data }) => {

  const [auth, setAuth] = useState({
    username: '',
    password: '',
    jwt: '',
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
    const url = 'http://api.hhar.com/auth/local'

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        identifier: auth.username,
        password: auth.password
      })
    })


    if (res.ok) {
      const json = await res.json()
      setAuth({
        ...auth,
        jwt: json.jwt,
      })
    } else {
      console.log("you Suck!")
    }

  }


  const fetchData = async () => {
    const req = await fetch("//api.hhar.com/posts", {
      headers: {
        Authorization: `Bearer ${auth.jwt}`,
      },
    })
    const json = await req.json()
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
      </div>

      <button onClick={fetchData}>Fetch Now</button>

    </>
  )
}

Home.getInitialProps = (ctx) => {

  return {
    "data": {
      token: "x"
    }
  }
}


export default Home
