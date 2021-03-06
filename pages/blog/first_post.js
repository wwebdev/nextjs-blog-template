import Link from 'next/link'
import PostLayout from '../../components/Layout/PostLayout'

// defines the basic layout of posts with the /blog route
const Post = () => {
  return <PostLayout useImage={true}>
    <p>You can write your first post here!</p>

    <p>
      This Post uses an image as header because I added the parameter <code>{`useImage={true}`}</code>
    </p>

    <p>
      Just use normal HTML Elements to write the blog post. You would prefer to write Markdown? I&apos;ve got you covered.
      Check out the <Link href="/blog/second_post"><a>Second Blog Post</a></Link>
    </p>

    <blockquote>This is a quote</blockquote>
  </PostLayout>
}

export default Post
