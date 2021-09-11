import React, { useState, useEffect } from "react"
import { css } from "@emotion/react"
import useProperties from "../hooks/useProperties"
import PropertyPreview from "./propertyPreview"
import * as propertiesListCSS from "../css/propertiesList.module.css"
import useFilter from "../hooks/useFilter"

const PropertiesList = () => {
  const result = useProperties()
  const [properties] = useState(result)
  const [filtered, saveFiltered] = useState([])

  // Filtrado de propiedades
  const { category, FilterUI } = useFilter()

  useEffect(() => {
    if (category) {
      const filter = properties.filter(
        property => property.category.nombre === category
      )
      saveFiltered(filter)
    } else {
      saveFiltered(properties)
    }
  }, [category])

  console.log(properties)
  return (
    <>
      <h2
        css={css`
          margin-top: 5rem;
        `}
      >
        Nuestras propiedades
      </h2>

      {FilterUI()}
      <ul className={propertiesListCSS.properties}>
        {filtered.map(property => (
          <PropertyPreview key={property.id} property={property} />
        ))}
      </ul>
    </>
  )
}

export default PropertiesList
