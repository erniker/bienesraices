import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"

const Form = styled.form`
  width: 100%auto;
  display: flex;
  margin-top: 2rem;
  border: 1x solid #e1e1e1;
  max-width: 1200px;
  margin: 2rem auto 0 auto;
`

const Select = styled.select`
  flex: 1;
  padding: 1rem;
  appearance: none;
  border: none;
  font-family: "Lato", sans-serif;
`

const useFilter = () => {
  const [category, saveCategory] = useState("")

  const result = useStaticQuery(graphql`
    query {
      allStrapiCategorias {
        nodes {
          nombre
          id
        }
      }
    }
  `)
  const categories = result.allStrapiCategorias.nodes
  const FilterUI = () => (
    <Form>
      <Select onChange={e => saveCategory(e.target.value)} value={category}>
        <option value="">-- Filter --</option>
        {categories.map(option => (
          <option key={option.id} value={option.nombre}>
            {option.nombre}
          </option>
        ))}
      </Select>
    </Form>
  )
  return {
    category,
    FilterUI,
  }
}

export default useFilter
