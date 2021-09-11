const urlSlug = require("url-slug")
exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allStrapiPropiedades {
        nodes {
          nombre
          id
        }
      }
    }
  `)

  // If there is not results
  if (result.errors) {
    reporter.panic("Results not found", result.errors)
  }

  // If there is results, generate static files
  const properties = result.data.allStrapiPropiedades.nodes

  // Create properties templates
  properties.forEach(property => {
    actions.createPage({
      path: urlSlug(property.nombre),
      component: require.resolve("./src/components/property.js"),
      context: {
        id: property.id,
      },
    })
  })
}
