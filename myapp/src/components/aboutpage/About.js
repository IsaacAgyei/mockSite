import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    fontSize: 50,
    borderStyle: 'solid' ,
    borderBottom: 50,
    marginBottom: 0,
    padding: 20,
    borderWidth: 'thick',
  },
})
 
function About() {
  const classes = useStyles()
  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center"  className='content'>
        <Grid item >
          <Typography component={'div'}>
            <div>
              <h1 className={classes.root}>About Us</h1>
            </div>
          </Typography>
        </Grid>
      </Grid>
    </div>

  )
}

export default About