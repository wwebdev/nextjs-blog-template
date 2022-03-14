import Layout from '../components/Layout/Layout'
import PostList from '../components/PostList/PostList'

export default function Category() {
  return (
    <Layout title="Another Page" description="You can sort your posts by category and have different layouts!">
      <PostList category="category" layout="simple" />
    </Layout>
  )
}
