// Step 1: Importy React
import * as React from 'react'
import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Two Wojacks pointing enthusiastically at something in the background (there is nothing there)."
        src="../images/wojack.png"
      />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage