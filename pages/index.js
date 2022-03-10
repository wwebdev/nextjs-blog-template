import Layout from '../components/Layout/Layout'
import PostList from '../components/PostList/PostList'
import meta from '../content/meta'

export default function Home() {
  return (
    <Layout title={meta.name} description={meta.description} >
      <PostList category="main" layout="todo" />
    </Layout>
  )
}
