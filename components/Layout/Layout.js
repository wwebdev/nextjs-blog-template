import React from 'react'
import Image from 'next/image'
import styles from './Layout.module.css'
import Head from '../Head/Head'
import Navigation from '../Navigation/Navigation'

const Layout = ({ children, title, description, image, isArticle = false }) => {
  return <div>
    <Head name={title} description={description} image={image} isArticle={isArticle} />
    <Navigation />

    { title && <header className={image ? styles.imageHeader : styles.header}>
      { image && <Image src={image} alt={title} layout='fill' /> }
      <h1 className={styles.title}>
        {title}
      </h1>

      { description && <p className={styles.description}>
        {description}
      </p> }
    </header> }

    <main className={styles.main}>
      {children}
    </main>

    <footer className={styles.footer}>
        Created by <a
          href="https://wweb.dev"
          target="_blank"
          rel="noopener noreferrer"
        >wweb.dev</a>
    </footer>
  </div>
}

export default Layout
