import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import DownloadLinkListItem from "../components/DownloadLinkListItem"
import UnorderedIconList from "../components/UnorderedIconList"
import GitHubStars from "../components/GitHubStars"
import ExternalLinkListItem from "../components/ExternalLinkListItem"

const IPodManagerPage = ({ location }) => {
  const files = useStaticQuery(graphql`
    query {
      latestVersion: file(
        relativePath: { eq: "downloads/foo_dop-0.7.1.fb2k-component" }
      ) {
        ...DownloadFile
      }
    }
  `)

  const title = "iPod manager"
  const description =
    "iPod manager – iPod management component for the foobar2000 audio player"
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

      <div className="notification is-warning">
        <p>
          <strong>Notice about iOS support</strong>
        </p>
        <p>
          Sync and other write commands are not supported on iOS 5 and newer.
        </p>
        <p>
          Additionally, iOS device users on 64-bit Windows must use{" "}
          <a
            href="https://support.apple.com/kb/DL1816"
            referrerPolicy="no-referrer"
          >
            this version of iTunes
          </a>
          .
        </p>
      </div>

      <p>
        iPod manager allows you to transfer music to Apple iPods from
        foobar2000.
      </p>
      <p>Features include:</p>
      <ul>
        <li>artwork support</li>
        <li>ReplayGain to SoundCheck conversion</li>
        <li>gapless playback support</li>
        <li>automatic conversion of unsupported audio formats</li>
        <li>smart playlist creation</li>
      </ul>
      <h3 className="title is-3">Requirements</h3>
      <ul>
        <li>Windows 7 or newer</li>
        <li>foobar2000 1.3 or newer</li>
        <li>
          <a href="https://wiki.yuo.be/dop:start#supported_models">
            a supported iPod model
          </a>
        </li>
        <li>
          <a href="https://wiki.yuo.be/dop:start#requirements">
            additional requirements apply for some models
          </a>
        </li>
      </ul>
      <h3 className="title is-3">Downloads</h3>
      <h4 className="title is-4">Latest version</h4>
      <UnorderedIconList>
        <DownloadLinkListItem
          file={files.latestVersion}
          label="Version 1.2.0"
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
        <ExternalLinkListItem
          href="https://wiki.yuo.be/dop:start"
          label="Documentation"
        />
        <ExternalLinkListItem
          href="https://wiki.yuo.be/columns_ui:faqs"
          label="Frequently asked questions"
        />
        <ExternalLinkListItem
          href="https://wiki.yuo.be/dop:notes"
          label="Usage notes"
        />
        <ExternalLinkListItem
          href="https://github.com/reupen/ipod_manager/blob/master/CHANGELOG.md"
          label="Change log"
        />
        <ExternalLinkListItem
          href="http://www.hydrogenaudio.org/forums/index.php?showtopic=45160"
          label="Discussion at the foobar2000 forums"
        />
      </UnorderedIconList>
    </Layout>
  )
}

export default IPodManagerPage
