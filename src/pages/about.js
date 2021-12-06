import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const About = () => {
  return (
    <div>
      <Layout>
        <h2>About Me</h2>
        <p>This is an about page</p>
        <p>Like what you see? <Link to='/contact'>Contact Me</Link></p>
      </Layout>
    </div>
  )
}

export default About
