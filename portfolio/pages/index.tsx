import type { NextPage } from 'next'
import Projects from '../components/Projects'
import Info from '../components/Info'
import Head from 'next/head'

import Grid from "../styles/grid.module.css"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Douglas Felizardo</title>
        <meta name="description" content="Portfolio created by Douglas Felizardo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>
        Home
      </h2>
      <section className={Grid.homeGrid}>

        <a href="#">
          D
        </a>


        <span> Software Engineer Fullstack </span>

        <a href="#">
          Work
        </a>

        <p className={Grid.columnGridSpan2}>
          Douglas Felizardo
        </p>

        <div>
          <a target="_blank" href="https://www.linkedin.com/in/douglasliralima/" rel="noopener noreferrer">
            Linkedin
          </a>
          <br />
          <a target="_blank" href="https://github.com/douglasliralima" rel="noopener noreferrer">
            Github
          </a>
        </div>

        <a href="#">
          About
        </a>

        <span> Blog </span>

        <a href="mailto:douglasliralima@gmail.com">
          Contact
        </a>
      </section>

      <Projects />

      <Info />

    </div>
  )
}

export default Home
