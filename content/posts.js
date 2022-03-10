const posts = [
  {
    title: 'My New Blog',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren...',
    image: '/posts/post1.jpg',
    link: '/blog/first_post',
    categories: ['main'] // specifies where it will be rendered
  },
  {
    title: 'This is written in Markdown',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren...',
    image: '/posts/post2.jpg',
    link: '/blog/second_post',
    categories: ['main', 'category']
  },
  {
    title: 'How does it work?',
    description: 'This is an external link to my website where I explain this template. Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren...',
    image: '/posts/post3.jpg',
    link: 'todo',
    categories: ['main']
  }
]

export default posts
