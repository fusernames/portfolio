import React, { useEffect, useState } from 'react'
import { useTransition, animated, useSpring } from 'react-spring'

export default ({ children }) => {

  let animation = useSpring({
    from: { transform: 'translateY(2000px)' },
    to: [
      { transform: 'translateY(-30px)', config: { duration: 500 } },
      { transform: 'translateY(0px)', config: { duration: 200 } },
    ]
  })

  return (
    <animated.div style={animation}>
      {children}
    </animated.div>
  )
}