import React from "react"
import Layout from "../components/layout"
import useInit from "../hooks/useInit"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"
import * as heroCSS from "../css/hero.module.css"
import Find from "../components/find"

const ImageBackground = styled(BackgroundImage)`
  height: 600px;
`

const Index = () => {
  const init = useInit()
  const { name, content, image } = init[0]
  return (
    <Layout>
      <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
        <div className={heroCSS.imagebg}>
          <h1>Venta de casas y departamentos exclusivos</h1>
        </div>
      </ImageBackground>
      <main>
        <div
          css={css`
            max-width: 800px;
            margin: 0 auto;
          `}
        >
          <h1>{name}</h1>
          <p
            css={css`
              text-align: center;
            `}
          >
            {content}
          </p>
        </div>
      </main>
      <Find />
    </Layout>
  )
}

export default Index
