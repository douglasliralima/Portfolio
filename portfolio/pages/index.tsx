import type { NextPage } from 'next'

import Head from 'next/head'

import styles from "./index.module.css"
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Douglas Felizardo</title>
        <meta name="description" content="Portfolio created by Douglas Felizardo" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      {/* <div className={styles.blackPage} /> */}
      <div className={styles.home} style={{ height: "100%" }}>
        <Header />
        <div className='body' style={{ marginLeft: "20px" }}>
          <p className={styles.name1}>DOUGLAS LIMA</p>
          <p className={styles.name2}>SOFTWARE ENGINEER</p>
        </div>
        <Footer />

      </div>

    </div>
  )
}

export default Home
