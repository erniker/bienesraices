import { graphql, useStaticQuery } from "gatsby"

const useProperties = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiPropiedades {
        nodes {
          nombre
          descripcion
          id
          wc
          precio
          estacionamiento
          habitaciones
          categoria {
            nombre
          }
          agentes {
            nombre
            telefono
            email
          }
          imagen {
            sharp: childImageSharp {
              fluid(maxWidth: 600, maxHeight: 400) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  // console.log(data)
  return data.allStrapiPropiedades.nodes.map(property => ({
    name: property.nombre,
    description: property.description,
    image: property.imagen,
    id: property.id,
    wc: property.wc,
    parking: property.estacionamiento,
    rooms: property.habitaciones,
    agents: property.agentes,
    price: property.precio,
    category: property.categoria,
  }))
}

export default useProperties
