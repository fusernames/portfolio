import React, { useState, useEffect } from 'react'
import { amber } from '@material-ui/core/colors'
import { Link, Grid, makeStyles, useTheme } from '@material-ui/core'
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
    textDecoration: 'none !important',
  }
})

const Tab = ({ link, label }) => {

  const theme = useTheme()
  const [on, toggle] = useState(false)
  const [active, setActive] = useState(false)
  const [pressed, setPressed] = useState(false)
  const classes = useStyles()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === link)
      (setActive(true))
    else
      setActive(false)
  }, [location.pathname, link])

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
          color="primary"
        >
          {label}
        </Link>
        <div style={{ height: 3, backgroundColor: theme.palette.primary.main, width: (on || active) ? '100%' : 3, transition: '.3s', borderRadius: 3 }}></div>
      </div>
    </animated.div>
  )
}

export default () => {
  return (
    <Grid container spacing={5} justify="center">
      <Grid item>
        <Tab link="/about" label="About"/>
      </Grid>
      <Grid item>
        <Tab link="/schoolProjects" label="School Projects"/>
      </Grid>
      <Grid item>
        <Tab link="/startupInternship" label="Startup-Internship"/>
      </Grid>
    </Grid>
  )
}