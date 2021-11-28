import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import FixedImage from "../components/FixedImage"
import DownloadLinkListItem from "../components/DownloadLinkListItem"
import UnorderedIconList from "../components/UnorderedIconList"
import GitHubStars from "../components/GitHubStars"
import ExternalLinkListItem from "../components/ExternalLinkListItem"

const ColumnsUIPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    {
      latestVersion: file(
        relativePath: { eq: "downloads/foo_ui_columns-1.7.0.fb2k-component" }
      ) {
        ...DownloadFile
      }
      oldVersion160: file(
        relativePath: { eq: "downloads/foo_ui_columns-1.6.0.fb2k-component" }
      ) {
        ...DownloadFile
      }
      oldVersion141: file(
        relativePath: { eq: "downloads/foo_ui_columns-1.4.1.fb2k-component" }
      ) {
        ...DownloadFile
      }
      oldVersion130: file(
        relativePath: { eq: "downloads/foo_ui_columns-1.3.0.fb2k-component" }
      ) {
        ...DownloadFile
      }
      oldVersion051: file(
        relativePath: { eq: "downloads/foo_ui_columns-0.5.1.fb2k-component" }
      ) {
        ...DownloadFile
      }
      screenshot: file(relativePath: { eq: "images/columns-ui.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 300
            quality: 100
            placeholder: TRACED_SVG
            layout: FIXED
          )
        }
        publicURL
      }
    }
  `)

  const title = "Columns UI"
  const description =
    "Columns UI – alternative UI for the foobar2000 audio player"
  const repo = "columns_ui"

  return (
    <Layout
      pathname={location.pathname}
      title={title}
      description={description}
    >
      <p>
        <GitHubStars repo={repo} />
      </p>
      <FixedImage image={data.screenshot} />
      <p>Columns UI is a user interface for the foobar2000 audio player.</p>
      <p>Features include:</p>
      <ul>
        <li>
          a playlist view with grouping, artwork and in-line metadata editing
        </li>
        <li>interchangeable panels and toolbars</li>
        <li>
          filter panels to quickly filter your media library by genre, artist or
          other fields
        </li>
        <li>
          item details and properties panels to view detailed track information
        </li>
      </ul>
      <h3 className="title is-3">Requirements</h3>
      <ul>
        <li>Windows 7 Service Pack 1 or later</li>
        <li>foobar2000 1.4 or newer</li>
      </ul>
      <h3 className="title is-3">Downloads</h3>

      <h4 className="title is-4">Latest stable version</h4>
      <UnorderedIconList>
        <DownloadLinkListItem file={data.latestVersion} label="Version 1.7.0" />
      </UnorderedIconList>
      <p>
        <a href="https://github.com/reupen/columns_ui/releases">
          Read the release notes if updating from version 1.3.0 or older.
        </a>
      </p>

      <h4 className="title is-4">Older versions</h4>
      <UnorderedIconList>
        <DownloadLinkListItem file={data.oldVersion160} label="Version 1.6.0" />
        <DownloadLinkListItem file={data.oldVersion141} label="Version 1.4.1" />
        <DownloadLinkListItem file={data.oldVersion130} label="Version 1.3.0" />
        <>
          <DownloadLinkListItem
            file={data.oldVersion051}
            label="Version 0.5.1"
          />{" "}
          – the last version compatible with Windows XP
        </>
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
        <ExternalLinkListItem
          href="https://wiki.yuo.be/columns_ui:faqs"
          label="Frequently asked questions"
        />
        <ExternalLinkListItem
          href="http://www.hydrogenaudio.org/forums/index.php?showtopic=28647"
          label="Discussion at the foobar2000 forums"
        />
      </UnorderedIconList>
    </Layout>
  )
}

export default ColumnsUIPage
