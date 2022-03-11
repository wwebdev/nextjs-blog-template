import React from 'react'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import posts from '../../content/posts'
import Layout from './Layout'
import styles from './PostLayout.module.css'

const PostLayout = ({ children, useMarkdown, useImage }) => {
  const router = useRouter()
  const postData = posts.find(p => p.link === router.pathname)

  return <Layout title={postData.title} image={useImage && postData.image} isArticle>
    <section className={styles.container}>
      {useMarkdown && <ReactMarkdown>{children}</ReactMarkdown>}
      {!useMarkdown && children}
    </section>
  </Layout>
}

export default PostLayout
