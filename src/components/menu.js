import React from "react"
import {css } from '@emotion/core'
import { Link } from "gatsby"


export default () => (
  <nav css={menuCSS}>
    <Link to="/" ><span css={menuText}>home</span> </Link>
    <Link to="/meta" ><span css={menuText}> meta </span> </Link>
  </nav>
)

const menuCSS = css({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: 'rgba(0,0,0, 0.05)'
})
const menuText = css({
  height: '1em',
  fontSize: '0.8em',
  padding: '1em',
  '&:hover': {
      backgroundColor: 'rgba(256,256,256,0.5)',
      color: 'black'
  }
})
