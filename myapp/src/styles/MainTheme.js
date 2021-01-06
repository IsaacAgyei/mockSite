import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      dark: '#990000',
      main: "#e5e4df", //"#d30e09" //0C70D9
      light: '#ff5437',
      contrastText: '#ffffff'

    },
    secondary: {
      light: '#ffffff',
      main: "#e4314e",
      dark: '#c20000',
      contrastText: '#ffffff'
    }
  },
  overrides: {
    typography: {
      h1: {
        color: '#ffffff'
      }
    }
  }
})

export {theme}