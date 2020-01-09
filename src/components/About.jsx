import React, { useState } from 'react'
import CommandLine from './CommandLine'
import { Typography } from '@material-ui/core'

export default () => {
  return (
    <CommandLine text="about">
      <Typography>Hello, my name is Alexis, I'm 24 years old</Typography>
    </CommandLine>
  )
}