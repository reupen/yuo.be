import React from "react"
import PropTypes from "prop-types"

const GitHubStars = ({ repo }) => {
  return (
    <a href={`https://github.com/reupen/${repo}`}>
      <img
        style={{ height: "25px", width: "auto" }}
        src={`https://img.shields.io/github/stars/reupen/${repo}.svg?style=social&label=Star`}
        alt="View on GitHub"
        title="View on GitHub"
      />
    </a>
  )
}

GitHubStars.propTypes = {
  repo: PropTypes.string.isRequired,
}

export default GitHubStars
