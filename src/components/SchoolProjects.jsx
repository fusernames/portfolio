import React from 'react'
import CommandLine from './CommandLine'
import { Typography, useTheme, Grid } from '@material-ui/core'
import { GithubCircle } from 'mdi-material-ui'
import ImgViewer from './ImgViewer'

const Project = ({ title, description, techs, align, imgs, github }) => {
  const theme = useTheme()

  const style = align === 'right' ? { marginRight : 20 } : { marginLeft : 20 }
  const justify = align === 'right' ? 'flex-end' : 'flex-start'
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', ...style, justifyContent: justify }}>
        {github &&
          <a href={github} style={{ lineHeight: 0 }}>
            <GithubCircle color="secondary" style={{ marginRight: 8 }}/>
          </a>
        }
        <Typography color="secondary" variant="h6">{title}</Typography>
      </div>
      <Typography align={align}>{description}</Typography>
      <Typography align={align} component="em" style={{ ...style, display: 'block', color: theme.palette.text.secondary }}>{techs}</Typography>
      {imgs &&
        <ImgViewer imgs={imgs} justify={justify}/>
      }
    </div>
  )
}

export default () => {
  return (
    <CommandLine text="school projects">
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Project
            align="left"
            title="Hypertube"
            description="Netflix like, streaming website with extrernal APIs and live torrent downloading on server."
            techs="React, Redux, Material-UI, Node, symphony, Oauth2"
            imgs={[{ src: '/images/hypertube/1.png' }, { src: '/images/hypertube/2.png' }, { src: '/images/hypertube/3.png' }, { src: '/images/hypertube/4.png' }]}
            github="https://github.com/fusernames/hypertube"
          />
        </Grid>
        <Grid item xs={12}>
          <Project
            align="right"
            title="Matcha"
            description="Tinder like, dating website, matching people around you with popularity score algorithm."
            techs="React, Redux, MaterializeCSS, Node"
            imgs={[{ src: '/images/matcha/1.png' }, { src: '/images/matcha/2.png' }, { src: '/images/matcha/3.png' }]}
            github="https://github.com/lbarthon/matcha"
          />
        </Grid>
        <Grid item xs={12}>
          <Project
            align="left"
            title="Camagru"
            description="Instagram like, take picture with the device, apply filter on it and share it."
            techs="PHP, bootstrap, jQuery"
            github="https://github.com/fusernames/camagru"
          />
        </Grid>
        <Grid item xs={12}>
          <Project
            align="right"
            title="Lem-in"
            description="Pathfinding."
            techs="C"
            github="https://github.com/fusernames/lem-in"
          />
        </Grid>
        <Grid item xs={12}>
          <Project
            align="left"
            title="push-swap"
            description="Sorting algorithm."
            techs="C"
            github="https://github.com/fusernames/push_swap"
          />
        </Grid>
        <Grid item xs={12}>
          <Project
            align="right"
            title="ft_printf"
            description="Replica of printf function."
            techs="C"
            github="https://github.com/fusernames/ft_printf"
          />
        </Grid>
      </Grid>
    </CommandLine>
  )
}