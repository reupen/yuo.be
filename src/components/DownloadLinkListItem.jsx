import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import IconLinkListItem from "./IconLinkListItem"

const DownloadLinkListItem = ({ file, label }) => {
  return (
    <IconLinkListItem
      href={file.publicURL}
      iconClass="fas fa-download"
      download={file.base}
    >
      {label} ({file.prettySize})
    </IconLinkListItem>
  )
}

DownloadLinkListItem.propTypes = {
  file: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
}

export const downloadFileFragment = graphql`
  fragment DownloadFile on File {
    publicURL
    base
    prettySize
  }
`

export default DownloadLinkListItem
