import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Navegation = styled.nav`
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;

  @media (min-width: 768px) {
    padding: 0;
    flex-direction: row;
  }
`

const NavLink = styled(Link)`
  color: #fff;
  font-weight: 700;
  font-family: "PT Sans", sans-serif;
  text-decoration: none;
  padding: 0.5rem;
  margin-right: 1rem;
  &:last-of-type {
    margin-right: 0;
  }
  &.current-page {
    border-bottom: 2px solid #fff;
  }
`

const Nav = () => {
  return (
    <>
      <Navegation>
        <NavLink to={"/"} activeClassName="current-page">
          Inicio
        </NavLink>
        <NavLink to={"/aboutus"} activeClassName="current-page">
          Sobre Nosotros
        </NavLink>
        <NavLink to={"/immovables"} activeClassName="current-page">
          Propiedades
        </NavLink>
      </Navegation>
    </>
  )
}

export default Nav
