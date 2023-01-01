import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const InternalMenuItem = ({ path, currentPathName, title }) => (
  <li>
    <Link to={path} className={currentPathName === path ? "is-active" : ""}>
      {title}
    </Link>
  </li>
)

const ExternalMenuItem = ({ path, title }) => (
  <li>
    <a href={path}>{title}</a>
  </li>
)

const Menu = ({ pathname }) => (
  <aside className="menu">
    <p className="menu-label">foobar2000 components</p>
    <ul className="menu-list">
      <InternalMenuItem
        path="/columns-ui"
        currentPathName={pathname}
        title="Columns UI"
      />
      <InternalMenuItem
        path="/album-list-panel"
        currentPathName={pathname}
        title="Album list panel"
      />
      <InternalMenuItem
        path="/console-panel"
        currentPathName={pathname}
        title="Console panel"
      />
      <InternalMenuItem
        path="/typefind-panel"
        currentPathName={pathname}
        title="Typefind panel"
      />
      <InternalMenuItem
        path="/svg-services"
        currentPathName={pathname}
        title="SVG services"
      />
      <InternalMenuItem
        path="/ipod-manager"
        currentPathName={pathname}
        title="iPod manager"
      />
    </ul>
    <p className="menu-label">Development</p>
    <ul className="menu-list">
      <InternalMenuItem
        path="/columns-ui-sdk"
        currentPathName={pathname}
        title="Columns UI SDK"
      />
      <InternalMenuItem
        path="/ipod-manager-sdk"
        currentPathName={pathname}
        title="iPod manager SDK"
      />
    </ul>
    <p className="menu-label">Miscellaneous</p>
    <ul className="menu-list">
      <InternalMenuItem path="/" currentPathName={pathname} title="About" />
      <ExternalMenuItem path="https://wiki.yuo.be" title="Wiki" />
      <ExternalMenuItem path="https://blog.yuo.be" title="Blog" />
    </ul>
  </aside>
)

Menu.propTypes = {
  pathname: PropTypes.string.isRequired,
}

export default Menu
