# Next.js Blog Template

This is a simple blog template to quickly get started with writing. It has a clean design and provides a lot of flexibility.

[Demo](https://wwebdev-nextjs-blog-template.vercel.app/)

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwwebdev%2Fnextjs-blog-template)

Want to deploy somewhere else than Vercel? Check this blog post on how to export Next.js images:

[Next.js 11 Images with Static Export](https://maxrohde.com/2021/07/25/next-js-11-images-with-static-export/)


## How does it work?

- In general you can just browse through the repository to get a better understanding on how things work - I left comments on the most important parts.

- The most important page infos and the navigation can be set in the `/content/meta.js`. They are used on various places around the website.

- To add a new blog post create an entry in the `/content/posts.js`. Then you can create the corresponding page under `pages/*.js`. The structure of the pages is up to you. Have a look at the demo pages in `/pages/blog/` to see how the layout works.

- You can assign categories to blog posts. Then use the PostList component to render the posts based on the category. Have a look at `/pages/index.js` to see how it works.

- The colors and theming can be updated by changing the `/styles/variables.css`


## License
[MIT](https://choosealicense.com/licenses/mit/)


---


*created by [Vincent Will](https://twitter.com/wweb_dev)*
