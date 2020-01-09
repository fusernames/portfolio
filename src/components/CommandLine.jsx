import React, { useState } from 'react'
import Typing from 'react-typing-animation'
import { Typography } from '@material-ui/core'
import { useSpring, animated } from 'react-spring'

export default ({ text, children, speed }) => {
  const [on, toggle] = useState(false)

  let animation = useSpring({
    transform: on ? 'translateY(0px)' : 'translateY(-2000px)'
  })

  const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
  const trans1 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`
  const trans2 = (x, y) => `translate3d(${x / 25 + 15}px,${y / 25 - 0}px,0)`
  // const trans3 = (x, y) => `translate3d(${x / 20 - 10}px,${y / 20 - 0}px,0)`

  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  
  if (!speed) speed = 1
  return (
    <React.Fragment>
      <div onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
        <animated.div style={{ transform: props.xy.interpolate(trans1) }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
            <Typography style={{ marginRight: 10 }}>$></Typography>
            <Typing cursor="_" speed={speed} onFinishedTyping={() => toggle(true)}>
              <Typography>{text}</Typography>
            </Typing>
          </div>
        </animated.div>
        <animated.div style={{ transform: props.xy.interpolate(trans2) }}>
          {on &&
            <animated.div style={animation}>
              {children}
            </animated.div>
          }
        </animated.div>
      </div>
    </React.Fragment>
  )
}