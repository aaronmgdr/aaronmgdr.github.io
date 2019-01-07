import React from "react"
import {css } from '@emotion/core'
import Menu from './menu'
import {Helmet} from "react-helmet";

export default ({children, title}) => (
  <div css={layout}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title} | AaronDeRuvo.com </title>
      <style type="text/css">
        {`
        body {
            margin: 0;
        }
        `}
      </style>
    </Helmet>
    <Menu/>
    {children}
  </div>
)




const layout = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'stretch',
  height: '100vh',
  width: '100vw',
  margin: 0,
})
