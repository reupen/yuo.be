import React from "react"
import PropTypes from "prop-types"

const IconLinkListItem = ({ href, iconClass, children, ...props }) => {
  return (
    <a href={href} {...props}>
      <span className="fa-li">
        <i className={iconClass} />
      </span>
      {children}
    </a>
  )
}

IconLinkListItem.propTypes = {
  href: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
}

export default IconLinkListItem
