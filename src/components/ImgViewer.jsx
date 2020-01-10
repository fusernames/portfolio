import React, { useState } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images'
import { Grid, makeStyles, Typography } from '@material-ui/core'

// css
const useStyles = makeStyles({
  imgBox: {
    cursor: 'pointer',
    width: 120,
    height: 120,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#0d0d0d',
    borderRadius: 3
  }
})
 
// component
export default ({ imgs, justify, style, maxImgs }) => {
  //if (!justify) justify = 'center'
  const [open, setOpen] = useState(false)
  const classes = useStyles()
  if (!maxImgs) maxImgs = 10

  return (
    <React.Fragment>
      <ModalGateway>
        {open !== false &&
          <Modal onClose={() => setOpen(false)}>
            <Carousel views={imgs} currentIndex={open}/>
          </Modal>
        }
      </ModalGateway>
      <Grid container spacing={2} style={{ marginTop: 8, ...style }} justify={justify}>
        {imgs.map((imgObj, i) => {
          if (i >= maxImgs) return null
          return (
            <Grid item key={i}>
              <div
                onClick={() => setOpen(i)}
                className={classes.imgBox}
              >
                <img src={imgObj.src} alt="IMG" width="100%" height="auto"/>
              </div>
            </Grid>
          )
        })}
        {imgs.length > maxImgs &&
          <Grid item>
            <div
              onClick={() => setOpen(maxImgs)}
              className={classes.imgBox}
            >
              <Typography variant="h5">
                +{imgs.length - maxImgs}
              </Typography>
            </div>
          </Grid>
        }
      </Grid>
    </React.Fragment>
  )
}