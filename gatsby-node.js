exports.createPages = async ({actions, graphql, reporter}) => {

  const postResult = await graphql(`
        {
          allWpPost {
            nodes {
              __typename
              id
              databaseId
              uri
            }
          }
        }
    `)

  if (postResult.errors) {
    reporter.error("There was an error fetching posts", postResult.errors)
  }

  const {allWpPost} = postResult.data;

  let postTemplate = require.resolve(`./src/templates/WpPost.js`);

  allWpPost.nodes.map(post => {
    actions.createPage({
      path: post.uri,
      component: postTemplate,
      context: post
    })
  })

  const pageResult = await graphql(`
        {
        
          allWpPage {
            edges {
              node {
                id
                uri
              }
            }
          }
        }
    `)

  if (pageResult.errors) {
    reporter.error("There was an error fetching posts", pageResult.errors)
  }

  const {allWpPage} = pageResult.data;

  let pageTemplate = require.resolve(`./src/templates/WpPage.js`);

  allWpPage.edges.map(page => {
    actions.createPage({
      path: page.node.uri,
      component: pageTemplate,
      context: page
    })
  })
}
