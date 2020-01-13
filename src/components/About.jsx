import React from 'react'
import CommandLine from './CommandLine'
import { Typography, useTheme, Grid, Link } from '@material-ui/core'
import { LinkedinBox, GithubCircle } from 'mdi-material-ui'
import { Link as RouterLink } from 'react-router-dom'
import ImgViewer from './ImgViewer'
import IconLink from './IconLink'

export default () => {
  const theme = useTheme()
  return (
    <CommandLine text="about me">
      <div>
        <Grid container spacing={1} alignItems="center" style={{ marginBottom: 8 }}>
          <Grid item>
            <IconLink Icon={LinkedinBox} iconStyle={{ fontSize: 32 }} link="https://linkedin.com/in/alexis-caroff-a5b4a9181/"/>
          </Grid>
          <Grid item>
            <IconLink Icon={GithubCircle} iconStyle={{ fontSize: 32 }} link="https://github.com/fusernames"/>
          </Grid>
          <Grid item style={{ display: 'flex', alignItems: 'center' }}>
            <Typography component="span" color="secondary" style={{ marginLeft: 4, lineHeight: 0}}>acaroff10@gmail.com</Typography>
          </Grid>
        </Grid>
        <Typography variant="h6" align="left">
          My name is <b style={{ color: theme.palette.secondary.main }}>Alexis</b>, I'm french and I'm 24 years old,
        </Typography>
        <Typography style={{ marginTop: 24 }} align="left">
          I'm currently studying at 42 school where I worked on several projects such as those you can see in <Link component={RouterLink} to="/schoolProjects">School Projects</Link> and <Link component={RouterLink} to="/startupInternship">Startup-Internship</Link>.<br/>
          Through these different experiences I learned about web languages and some of the most popular and newest web technologies.<br/>
          Now I would like to contribute my skills and experiences in a new team. My goal is to join a company in the US to work and keep learning about everything concerning techs.<br/>
        </Typography>
        <ImgViewer imgs={[{ src: 'images/resume/resume.jpg' }]}/>
      </div>
    </CommandLine>
  )
}