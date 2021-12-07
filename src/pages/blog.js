import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'

import * as blogStyles from './blog.module.scss'

const ArticleGrid = () => {
  const posts = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <Layout>
        <h1>Blog</h1>
          <ol className={blogStyles.posts}>
            {posts.allMarkdownRemark.edges.map(post => {
              return (
                  <li className={blogStyles.postLink}>
                    <Link 
                      to={`/blog${post.node.fields.slug}`} 
                      key={post.node.frontmatter.title} 
                    >
                      <h2>{post.node.frontmatter.title}</h2>
                      <em>{post.node.frontmatter.date}</em>
                      <p>{post.node.excerpt}</p>
                    </Link>
                  </li>
              )
            })}
          </ol>
      </Layout>
    </div>
  )
}

export default ArticleGrid
