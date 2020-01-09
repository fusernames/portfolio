import { createMuiTheme } from "@material-ui/core";
import { indigo } from '@material-ui/core/colors'

export default createMuiTheme({
  palette: {
    primary: {
      main: indigo['A200']
    },
    background: {
      default: '#111'
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