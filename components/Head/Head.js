import React from 'react'
import Head from 'next/head'
import meta from '../../content/meta'

const HeadComponent = ({ name, description }) => {
  const title = meta.name === name
    ? name
    : `${name} | ${meta.name}` // append website name to title if it's not equal

  return <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="icon" href="/favicon.ico" />
  </Head>
}

export default HeadComponent
