import React, { useState, useEffect } from "react"
import { css } from "@emotion/react"
import useProperties from "../hooks/useProperties"
import PropertyPreview from "./propertyPreview"
import * as propertiesListCSS from "../css/propertiesList.module.css"

const PropertiesList = () => {
  const result = useProperties()

  const [properties, saveProperties] = useState([])

  useEffect(() => {
    saveProperties(result)
  }, [])

  return (
    <>
      <h2
        css={css`
          margin-top: 5rem;
        `}
      >
        Nuestras propiedades
      </h2>
      <ul className={propertiesListCSS.properties}>
        {properties.map(property => (
          <PropertyPreview key={property.id} property={property} />
        ))}
      </ul>
    </>
  )
}

export default PropertiesList
