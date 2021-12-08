const path = require('path')
// const { createFilePath } = require('gatsby-source-filesystem')

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === 'MarkdownRemark') {
//     // const slug = path.basename(node.fileAbsolutePath, '.md')
//     const slug = createFilePath({ node, getNode, basePath: `pages` })

//     createNodeField({
//       node,
//       name: 'slug',
//       value: slug
//     })
//   }
// }

exports.createPages = async ({ graphql, actions }) => {
  // const { createPage } = actions
  // const blogTemplate = path.resolve('./src/templates/blog.js')
  const { data } = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.allContentfulBlogPost.edges.forEach(edge => {
    // console.log(edge.node.fields.slug)
    actions.createPage({
      component: require.resolve('./src/templates/blog.js'),
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
}