const posts = [
  {
    title: 'My New Blog',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren...',
    image: '/posts/post1.jpg',
    link: '/blog/first_post',
    categories: ['main'], // specifies where it will be rendered
    date: 'March 10 2022' // optional
  },
  {
    title: 'This is written in Markdown',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren...',
    image: '/posts/post2.jpg',
    link: '/blog/second_post',
    categories: ['main', 'category'],
    date: 'February 28 2022'
  },
  {
    title: 'Check out the GitHub Repo',
    description: 'This is an external link to GitHub. Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren...',
    image: '/posts/post3.jpg',
    link: 'https://github.com/wwebdev/nextjs-blog-template',
    date: 'February 09 2022',
    categories: ['main']
  }
]

export default posts
