import React, { useState } from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core'
import { useSpring, animated } from 'react-spring'

// css
 
// component
export default ({ Icon, link, style, size, iconStyle }) => {
  const [on, toggle] = useState(false)
  const spring = useSpring({
    transform: on ? 'scale(1.3)' : 'scale(1)',
    config: {
      duration: 100,
    },
  })
  
  const handleToggle = () => {
    toggle(!on)
  }

  return (
    <animated.div style={spring} >
      <a href={link} style={{ display: 'block', lineHeight: 0, ...style }} onMouseLeave={handleToggle} onMouseEnter={handleToggle}>
        <Icon color="secondary" style={iconStyle}/>
      </a>
    </animated.div>
  )
}