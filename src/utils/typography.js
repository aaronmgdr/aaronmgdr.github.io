import Typography from "typography"
import theme from 'typography-theme-twin-peaks'

const purple = '#490096'

theme.overrideThemeStyles= ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    a: {
      textDecoration: 'none',
      color: 'inherit',
      textShadow: 'none',
      backgroundImage: 'none',
    },
    'a:hover': {
      textDecoration: 'none',
      textShadow: 'none',
      backgroundImage: 'none',
      color: purple,
    }
  })

const typography = new Typography(theme)

export default typography
