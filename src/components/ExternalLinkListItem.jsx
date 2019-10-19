import React from "react"
import PropTypes from "prop-types"
import IconLinkListItem from "./IconLinkListItem"

const ExternalLinkListItem = ({ href, label }) => {
  return (
    <IconLinkListItem href={href} iconClass="fas fa-external-link">
      {label}
    </IconLinkListItem>
  )
}

ExternalLinkListItem.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default ExternalLinkListItem
