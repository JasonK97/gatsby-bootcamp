import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'

import * as blogStyles from './blog.module.scss'

const ArticleGrid = () => {
  const posts = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
        edges {
          node {
            title
            slug
            publishedDate (formatString:"MMMM Do, YYYY")
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
            {posts.allContentfulBlogPost.edges.map(post => {
              return (
                <li className={blogStyles.postLink} key={post.node.slug}>
                  <Link to={`/blog/${post.node.slug}`}>
                    <h2>{post.node.title}</h2>
                    <em>{post.node.publishedDate}</em>
                    {/* <p>{post.node.excerpt}</p> */}
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
