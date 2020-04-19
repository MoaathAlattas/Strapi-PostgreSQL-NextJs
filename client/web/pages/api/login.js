import Cookies from 'cookies'
import fetch from 'node-fetch'


export default async (req, res) => {
    res.setHeader('Content-Type', 'application/json')

    const cookies = new Cookies(req, res);
    
    if (req.method === 'POST') {

      if(!cookies.get("Authorization")){

        let {identifier, password} = req.body

        const url = 'http://api.hhar.com/auth/local'
        const data = await fetch(url, {
            method: 'POST',
            credentials: "include",
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify({identifier,password})
          })
      
          if (data.ok) {
            const json = await data.json()
            cookies.set("Authorization", json.jwt, { httpOnly: true, domain:"hhar.com" });
            res.status(200).json(json)
          } else {
            res.status(401).json({ name: "you Suck!" })
          }

      }else{
        //refresh token
        res.status(200).json({jwt:cookies.get("Authorization")})
      }
        
      }

    res.status(500).end()

  }