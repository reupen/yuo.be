import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"

const FixedImage = ({ image, title }) => {
  return (
    <div>
      <a href={image.publicURL} title={title}>
        <GatsbyImage image={image.childImageSharp.gatsbyImageData} />
      </a>
    </div>
  )
}

FixedImage.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}

export default FixedImage
