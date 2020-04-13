import fetch from 'node-fetch'
import { useRouter } from 'next/router'

const Home = ({ data }) => {
    return (
        <>
            <h1>Next.js App!</h1><br />
            <div>
                <h2>{data.title}</h2>
                <p>{data.content}</p>
                <hr />
            </div>
        </>
    )
}

Home.getInitialProps = async (ctx) => {
    const { id } = ctx.query
    const res = await fetch(`http://${process.env.API_URL}/posts/${id}`)
    return { data: await res.json() }
}


export default Home