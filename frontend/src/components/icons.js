import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"

const IconsList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex: 1;
  max-width: 500px;
  margin: 3rem auto 0 auto;
  li {
    display: flex;
    img {
      margin-right: 1rem;
    }
  }
`
const Icons = ({ wc, parking, rooms }) => {
  const { icons } = useStaticQuery(graphql`
    query {
      icons: allFile(filter: { relativeDirectory: { eq: "iconos" } }) {
        edges {
          node {
            id
            publicURL
          }
        }
      }
    }
  `)

  const imagesIcons = icons.edges
  return (
    <>
      <IconsList>
        <li>
          <img src={imagesIcons[2].node.publicURL} alt="icono wc" />
          <p>{wc}</p>
        </li>
        <li>
          <img src={imagesIcons[1].node.publicURL} alt="icono parking" />
          <p>{parking}</p>
        </li>
        <li>
          <img src={imagesIcons[0].node.publicURL} alt="icono habitaciones" />
          <p>{rooms}</p>
        </li>
      </IconsList>
    </>
  )
}

export default Icons
