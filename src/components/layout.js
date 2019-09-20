import React from "react"

import "./layout.css"

export default ({ children }) => (
  <div style={{ margin: `10rem auto`, maxWidth: 650, padding: `0 1rem`}}>
    {children}
  </div>
)
