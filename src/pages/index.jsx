import React from "react"

import Layout from "../components/Layout"

const IndexPage = ({ location }) => (
  <Layout pathname={location.pathname}>
    <h2 className="title is-2">musicmusic’s foobar2000 stuff</h2>
    <p>
      On this site, you’ll find various components I’ve written for the{" "}
      <a href="https://foobar2000.org">foobar2000 audio player</a>.
    </p>
    <p>Use the links to the left to navigate between pages.</p>
    <p>
      This website was built using{" "}
      <a href="https://www.gatsbyjs.org/">Gatsby</a> and is{" "}
      <a href="https://github.com/reupen/yuo.be">open source</a>.
    </p>
  </Layout>
)

export default IndexPage
