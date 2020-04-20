import Cookies from 'cookies'

export default async (req, res) => {

    const cookies = new Cookies(req, res);
    
    if (req.method === 'POST' && cookies.get("Authorization")) {
        cookies.set("Authorization", null, {
            domain: '.hhar.com',
            maxAge: 0, overwrite:true
        });
        res.status(200).end()
    }
    
    res.status(404).end()

  }