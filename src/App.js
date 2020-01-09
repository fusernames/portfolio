import React, { useState } from 'react';
import { CssBaseline, Container, MuiThemeProvider, Typography, Button } from '@material-ui/core'
import theme from './theme'
import Typing from 'react-typing-animation'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
// components
import Menu from './components/Menu'
import About from './components/About'
import SchoolProjects from './components/SchoolProjects'
import StartupInternship from './components/StartupInternship'

function App() {

  let animation = useSpring({
    from: { transform: 'translate(2000px)' },
    to: [
      { transform: 'translate(-30px)', config: { duration: 500 } },
      { transform: 'translate(0px)', config: { duration: 200 } },
    ]
  })
  
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline/>
      <div style={{ overflow: 'hidden' }}>
        <BrowserRouter>
          <Container style={{ marginTop: 50 }}>
            <Typing cursor="_" speed={2}>
              <Typography variant="h4" align="center" style={{ margin: '50px 0'}}>Alexis Caroff</Typography>
            </Typing>
            <animated.div style={animation}>
              <Menu/>
            </animated.div>
            <div style={{ margin: '40px 0' }}>
              <Switch>
                <Route path="/about" component={About}/>
                <Route path="/schoolProjects" component={SchoolProjects}/>
                <Route path="/startupInternship" component={StartupInternship}/>
              </Switch>
            </div>
          </Container>
        </BrowserRouter>
      </div>
    </MuiThemeProvider>
  )
}

export default App;
