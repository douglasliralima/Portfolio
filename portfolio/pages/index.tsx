import type { NextPage } from 'next'
import Projects from '../components/Projects'
import Info from '../components/Info'
import Contact from '../components/Contact'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Douglas Felizardo</title>
        <meta name="description" content="Portfolio created by Douglas Felizardo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <h2>
          Home
        </h2>
        <p>
          It will be like his home section
          https://klasik.studio/
        </p>

        <a href="mailto:douglasliralima@gmail.com">
          Contact
        </a>

        <br/><br/>
       
       <span>Software Engineer Fullstack</span>
        <p>Douglas</p>
        <p>Felizardo</p>
        <p>
          I really enjoy coding, from client or server side with python or JavaScript,
        </p>

        <br />
        <a target="_blank" href="https://www.linkedin.com/in/douglasliralima/" rel="noopener noreferrer">
          Linkedin
        </a>

        <br />
        <a target="_blank" href="https://github.com/douglasliralima" rel="noopener noreferrer">
          Github
        </a>
      </section>

      <Projects />

      <Info />

    </div>
  )
}

export default Home
