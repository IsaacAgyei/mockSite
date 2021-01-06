import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import "../../styles/PriceCard.css";

const useStyles = makeStyles({
  borderCtrl: {
    fontSize: 50,
    borderStyle: 'solid' ,
    borderBottom: 50,
    marginBottom: 0,
    padding: 20,
    borderWidth: 'thick',
  },
})

function ServicesAbout() {
  const classes = useStyles()

return (
  <Grid container direction="row" justify="center" alignItems="center"  className='content'>
      <Grid item lg={3} md={4} sm={5} xs={6}>
        <Typography component={'div'}>
          <div>
            <h1 className={classes.borderCtrl}>Our Services</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
          </div>
        </Typography>
      </Grid>
    </Grid>
  )
}

export default ServicesAbout