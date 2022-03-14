import Layout from '../components/Layout/Layout'
import PostList from '../components/PostList/PostList'
import meta from '../content/meta'

// This is just a simple page with a lists of posts with the category "main"
export default function Home() {
  return (
    <Layout title={meta.name} description={meta.description} >
      <PostList category="main" />
    </Layout>
  )
}
