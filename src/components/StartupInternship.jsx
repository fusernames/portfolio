import React from 'react'
import CommandLine from './CommandLine'
import { Typography } from '@material-ui/core'
import ImgViewer from './ImgViewer'

export default () => {
  const imgs = []
  for (let i = 1; i <= 40; i++)
    imgs.push({ src: `/images/warera/Screenshot_${i}.png`})

  const backImgs = []
  for (let i = 1; i <= 8; i++)
    backImgs.push({ src: `/images/warera/back/${i}.png`})

  const frontImgs = []
  for (let i = 1; i <= 10; i++)
  frontImgs.push({ src: `/images/warera/front/${i}.png`})

  return (
    <CommandLine text="startup-internship">
      <Typography variant="h4" color="primary" align="center" style={{ marginBottom: 16 }}>War-Era</Typography>
      <Typography variant="h6" style={{ marginBottom: 24 }}>I had opportunity to work alone on a <b>BIG</b> project with coaching of the school during 5 months, let me introduce it</Typography>
      <Typography style={{ marginBottom: 24 }}>
        The project is an online game app on web browser, a geopolitical simulator where users plays a citizen.<br/>
        The game is addressed to a niche audience that likes strategical games.<br/>
        Here are some screens of the app
      </Typography>
      <ImgViewer imgs={imgs} maxImgs={10} style={{ marginBottom: 24 }}/>
      <Typography>I don't wanted to just make a functional website, I wanted the code to be easily scalable and the organization to be clean and mastered.</Typography>
      <Typography>Here are some screens of the front and back code.</Typography>
      <section style={{ marginTop: 24 }}>
        <Typography variant="h6">Front</Typography>
        <Typography color="secondary"><em>React.js, Material-UI, redux...</em></Typography>
        <ImgViewer maxImgs={1} imgs={frontImgs}/>
      </section>
      <section style={{ marginTop: 24 }}>
        <Typography variant="h6">Back</Typography>
        <Typography color="secondary"><em>node.js, sequelize, express, socket.io...</em></Typography>
        <ImgViewer maxImgs={1} imgs={backImgs}/>
      </section>
    </CommandLine>
  )
}