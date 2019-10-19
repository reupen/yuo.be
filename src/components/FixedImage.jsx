import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const FixedImage = ({ image }) => {
  return (
    <div style={{ marginBottom: "1em" }}>
      <a href={image.publicURL}>
        <Img fixed={image.childImageSharp.fixed} />
      </a>
    </div>
  )
}

FixedImage.propTypes = {
  image: PropTypes.object.isRequired,
}

export default FixedImage
