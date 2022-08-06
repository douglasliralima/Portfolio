import type { NextPage } from 'next'

import Grid from '@mui/material/Grid';

import Projects from '../components/Projects'
import Info from '../components/Info'
import Head from 'next/head'

import Typograph from "../styles/typograph.module.css"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Douglas Felizardo</title>
        <meta name="description" content="Portfolio created by Douglas Felizardo" />
        <link rel="icon" href="/favicon.ico" /> 
        <link href="https://fonts.googleapis.com/css2?family=Tiro+Telugu&display=swap" rel="stylesheet"></link> 
      </Head>

      <Grid container spacing={2} sx={{marginTop: "5px"}}>
          <Grid item xs={2} sx={{textAlign: "center"}}>
            Software Engineer
          </Grid>
          <Grid item xs={2} sx={{textAlign: "center"}}>
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
            <Grid item  xs={1}>
              Blog
            </Grid>
        </Grid>
      </Grid>

    </div>
  )
}

export default Home
