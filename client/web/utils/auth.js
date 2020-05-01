import fetch from 'node-fetch'

function handleErrors(res) {
  if (!res.ok) throw Error(res.statusText);
  return res
}

async function get(url = null, ctx = null, opt = null) {

  let options = { credentials: "include", ...opt }

  if (ctx.req) options.headers = { cookie: ctx.req.headers.cookie };

  const data = await (await fetch(url, options).then(handleErrors)).json()
  if (data.code && data.code === 400) return;

  return data
}

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
  let { req } = ctx
  const options = {
    method: 'POST',
    credentials: "include"
  }

  if (req) {
    options.headers = { cookie: req.headers.cookie }
  }

  const url = `${process.env.APP_URL}/api/logout`
  const data = await fetch(url, options)

  return data
}

export function current(ctx = {}) {
  return get(`${process.env.APP_URL}/api/me`, ctx)
}