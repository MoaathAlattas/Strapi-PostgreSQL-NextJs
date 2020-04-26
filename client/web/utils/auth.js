import fetch from 'node-fetch'

export async function login({ identifier, password }) {

  const url = `${process.env.APP_URL}/api/login`
  const data = await fetch(url, {
    method: 'POST',
    credentials: "include",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ identifier, password })
  })


  if (data.ok) {
    console.log(data)
    return await data.json()
  } else {
    console.log("you Suck!")
    return;
  }

}

export async function logout(ctx = {}) {
  const { req } = ctx
  const options = {
    method: 'POST',
    credentials: "include",
  }

  if (req) options.headers = { cookie: req.headers.cookie };

  const url = `${process.env.APP_URL}/api/logout`
  const data = await fetch(url, options)

  if (data.ok) {
    console.log(data)
  } else {
    console.log("you Suck!")
  }
  return data
}

export async function current(ctx = {}) {
  const options = {
    credentials: "include",
  }
  const url = `${process.env.APP_URL}/api/me`
  const data = await fetch(url, options)

  if (data.ok) {
    const js = await data.json()
    return js
  } else {
    return null
  }

}