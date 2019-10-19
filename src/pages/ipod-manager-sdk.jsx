import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import DownloadLinkListItem from "../components/DownloadLinkListItem"
import UnorderedIconList from "../components/UnorderedIconList"
import GitHubStars from "../components/GitHubStars"
import ExternalLinkListItem from "../components/ExternalLinkListItem"

const IPodManagerSDKPage = ({ location }) => {
  const files = useStaticQuery(graphql`
    query {
      latestVersion: file(relativePath: { eq: "downloads/dop-sdk-0.2.7z" }) {
        ...DownloadFile
      }
    }
  `)

  const title = "iPod manager SDK"
  const description =
    "iPod manager SDK – software development kit for iPod manager play count receivers"
  const repo = "ipod_manager"

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
        The iPod manager SDK allows other components to receive play count data
        from iPods.
      </p>

      <h3 className="title is-3">Downloads</h3>
      <h4 className="title is-4">Latest version</h4>
      <UnorderedIconList>
        <DownloadLinkListItem file={files.latestVersion} label="Version 0.2" />
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

export default IPodManagerSDKPage
