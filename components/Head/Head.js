import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import meta from '../../content/meta'

const HeadComponent = ({ name, description, image = meta.shareImage, isArticle }) => {
  const { baseUri = '' } = meta
  const router = useRouter()
  const link = baseUri + router.pathname
  const imageLink = baseUri + image // TODO

  const title = meta.name === name
    ? name
    : `${name} | ${meta.name}` // append website name to title if it's not equal

  return <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
    <link rel='apple-touch-icon' sizes='192x192' href='apple-icon.png' />
    <link rel="canonical" href={link} />
    <meta charSet="utf-8"></meta>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
    <meta name='application-name' content={title} />
    <meta name='apple-mobile-web-app-capable' content='yes' />
    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
    <meta name='apple-mobile-web-app-title' content={title} />
    <meta name='format-detection' content='telephone=no' />
    <meta name='mobile-web-app-capable' content='yes' />
    <meta name='msapplication-config' content='/static/icons/browserconfig.xml' />
    <meta name='msapplication-TileColor' content='#fff' />
    <meta name='msapplication-tap-highlight' content='no' />
    <meta name="description" content={description} />
    <meta name="theme-color" content='#232323' />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content={link} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={imageLink} />
    { meta.twitter && <meta name="twitter:creator" content={`@${meta.twitter}`} /> }
    <meta property="og:title" content={title} />
    <meta property="og:image" content={imageLink} />
    <meta property="og:site_name" content={meta.name} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={link} />
    { isArticle && <meta property="og:type" content="article" /> }
  </Head>
}

export default HeadComponent
