import fetch from 'node-fetch'

export async function login({identifier,password}){

    const url = 'http://hhar.com/api/login'
    const data = await fetch(url, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({identifier,password})
    })


    if (data.ok) {
        console.log(data)
        return await data.json()
      } else {
        console.log("you Suck!")
        return;
      }

}

export async function logout(){

    const url = 'http://hhar.com/api/logout'
    const data = await fetch(url, {method: 'POST'})

    if (data.ok) {
      console.log(data)
    } else {
      console.log("you Suck!")
    }
}

export async function current(ctx={}){
    const {req} = ctx
    const options = {
        credentials: "include",
    }

    if (req) options.headers = { cookie: req.headers.cookie };

    const url = 'http://api.hhar.com/users/me'
    const data = await fetch(url, options)

    if(data.ok){
      const js = await data.json()
      return js
    }else{
        return {}
    }

}