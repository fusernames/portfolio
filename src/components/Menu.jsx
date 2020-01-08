import React from 'react'
import { Link, Typography, Grid } from '@material-ui/core'
import { Link as RouterLink } from "react-router-dom";

export default () => {
  return (
    <Grid container spacing={3}>
      <Grid item>
        <Link component={RouterLink} to={'/aboutMe'}>About me</Link>
      </Grid>
      <Grid item>
        <Link component={RouterLink} to={'/42'}>My school</Link>
      </Grid>
      <Grid item>
        <Link component={RouterLink} to={'/schoolProjects'}>School projects</Link>
      </Grid>
      <Grid item>
        <Link component={RouterLink} to={'/personalProjects'}>Personal schoolProjects</Link>
      </Grid>
      <Grid item>
        <Link component={RouterLink} to={'/resume'}>Resume</Link>
      </Grid>
    </Grid>
  )
}