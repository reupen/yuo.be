import React from "react"

const UnorderedIconList = ({ children }) => {
  return (
    <ul className="fa-ul" style={{ listStyleType: "none" }}>
      {React.Children.map(children, child => (
        <li>{child}</li>
      ))}
    </ul>
  )
}

export default UnorderedIconList
