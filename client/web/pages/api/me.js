const Cookies = require('cookies')
const fetch = require('node-fetch')

export default async (req, res) => {
    // res.setHeader('Content-Type', 'application/json')

    const cookies = new Cookies(req, res);

    if (req.method === 'GET') {
        let token = cookies.get("Authorization")
        if (token) {

            const url = `http://api.webapp.c/users/me`
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

        } else {
            res.status(200).json({})
            return;
        }

    }

    res.status(401).end()
}