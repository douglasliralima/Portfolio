import type { NextPage } from 'next'

import Grid from '@mui/material/Grid';

import Head from 'next/head'

import styles from "./index.module.css"

const Header: NextPage = () =>
  <Grid container item className="Header" >
    <Grid alignItems="flex-start" container item>
      <Grid item xs={2} sx={{ textAlign: "center" }}>
        Software Engineer
      </Grid>
      <Grid item xs={2} sx={{ textAlign: "center" }}>
        FullStack
      </Grid>
      <Grid container item xs={8} direction="row" justifyContent="flex-end">
        <Grid item xs={1}>
          Home
        </Grid>
        <Grid item xs={1}>
          Work
        </Grid>
        <Grid item xs={1}>
          About
        </Grid>
        <Grid item xs={1}>
          Blog
        </Grid>
      </Grid>
    </Grid>
  </Grid>

const Home: NextPage = () => {
  return (
    <div style={{ marginTop: "5px" }}>
      <Head>
        <title>Douglas Felizardo</title>
        <meta name="description" content="Portfolio created by Douglas Felizardo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid container spacing={2} sx={{ height: "100%" }}>
        <Header />

        <Grid container item alignItems="center">
          <Grid item sx={{ marginLeft: "20px" }}>
            <p className={styles.name1}>DOUGLAS LIMA</p>
            <p className={styles.name2}>SOFTWARE ENGINEER</p>
          </Grid>
        </Grid>

        <Grid className="footer" container item alignItems="flex-end">
          <Grid item xs={1} sx={{ textAlign: "center" }}>
            Brazil 97
          </Grid>
          <Grid container item xs={11} spacing={2} direction="row" justifyContent="flex-end">
            <Grid item xs={1}>
              Github
            </Grid>
            <Grid item xs={1}>
              Linkedin
            </Grid>
            <Grid item xs={1}>
              Gmail
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </div>
  )
}

export default Home
