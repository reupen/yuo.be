import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import DownloadLinkListItem from "../components/DownloadLinkListItem"
import UnorderedIconList from "../components/UnorderedIconList"
import GitHubStars from "../components/GitHubStars"
import ExternalLinkListItem from "../components/ExternalLinkListItem"

const TypefindPanelPage = ({ location }) => {
  const files = useStaticQuery(graphql`
    query {
      latestVersion: file(
        relativePath: { eq: "downloads/foo_uie_typefind-0.3.1.fb2k-component" }
      ) {
        ...DownloadFile
      }
    }
  `)

  const title = "Typefind panel"
  const description = "Typefind panel – in-line playlist search bar Columns UI"
  const repo = "typefind_panel"

  return (
    <Layout
      pathname={location.pathname}
      title={title}
      description={description}
    >
      <p>
        <GitHubStars repo={repo} />
      </p>
      <p>Typefind is an in-line playlist search bar Columns UI.</p>

      <h3 className="title is-3">Downloads</h3>
      <h4 className="title is-4">Latest version</h4>
      <UnorderedIconList>
        <DownloadLinkListItem
          file={files.latestVersion}
          label="Version 0.3.1"
        />
      </UnorderedIconList>

      <h3 className="title is-3">Links</h3>
      <UnorderedIconList>
        <ExternalLinkListItem
          href={`https://github.com/reupen/${repo}`}
          label="GitHub project"
        />
      </UnorderedIconList>
    </Layout>
  )
}

export default TypefindPanelPage
