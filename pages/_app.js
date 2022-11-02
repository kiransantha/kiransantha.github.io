import React, { Component } from 'react';
import Head from 'next/head';

import '../styles/global_styles.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans&family=Montserrat:wght@300&family=Source+Sans+Pro&display=swap" rel="stylesheet" />      </Head>
      <Component {...pageProps} />
    </>
  )
}