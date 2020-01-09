import React from 'react'
import CommandLine from './CommandLine'
import { Typography, useTheme, Grid } from '@material-ui/core'
import { LinkedinBox, GithubCircle, Email } from 'mdi-material-ui'

export default () => {
  const theme = useTheme()
  return (
    <CommandLine text="about">
      <div>
        <Grid container spacing={1} alignItems="center" style={{ marginBottom: 8 }}>
          <Grid item>
            <a href="https://linkedin.com/in/alexis-caroff-a5b4a9181/" style={{ lineHeight: 0 }}>
              <LinkedinBox color="secondary"/>
            </a>
          </Grid>
          <Grid item>
            <a href="https://github.com/fusernames" style={{ lineHeight: 0 }}>
              <GithubCircle color="secondary"/>
            </a>
          </Grid>
          <Grid item style={{ display: 'flex', alignItems: 'center' }}>
            <Typography component="span" color="secondary" style={{ marginLeft: 4, lineHeight: 0}}>acaroff10@gmail.com</Typography>
          </Grid>
        </Grid>
        <Typography variant="h6" align="left">
          Hello, my name is <b style={{ color: theme.palette.secondary.main }}>Alexis</b>, I'm <b>french</b>, I'm <b>24 years old</b>, I'm currently student at 42 school Paris and looking for a job in US
        </Typography>
        <Typography style={{ marginTop: 24 }} align="left">
          I have been studying for 2.3 years at 42, it made me learn about web languages and some of the most popular and newest web technologies.<br/>
          But first of all I learned to learn and I think it is one of the most essential qualities to work in a profession where technologies are evolving so fast.
        </Typography>
      </div>
    </CommandLine>
  )
}