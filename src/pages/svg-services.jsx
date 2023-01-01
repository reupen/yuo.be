import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import DownloadLinkListItem from "../components/DownloadLinkListItem"
import UnorderedIconList from "../components/UnorderedIconList"
import GitHubStars from "../components/GitHubStars"
import ExternalLinkListItem from "../components/ExternalLinkListItem"

const SVGServicesPage = ({ location }) => {
  const files = useStaticQuery(graphql`
    query {
      latestVersion: file(
        relativePath: {
          eq: "downloads/foo_svg_services-0.1.0.x86-x64.fb2k-component"
        }
      ) {
        ...DownloadFile
      }
    }
  `)

  const title = "SVG services"
  const description = "SVG services – SVG rendering library for foobar2000"
  const repo = "svg-services"

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
        SVG services allows other compatible foobar2000 components to render SVG
        files.
      </p>

      <h3 className="title is-3">Downloads</h3>
      <h4 className="title is-4">Latest version</h4>
      <UnorderedIconList>
        <DownloadLinkListItem
          file={files.latestVersion}
          label="Version 0.1.0"
        />
      </UnorderedIconList>

      <h3 className="title is-3">Links</h3>
      <UnorderedIconList>
        <ExternalLinkListItem
          href={`https://github.com/reupen/${repo}`}
          label="GitHub project and API documentation"
        />
      </UnorderedIconList>
    </Layout>
  )
}

export default SVGServicesPage
