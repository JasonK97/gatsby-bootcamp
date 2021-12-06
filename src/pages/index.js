import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Home = () => {
  return (
    <Layout>
      <h1>Hello world!</h1>
      <h2>I'm Jason, a full-stack developer who lives in Idaho.</h2>
      <p>Learn more about me. <Link to='/about'>About Me</Link></p>
    </Layout>
  )
}

export default Home
