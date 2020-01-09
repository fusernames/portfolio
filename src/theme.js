import { createMuiTheme } from "@material-ui/core";
import { indigo, red } from '@material-ui/core/colors'

export default createMuiTheme({
  palette: {
    primary: {
      main: indigo['A200']
    },
    secondary: {
      main: red[400]
    },
    background: {
      default: '#121212'
    },
    text: {
      primary: 'rgba(255, 255, 255, .7)',
      secondary: 'rgba(255, 255, 255, .4)'
    },
    type: 'dark'
  },
  typography: {
    fontFamily: `'Ubuntu Mono', 'Roboto'`
  }
})