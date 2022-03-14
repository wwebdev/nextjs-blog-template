import PostLayout from '../../components/Layout/PostLayout'

const markdown = `
You can also write posts in *Markdown*. Just add the create a post that looks like this:

~~~
<PostLayout useMarkdown={true}>
  your markdown
</PostLayout>
~~~


I included the library [react-markdown](https://www.npmjs.com/package/react-markdown) to achieve that. For more details check their documentation.

To fill the page here is an image of a cat:

![Cat Image](/posts/post2.jpg "This is a cat!")
`

const Post = () => {
  return <PostLayout useMarkdown={true}>
    {markdown}
  </PostLayout>
}

export default Post
