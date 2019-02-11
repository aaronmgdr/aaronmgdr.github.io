import React from "react"
import Attribution from "./attribution"
import { css, keyframes } from "@emotion/core"

function getRandomIndex(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

const DURATION_IN_SECONDS = 15

export default class Background extends React.PureComponent {
  constructor(props, context) {
    super(props, context)

    this.state = {
      currentImage: getRandomIndex(0, props.images.length)
    }
  }

  componentWillMount() {
    // prefetch images
    if (typeof window !== "undefined") {
      this.props.images.forEach(element => {
        new Image().src = element.src
      })
    }
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
          "https://images.unsplash.com/photo-1484291470158-b8f8d608850d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80",
        photographer: "@christoffere"
      },
      {
        src:
          "https://images.unsplash.com/photo-1523002010469-ea85cb48674b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
        photographer: "@alessandracaretto"
      },
      {
        src:
          "https://images.unsplash.com/photo-1526635229611-9a2482c8427b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
        photographer: "@rawpixel"
      }
    ]
  }

  componentDidMount() {
    setInterval(this.setNextImage, 999 * DURATION_IN_SECONDS)
  }

  setNextImage = () => {
    this.setState(({ currentImage }) => ({
      currentImage:
        currentImage + 1 <= this.props.images.length - 1 ? currentImage + 1 : 0
    }))
  }

  currentImage() {
    return this.props.images[this.state.currentImage]
  }

  render() {
    return (
      <div css={positioning}>
        <div css={overlay} />
        <div
          css={[
            background,
            css({
              backgroundImage: `url(${this.currentImage().src})`
            })
          ]}
        />
        <Attribution photographer={this.currentImage().photographer} />
      </div>
    )
  }
}

const crossfade = keyframes`
  0% {
    opacity: 1
  }

  11% {
    opacity: 0
  }

  87% {
    opacity: 0 
  }

  100% {
    opacity: 1
  }
`

const pan = keyframes`
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
  overflow: "hidden",
  backgroundSize: "cover",
  animation: `${pan} ${DURATION_IN_SECONDS}s cubic-bezier(0.445, 0.050, 0.550, 0.950) infinite both;`
})

const overlay = css({
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  position: "absolute",
  backgroundColor: "white",
  animation: `${crossfade} ${DURATION_IN_SECONDS}s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite both`
})

const positioning = css({ position: "fixed", zIndex: -1 })
