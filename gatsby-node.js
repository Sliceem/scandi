exports.createPages = async ({actions, graphql, reporter}) => {

  //=================POSTS from WP=========================
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
      path: `/post${post.uri}`,
      component: postTemplate,
      context: post
    })
  })

  //=================PAGES from WP=========================
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
      path: `/page${page.node.uri}`,
      component: pageTemplate,
      context: page
    })
  })

  //=================LOCALPAGES from WP======================
  const local = [
    {
      name: "local",
      uri: "/test"
    }
  ]

  let localTemplate = require.resolve(`./src/templates/LocalPage.js`);

  local.map(localPage => {
    actions.createPage({
      path: `/page${localPage.uri}`,
      component: localTemplate,
      context: localPage
    })
  })
}
