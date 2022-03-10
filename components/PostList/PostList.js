import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import posts from '../../content/posts'
import styles from './PostList.module.css'

const PostList = ({ category, layout }) => {
  const postList = posts.filter(p => p.categories.includes(category)) || []

  return <section className={styles.container}>
    { postList.map(post =>
      <div key={post.title} className={styles.post}>
        <Image src={post.image} alt={post.title} width={200} height={100}/>
        <div className={styles.postContent}>
          <h2>
            <Link href={post.link}>
              <a>{post.title}</a>
            </Link>
          </h2>
          <p>{post.description}</p>
        </div>
      </div>
    )}
  </section>
}

export default PostList
