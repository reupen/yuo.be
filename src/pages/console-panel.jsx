import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import DownloadLinkListItem from "../components/DownloadLinkListItem"
import UnorderedIconList from "../components/UnorderedIconList"
import GitHubStars from "../components/GitHubStars"
import ExternalLinkListItem from "../components/ExternalLinkListItem"

const ConsolePanelPage = ({ location }) => {
  const files = useStaticQuery(graphql`
    query {
      latestVersion: file(
        relativePath: { eq: "downloads/foo_uie_console-1.0.1.fb2k-component" }
      ) {
        ...DownloadFile
      }
      previousVersion: file(
        relativePath: { eq: "downloads/foo_uie_console-0.5.0.fb2k-component" }
      ) {
        ...DownloadFile
      }
    }
  `)

  const title = "Console panel"
  const description = "Console panel – console viewer for Columns UI"
  const repo = "console_panel"

  return (
    <Layout
      pathname={location.pathname}
      title={title}
      description={description}
    >
      <p>
        <GitHubStars repo={repo} />
      </p>
      <p>Console panel is a console viewer for Columns UI.</p>

      <h3 className="title is-3">Downloads</h3>

      <h4 className="title is-4">Latest version</h4>
      <UnorderedIconList>
        <DownloadLinkListItem
          file={files.latestVersion}
          label="Version 1.0.1"
        />
      </UnorderedIconList>

      <h4 className="title is-4">Previous version</h4>
      <UnorderedIconList>
        <DownloadLinkListItem
          file={files.previousVersion}
          label="Version 0.5.0"
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

export default ConsolePanelPage
