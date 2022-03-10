import React from 'react'
import Image from 'next/image'
// Add your own social icons by using https://mui.com/components/material-icons
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'
import RssFeedIcon from '@mui/icons-material/RssFeed'

import styles from './Navigation.module.css'
import meta from '../../content/meta'

const pages = meta.pages || []

const Navigation = () => {
    return <div className={styles.wrapper}>
      <nav className={styles.container}>
        <input type="checkbox" aria-label="Toggle menu" />
        <span></span>
        <span></span>
        <span></span>

        <a href="#" className={styles.logo}>
          <Image
            src="/imgs/logo-placeholder.png"
            alt="My Awesome Website"
            width={84} // adjust based on your image
            height={40} // adjust based on your image
            priority
          />
        </a>
        <div className={styles.navigation}>
          <ul>
            {pages.map(page =>
              <li key={page.link}>
                <a href={page.link}>
                  {page.name}
                </a>
              </li>
            )}
          </ul>
          <ul className={styles.socialIcons}>
            <li>
              <a href="https://twitter.com/wweb_dev">
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a href="https://github.com/wwebdev/nextjs-blog-template">
                <GitHubIcon />
              </a>
            </li>
            <li>
              <a href="/rss.xml">
                <RssFeedIcon />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
}

export default Navigation
