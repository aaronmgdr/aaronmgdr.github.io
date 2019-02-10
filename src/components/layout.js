import React from "react"
import { css, keyframes } from "@emotion/core"
import { Helmet } from "react-helmet"
import Menu from "./menu"

import Background from "./background"

export default class Layout extends React.Component {
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
            <a css={hover} href="">
              @aaronmgdr
            </a>
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

  "@media (min-device-width : 768px)": {
    display: "grid",
    alignItems: "start",
    justifyItems: "center",
    justifyContent: "center"
  }
})

const hoverKeyFrames = keyframes` 
   from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
            transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
            transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
`

const hover = css({
  "&:hover": {
    animation: `${hoverKeyFrames} 1s ease-in-out infinite both`
  }
})
