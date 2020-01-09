import React, { useState } from 'react'
import CommandLine from './CommandLine'
import { Typography, useTheme, Grid } from '@material-ui/core'
import { useSpring, animated } from 'react-spring'
import { GithubCircle } from 'mdi-material-ui'

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
        <Grid container spacing={2} style={{ marginTop: 8 }} justify={justify}>
          {imgs.map(imgLink => (
            <Grid item>
              <div style={{ width: 120, height: 120, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#202020', borderRadius: 3, overflow: 'hidden' }}>
                <img src={`${process.env.PUBLIC_URL}/images/${imgLink}`} alt="osef" width="100%" height="auto"/>
              </div>
            </Grid>
          ))}
        </Grid>
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
            imgs={['hypertube/1.png', 'hypertube/2.png', 'hypertube/3.png', 'hypertube/4.png']}
            github="https://github.com/fusernames/hypertube"
          />
        </Grid>
        <Grid item xs={12}>
          <Project
            align="right"
            title="Matcha"
            description="Tinder like, dating website, matching people around you with popularity score algorithm."
            techs="React, Redux, MaterializeCSS, Node"
            imgs={['matcha/1.png', 'matcha/2.png', 'matcha/3.png', 'matcha/4.png']}
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
            description="Sort algorithm."
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