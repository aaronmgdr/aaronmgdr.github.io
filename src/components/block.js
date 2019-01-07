import React from "react"
import {css } from '@emotion/core'

export default ({children}) => (
  <span css={container}>
    {children}
  </span>
)

const container = css({
  padding: 10,
  maxWidth: '35em',
})
