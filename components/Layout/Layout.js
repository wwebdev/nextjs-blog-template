import React from 'react'
import styles from './Layout.module.css'
import Head from '../Head/Head'
import Navigation from '../Navigation/Navigation'

const Layout = ({ children, title, description }) => {
  return <div>
    <Head name={title} description={description} />
    <Navigation />

    <header className={styles.header}>
      <h1 className={styles.title}>
        {title}
      </h1>

      <p className={styles.description}>
        {description}
      </p>
    </header>

    <main className={styles.main}>
      {children}
    </main>

    <footer className={styles.footer}>
      <a
        href="https://wweb.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by wweb.dev
      </a>
    </footer>
  </div>
}

export default Layout
