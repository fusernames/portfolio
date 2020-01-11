import React from 'react'
import CommandLine from './CommandLine'
import { Typography, useTheme, Grid, Link } from '@material-ui/core'
import { LinkedinBox, GithubCircle } from 'mdi-material-ui'
import { Link as RouterLink } from 'react-router-dom'
import ImgViewer from './ImgViewer'

export default () => {
  const theme = useTheme()
  return (
    <CommandLine text="about me">
      <div>
        <Grid container spacing={1} alignItems="center" style={{ marginBottom: 8 }}>
          <Grid item>
            <a href="https://linkedin.com/in/alexis-caroff-a5b4a9181/" style={{ lineHeight: 0 }}>
              <LinkedinBox color="secondary" style={{ fontSize: 32 }}/>
            </a>
          </Grid>
          <Grid item>
            <a href="https://github.com/fusernames" style={{ lineHeight: 0 }}>
              <GithubCircle color="secondary" style={{ fontSize: 32 }}/>
            </a>
          </Grid>
          <Grid item style={{ display: 'flex', alignItems: 'center' }}>
            <Typography component="span" color="secondary" style={{ marginLeft: 4, lineHeight: 0}}>acaroff10@gmail.com</Typography>
          </Grid>
        </Grid>
        <Typography variant="h6" align="left">
          My name is <b style={{ color: theme.palette.secondary.main }}>Alexis</b>, I'm french and 24 years old.<br/>I'm student at 42 school Paris and looking for a job in the US.
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