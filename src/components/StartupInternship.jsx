import React from 'react'
import CommandLine from './CommandLine'
import { Typography, Link } from '@material-ui/core'
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
      <Link component="a" href="https://war-era.com"><Typography variant="h4" color="primary" align="center">War-Era</Typography></Link>
      <Typography variant="h6" style={{ marginBottom: 24, marginTop: 16 }}>I had opportunity to work alone on a <b>BIG</b> project with coaching of the school during 5 months.</Typography>
      <Typography style={{ marginBottom: 24 }}>
        The project is an online game app on web browser, an international geopolitical simulation where an user play a citizen of his country, fight for it or for its allies to gain Military XP and work to produce items and gain Economic XP. He can also play politicals roles such as president, minister or congress member, create newspaper, articles, laws, corporations, companies, organizations, military org...<br/>
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