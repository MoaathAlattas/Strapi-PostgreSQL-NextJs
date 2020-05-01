import MainLayout from '../layouts/mainLayout'
import { query } from '../services/api'
import WithAuth from '../components/helpers/withAuth'

const Posts = ({ data }) => {
  return (
    <MainLayout>
      <h1>Posts</h1><br />
      {data[0] && data.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <hr />
        </div>
      ))}
    </MainLayout>
  )
}

Posts.getInitialProps = async (ctx) => {
  globalThis.ctx = ctx
  return { data: await query.find('posts') }
}


export default WithAuth(Posts)
