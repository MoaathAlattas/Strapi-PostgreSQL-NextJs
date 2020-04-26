const Cookies = require('cookies')

export default async (req, res) => {

    const cookies = new Cookies(req, res);

    if (req.method === 'POST' && cookies.get("Authorization")) {
        cookies.set("Authorization", null, {
            domain: `.${process.env.PROXY_HOST}`,
            maxAge: 0, overwrite: true
        });
        res.status(200).end()
    }

    res.status(404).end()

}