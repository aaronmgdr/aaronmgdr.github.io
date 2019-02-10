import React from "react"
import Attribution from "./attribution"
import { css, keyframes } from "@emotion/core"

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

const DURATION_IN_SECONDS = 15

export default class Background extends React.Component {
  state = {
    currentImage: 1
  }

  static defaultProps = {
    images: [
      {
        src:
          "https://images.unsplash.com/photo-1482977036925-e8fcaa643657?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
        photographer: "@anchorlee"
      },
      {
        src:
          "https://images.unsplash.com/photo-1484291470158-b8f8d608850d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
        photographer: "@christoffere"
      },
      {
        src:
          "https://images.unsplash.com/photo-1523002010469-ea85cb48674b?ixlib=rb-1.2.1&auto=format&fit=crop&w=3900&q=80",
        photographer: "@alessandracaretto"
      },
      {
        src:
          "https://images.unsplash.com/photo-1526635229611-9a2482c8427b?ixlib=rb-1.2.1&auto=format&fit=crop&w=3000&q=80",
        photographer: "@rawpixel"
      }
    ]
  }

  componentDidMount() {
    setInterval(this.setNextImage, 1000 * DURATION_IN_SECONDS)
  }

  setNextImage = () => {
    console.log("nextImage")
    this.setState({
      currentImage: getRandomArbitrary(0, this.props.images.length)
    })
  }

  currentImage() {
    return this.props.images[this.state.currentImage]
  }

  render() {
    return (
      <div
        css={[
          background,
          css({
            backgroundImage: `url(${this.currentImage().src})`
          })
        ]}
      >
        <Attribution photographer={this.currentImage().photographer} />
      </div>
    )
  }
}

const crossfade = keyframes`
  0% {
    -webkit-transform: scale(1) translateY(0);
            transform: scale(1) translateY(0);
    -webkit-transform-origin: 50% 16%;
            transform-origin: 50% 16%;
  }
  100% {
    -webkit-transform: scale(1.25) translateY(-15px);
            transform: scale(1.25) translateY(-15px);
    -webkit-transform-origin: top;
            transform-origin: top;
  }
`

const background = css({
  width: "100vw",
  height: "100vh",
  position: "fixed",
  zIndex: -1,
  backgroundSize: "cover",
  animation: `${crossfade} ${DURATION_IN_SECONDS}s cubic-bezier(0.470, 0.000, 0.745, 0.715) infinite both;`
})
