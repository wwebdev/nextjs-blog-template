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
        { layout !== 'simple' && <div className={styles.imageContainer}>
          <Image src={post.image} alt={post.title} layout="fill" />
        </div> }
        <div className={styles.postContent}>
          { post.date && <date>{post.date}</date> }
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
