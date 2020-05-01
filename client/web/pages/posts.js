import MainLayout from '../layouts/mainLayout'
import { query } from '../services/api'
import WithAuth from '../components/helpers/withAuth'

const Posts = ({ posts }) => {
  return (
    <MainLayout>
      <h1>Posts</h1><br />
      {posts[0] && posts.map((post) => (
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
  const posts = await query.find('posts')
  return { posts }
}


export default WithAuth(Posts)
