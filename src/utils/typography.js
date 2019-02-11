import Typography from "typography"
import theme from "typography-theme-twin-peaks"

export const themeColor = "#0f5e70"



theme.overrideThemeStyles = ({ adjustFontSizeTo, scale, rhythm }, options) => ({
  a: {
    textDecoration: "none",
    color: "inherit",
    textShadow: "none",
    backgroundImage: "none"
  },
  "a:hover": {
    textDecoration: "none",
    textShadow: "none",
    backgroundImage: "none",
    color: themeColor,
  },
  p: {
    backgroundColor: "#ffffff85",
    display: "inline-block",
    paddingInlineStart: "0.5rem",
    paddingInlineEnd: "0.5rem"
  }
})

const typography = new Typography(theme)

export default typography
