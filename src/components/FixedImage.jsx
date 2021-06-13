import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"

const FixedImage = ({ image }) => {
  return (
    <div style={{ marginBottom: "1em" }}>
      <a href={image.publicURL}>
        <GatsbyImage image={image.childImageSharp.gatsbyImageData} />
      </a>
    </div>
  )
}

FixedImage.propTypes = {
  image: PropTypes.object.isRequired,
}

export default FixedImage
