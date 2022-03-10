import React from 'react'
import Head from 'next/head'

const HeadComponent = ({ name, description }) => {
  return <Head>
    <title>{name}</title>
    <meta name="description" content={description} />
    <link rel="icon" href="/favicon.ico" />
  </Head>
}

export default HeadComponent
