import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import DownloadLinkListItem from "../components/DownloadLinkListItem"
import UnorderedIconList from "../components/UnorderedIconList"
import GitHubStars from "../components/GitHubStars"
import ExternalLinkListItem from "../components/ExternalLinkListItem"

const AlbumListPanelPage = ({ location }) => {
  const files = useStaticQuery(graphql`
    query {
      latestVersion: file(
        relativePath: { eq: "downloads/foo_uie_albumlist-0.4.1.fb2k-component" }
      ) {
        ...DownloadFile
      }
      version040b7: file(
        relativePath: {
          eq: "downloads/foo_uie_albumlist-0.4.0-beta.7.fb2k-component"
        }
      ) {
        ...DownloadFile
      }
      version037: file(
        relativePath: { eq: "downloads/foo_uie_albumlist-0.3.7.fb2k-component" }
      ) {
        ...DownloadFile
      }
    }
  `)

  const title = "Album list panel"
  const description =
    "Album list panel – hierarchical media library browser for Columns UI"
  const repo = "album_list_panel"

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
        Album list panel is a Columns UI panel that allows you to browse your
        music library in a hierarchical structure.
      </p>

      <h3 className="title is-3">Downloads</h3>
      <h4 className="title is-4">Latest version</h4>
      <UnorderedIconList>
        <DownloadLinkListItem
          file={files.latestVersion}
          label="Version 0.4.1"
        />
      </UnorderedIconList>

      <h4 className="title is-4">Older versions</h4>
      <UnorderedIconList>
        <DownloadLinkListItem
          file={files.version040b7}
          label="Version 0.4.0 beta 7"
        />
        <DownloadLinkListItem file={files.version037} label="Version 0.3.7" />
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

export default AlbumListPanelPage
