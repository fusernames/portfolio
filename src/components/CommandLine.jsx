import React, { useState } from 'react'
import Typing from 'react-typing-animation'
import { Typography, useTheme, Grid } from '@material-ui/core'
import { useSpring, animated } from 'react-spring'
import { GithubCircle, LinkedinBox } from 'mdi-material-ui'
import IconLink from './IconLink'

export default ({ text, children, speed }) => {
  const [on, toggle] = useState(false)

  const theme = useTheme()
  let animation = useSpring({
    transform: on ? 'translateY(0px)' : 'translateY(2000px)'
  })

  const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
  const trans1 = (x, y) => `translate3d(${x / 25 + 15}px, ${y / 25 - 0}px,0)`
  // const trans2 = (x, y) => `translate3d(${x / 20}px, ${y / 20}px,0)`
  // const trans3 = (x, y) => `translate3d(${x / 20 - 10}px,${y / 20 - 0}px,0)`

  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  
  if (!speed) speed = 10
  return (
    <React.Fragment>
      <div style={{ height: '100%' }} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
        <animated.div style={{ transform: props.xy.interpolate(trans1) }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
            <Typography style={{ marginRight: 10 }}>$></Typography>
            <Typing cursor="_" speed={speed} onFinishedTyping={() => toggle(true)}>
              <Typography>{text}</Typography>
            </Typing>
          </div>
        </animated.div>
        <animated.div>
          {on &&
            <animated.div style={animation}>
              <div style={{ padding: '16px 24px', background: theme.palette.background.paper, borderRadius: 3 }}>
                {children}
              </div>
              <Grid container spacing={2} alignItems="center" justify="center" style={{ marginTop: 24 }}>
                <Grid item>
                  <IconLink Icon={LinkedinBox} iconStyle={{ fontSize: 32 }} link="https://linkedin.com/in/alexis-caroff-a5b4a9181/"/>
                </Grid>
                <Grid item>
                  <IconLink Icon={GithubCircle} iconStyle={{ fontSize: 32 }} link="https://github.com/fusernames"/>
                </Grid>
                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                  <Typography component="span" color="secondary" style={{ marginLeft: 4, lineHeight: 0}}>acaroff10@gmail.com</Typography>
                </Grid>
              </Grid>
            </animated.div>
          }
        </animated.div>
      </div>
    </React.Fragment>
  )
}