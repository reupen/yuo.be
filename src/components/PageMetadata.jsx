import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function PageMetadata({ description, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  )

  const computedDescription = description || site.siteMetadata.description

  return (
    <Helmet
      titleTemplate={`%s – ${site.siteMetadata.title}`}
      defaultTitle={site.siteMetadata.title}
    >
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={computedDescription} />
      <meta name="og:title" content={title} />
      <meta name="og:site_name" content={site.siteMetadata.title} />
      <meta name="og:description" content={computedDescription} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={computedDescription} />
    </Helmet>
  )
}

PageMetadata.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
}

PageMetadata.defaultProps = {
  description: "",
}

export default PageMetadata
