const Cookies = require('cookies')
const fetch = require('node-fetch')

export default async (req, res) => {
    // res.setHeader('Content-Type', 'application/json')

    const cookies = new Cookies(req, res);

    if (req.method === 'GET') {
        let token = cookies.get("Authorization")
        if (token) {

            const url = `${process.env.API_URL}/users/me`
            const data = await fetch(url, {
                credentials: "include",
                headers: {
                    cookie: req.headers.cookie
                }
            })

            if (data.ok) {
                const json = await data.json()
                res.status(200).json(json)
            }

        }

        cookies.set("user", null, {
            domain: `.${process.env.PROXY_HOST}`,
            maxAge: 0, overwrite: true
        })
        res.status(200).json({})
        return;

    }

    res.status(500).end()
}