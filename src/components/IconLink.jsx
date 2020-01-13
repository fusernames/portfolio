import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
 
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
    <div style={style}>
      <animated.div style={spring}>
        <a href={link} style={{ display: 'block', lineHeight: 0 }} onMouseLeave={handleToggle} onMouseEnter={handleToggle}>
          <Icon color="secondary" style={iconStyle}/>
        </a>
      </animated.div>
    </div>
  )
}