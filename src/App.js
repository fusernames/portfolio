import React from 'react';
import { CssBaseline, Container, MuiThemeProvider, Typography, Button } from '@material-ui/core'
import theme from './theme'
import Typing from 'react-typing-animation'
import Menu from './components/Menu'
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline/>
      <BrowserRouter>
        <Container style={{ marginTop: 50 }}>
          <Typing cursor="_" speed={100} >
            <Typography variant="h3" align="center" style={{ margin: '50px 0'}}>alcaroff's portfolio</Typography>
          </Typing>
          <Menu/>
        </Container>
      </BrowserRouter>
    </MuiThemeProvider>
  )
}

export default App;
