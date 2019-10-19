import React from "react"
import PropTypes from "prop-types"

import Menu from "./Menu"
import "./Layout.sass"
import PageMetadata from "./PageMetadata"

const Layout = ({ title, description, pathname, children }) => {
  return (
    <>
      <PageMetadata title={title} description={description} />
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-one-fifth">
              <Menu pathname={pathname} />
            </div>
            <div className="column content">
              <main>
                {title && <h2 className="title is-2">{title}</h2>}
                {children}
              </main>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  description: PropTypes.string,
  title: PropTypes.string,
}

PageMetadata.defaultProps = {
  description: "",
  title: "",
}

export default Layout
