import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  palette: {
    background: {
      default: '#111'
    },
    text: {
      primary: 'rgba(255, 255, 255, .7)'
    },
    type: 'dark'
  },
  typography: {
    fontFamily: `'Ubuntu Mono', 'Roboto'`
  }
})