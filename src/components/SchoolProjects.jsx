import React, { useState } from 'react'
import CommandLine from './CommandLine'
import { Typography, useTheme, Grid } from '@material-ui/core'
import { useSpring, animated } from 'react-spring'

const Project = ({ title, description, techs, align, imgs }) => {
  const theme = useTheme()
  const style = align === 'right' ? { marginRight : 20 } : { marginLeft : 20 }
  return (
    <div>
      <Typography align={align} color="primary" variant="h6" style={style}>{title}</Typography>
      <Typography align={align}>{description}</Typography>
      <Typography align={align} component="em" style={{ ...style, display: 'block', color: theme.palette.text.secondary }}>{techs}</Typography>
      {imgs &&
        <Grid container spacing={2} style={{ marginTop: 8 }}>
          {imgs.map(imgLink => (
            <Grid item>
              <div style={{ width: 120, height: 120, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#0b0b0b' }}>
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
    <CommandLine text="school projects" speed={1}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Project
            align="left"
            title="Hypertube"
            description="Netflix like, streaming website with extrernal APIs and live torrent downloading on server."
            techs="React, Redux, Material-UI, Node, symphony, Oauth2"
            imgs={['hypertube/1.png', 'hypertube/2.png', 'hypertube/3.png', 'hypertube/4.png']}
          />
        </Grid>
        <Grid item xs={12}>
          <Project
            align="right"
            title="Matcha"
            description="Tinder like, dating website, matching people around you with popularity score algorithm."
            techs="React, Redux, MaterializeCSS, Node"
          />
        </Grid>
        <Grid item xs={12}>
          <Project
            align="left"
            title="Camagru"
            description="Instagram like, take picture with the device, apply filter on it and share it."
            techs="PHP, bootstrap, jQuery"
          />
        </Grid>
      </Grid>
    </CommandLine>
  )
}