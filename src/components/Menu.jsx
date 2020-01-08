import React, { useState } from 'react'
import { Link, Typography, Grid, makeStyles } from '@material-ui/core'
import { indigo } from '@material-ui/core/colors'
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { animated, useSpring } from 'react-spring'

const useStyles = makeStyles({
  tab: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center' 
  },
  link: {
    display: 'block',
    width: '100%',
    height: '50px',
    color: indigo['A200'],
    textDecoration: 'none !important',
  }
})

const Tab = ({ link, label }) => {
  const [on, toggle] = useState(false)
  const [pressed, setPressed] = useState(false)
  const classes = useStyles()
  const location = useLocation()
  const isActive = location.pathname === link

  const animation = useSpring({
    from: { transform: `translateY(0px)` },
    to: [
      { transform: pressed ? `translateY(-10px)` : `translateY(0px)` , config: { duration: 150 } },
      { transform: `translateY(0px)`, config: { duration: 150 } },
    ],
    onRest: () => setPressed(false)
  })

  const handleToggle = () => {
    toggle(!on)
    setPressed(false)
  }

  return (
    <animated.div style={animation} onClick={() => setPressed(true)}>
      <div className={classes.tab}>
        <Link
          component={RouterLink}
          variant="h6"
          to={link}
          className={classes.link}
          onMouseLeave={handleToggle}
          onMouseEnter={handleToggle}
        >
          {label}
        </Link>
        <div style={{ height: 1, backgroundColor: indigo['A200'], width: (on || isActive) ? '100%' : 2, transition: '.4s' }}></div>
      </div>
    </animated.div>
  )
}

export default () => {
  return (
    <Grid container spacing={5} justify="center">
      <Grid item>
        <Tab link="/aboutMe" label="About Me"/>
      </Grid>
      <Grid item>
        <Tab link="/schoolProjects" label="School Projects"/>
      </Grid>
      <Grid item>
        <Tab link="/startupInternship" label="Startup-Internship"/>
      </Grid>
      <Grid item>
        <Tab link="/resume" label="Resume"/>
      </Grid>
    </Grid>
  )
}