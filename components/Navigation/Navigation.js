import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

// Add your own social icons by using https://mui.com/components/material-icons
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'
import RssFeedIcon from '@mui/icons-material/RssFeed'
import FacebookIcon from '@mui/icons-material/Facebook'

import styles from './Navigation.module.css'
import meta from '../../content/meta'

const pages = meta.pages || []

const Navigation = () => {
  const router = useRouter()
  const activeRoute = `/${router.pathname.split('/')[1]}`

  return <div className={styles.wrapper}>
    <nav className={styles.container}>
      <input type="checkbox" aria-label="Toggle menu" />
      <span></span>
      <span></span>
      <span></span>

      <Link href="/">
        <a className={styles.logo}>
          <Image
            src="/imgs/logo-placeholder.png"
            alt="My Awesome Website"
            width={84} // adjust based on your image
            height={40} // adjust based on your image
            priority
          />
        </a>
      </Link>
      <div className={styles.navigation}>
        <ul>
          {pages.map(page =>
            <li key={page.link}>
              <Link href={page.link}>
                <a className={activeRoute === page.link ? styles.active : ''}>
                  {page.name}
                </a>
              </Link>
            </li>
          )}
        </ul>
        <ul className={styles.socialIcons}>
          { meta.twitter && <li>
            <a href={`https://twitter.com/${meta.twitter}`} title="Twitter">
              <TwitterIcon />
            </a>
          </li> }
          { meta.github && <li>
            <a href={meta.github} title="GitHub">
              <GitHubIcon />
            </a>
          </li> }
          { meta.facebook && <li>
            <a href={meta.facebook} title="Facebook">
              <FacebookIcon />
            </a>
          </li> }
          <li>
            <a href="/rss.xml" title="RSS">
              <RssFeedIcon />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
}

export default Navigation
