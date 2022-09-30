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
      v300b2: file(
        relativePath: {
          eq: "downloads/foo_uie_console-3.0.0-beta.2.x86-x64.fb2k-component"
        }
      ) {
        ...DownloadFile
      }
      latestVersion: file(
        relativePath: { eq: "downloads/foo_uie_console-2.0.0.fb2k-component" }
      ) {
        ...DownloadFile
      }
      previousVersion101: file(
        relativePath: { eq: "downloads/foo_uie_console-1.0.1.fb2k-component" }
      ) {
        ...DownloadFile
      }
      previousVersion050: file(
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

      <h4 className="title is-4">Latest pre-release version</h4>
      <UnorderedIconList>
        <DownloadLinkListItem
          file={files.v300b2}
          label="Version 3.0.0 beta 2"
        />
      </UnorderedIconList>

      <h4 className="title is-4">Latest stable version</h4>
      <UnorderedIconList>
        <DownloadLinkListItem
          file={files.latestVersion}
          label="Version 2.0.0"
        />
      </UnorderedIconList>

      <h4 className="title is-4">Previous versions</h4>
      <UnorderedIconList>
        <DownloadLinkListItem
          file={files.previousVersion101}
          label="Version 1.0.1"
        />
        <DownloadLinkListItem
          file={files.previousVersion050}
          label="Version 0.5.0"
        />
      </UnorderedIconList>

      <h3 className="title is-3">Links</h3>
      <UnorderedIconList>
        <ExternalLinkListItem
          href={`https://github.com/reupen/${repo}`}
          label="GitHub project"
        />
        <ExternalLinkListItem
          href={`https://github.com/reupen/${repo}/releases`}
          label="Release notes"
        />
      </UnorderedIconList>
    </Layout>
  )
}

export default ConsolePanelPage
