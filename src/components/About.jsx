import React from 'react'
import CommandLine from './CommandLine'
import { Typography, useTheme, Link } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import ImgViewer from './ImgViewer'

export default () => {
  const theme = useTheme()
  return (
    <CommandLine text="about me">
      <div>
        <Typography variant="h6" align="left">
          My name is <span style={{ color: theme.palette.secondary.main }}>Alexis</span>, I'm french and I'm 24 years old,
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