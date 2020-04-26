const Cookies = require('cookies')
const fetch = require('node-fetch')

export default async (req, res) => {
  res.setHeader('Content-Type', 'application/json')

  const cookies = new Cookies(req, res);

  if (req.method === 'POST') {

    if (!cookies.get("Authorization")) {

      let { identifier, password } = req.body

      const url = `${process.env.API_URL}/auth/local`
      const data = await fetch(url, {
        method: 'POST',
        credentials: "include",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ identifier, password })
      })

      const json = await data.json()
      if (data.ok) {
        cookies.set("Authorization", json.jwt, { httpOnly: true, domain: `.${process.env.PROXY_HOST}` })
        cookies.set("user", JSON.stringify(json.user), { httpOnly: false, domain: `.${process.env.PROXY_HOST}` });
        res.status(200).json(json)
        return;
      } else {
        res.status(401).json({ json })
        return;
      }

    } else {
      //refresh token
      res.status(200).json({ jwt: cookies.get("Authorization") })
      return;
    }

  }

  res.status(500).end()

}