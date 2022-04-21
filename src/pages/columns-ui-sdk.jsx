import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import DownloadLinkListItem from "../components/DownloadLinkListItem"
import UnorderedIconList from "../components/UnorderedIconList"
import GitHubStars from "../components/GitHubStars"
import ExternalLinkListItem from "../components/ExternalLinkListItem"

const ColumnsUISDKPage = ({ location }) => {
  const files = useStaticQuery(graphql`
    query {
      latestVersion: file(
        relativePath: { eq: "downloads/columns_ui-sdk-7.0.0-beta.1.7z" }
      ) {
        ...DownloadFile
      }
    }
  `)

  const title = "Columns UI SDK"
  const description =
    "Columns UI SDK – software development kit for Columns UI panels"
  const repo = "columns_ui-sdk"

  return (
    <Layout
      pathname={location.pathname}
      title={title}
      description={description}
    >
      <p>
        <GitHubStars repo={repo} />
      </p>
      <p>
        The Columns UI SDK allows you to develop panel components for Columns
        UI. See the documentation for more information.
      </p>

      <h3 className="title is-3">Downloads</h3>
      <h4 className="title is-4">Latest version</h4>
      <UnorderedIconList>
        <DownloadLinkListItem
          file={files.latestVersion}
          label="Version 7.0.0 beta 1"
        />
      </UnorderedIconList>

      <h3 className="title is-3">Links</h3>
      <UnorderedIconList>
        <ExternalLinkListItem
          href="https://yuo.be/columns_ui-sdk-documentation/"
          label="Documentation"
        />
        <ExternalLinkListItem
          href={`https://github.com/reupen/${repo}`}
          label="GitHub project"
        />
      </UnorderedIconList>
    </Layout>
  )
}

export default ColumnsUISDKPage
