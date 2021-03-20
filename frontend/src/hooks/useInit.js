import { graphql, useStaticQuery } from "gatsby"

const useInicio = () => {
  const result = useStaticQuery(
    graphql`
      query {
        allStrapiPaginas(filter: { nombre: { eq: "Inicio" } }) {
          nodes {
            id
            nombre
            contenido
            imagen {
              sharp: childImageSharp {
                fluid(
                  maxWidth: 1800
                  duotone: {
                    highlight: "#222222"
                    shadow: "#192550"
                    opacity: 30
                  }
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `
  )
  return result.allStrapiPaginas.nodes.map(init => ({
    name: init.nombre,
    content: init.contenido,
    image: init.imagen,
  }))
}

export default useInicio
