import React from "react"
import { css, keyframes } from "@emotion/core"
import { Helmet } from "react-helmet"
import Menu from "./menu"

import Background from "./background"

export default class Layout extends React.PureComponent {
  render() {
    const { title, children } = this.props
    return (
      <div css={layout}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title} | AaronDeRuvo.com </title>
          <style type="text/css">{`body {margin: 0;}`}</style>
        </Helmet>
        <Menu />
        {children}
        <div
          css={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <small>
            <a href="https://medium.com/@aaronmgdr">@aaronmgdr</a>
          </small>
        </div>
        <Background />
      </div>
    )
  }
}

const layout = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100vh",
  width: "100vw",
  margin: 0,
  paddingBottom: 40,

  "@media (min-device-width : 768px)": {
    display: "grid",
    alignItems: "start",
    justifyItems: "center",
    justifyContent: "center"
  }
})
