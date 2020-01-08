import React from 'react';
import { CssBaseline, Container, MuiThemeProvider, Typography, Button } from '@material-ui/core'
import theme from './theme'
import Typing from 'react-typing-animation'
import Menu from './components/Menu'

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline/>
      <Container style={{ marginTop: 50 }}>
        <Typing cursor="_" speed={100} >
          <Typography variant="h3" align="center">alcaroff's portfolio</Typography>
        </Typing>
        <Menu/>
        <Button variant="outlined">Get started</Button>
        
      </Container>
    </MuiThemeProvider>
  )
}

export default App;
