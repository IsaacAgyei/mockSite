import React from 'react'
import { Grid, Typography, Card, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'


const useStyle = makeStyles({
  flexibility: {
    flexGrow: 1,
  },
  root1: {
    maxWidth: 474,
    backgroundColor: 'wheat',
  },
  root2: {
    maxWidth: 474,
    backgroundColor: '#ffe0b2',
  }
})

function Testimonial() {
  const classes = useStyle()

  return (
    <Grid container xs={12}>
      <Grid container justify='center' alignItems='center'>
        <h1 className='primaryHeaderTextColour'> Testimonials </h1>
      </Grid>

      <Grid item xs={4} >
        <Card className={classes.root2} elevation={0}>
          <CardContent className='primaryTextColour'>
            <Typography variant='body2'>
              "Aliquam sem et tortor consequat id. Magna sit amet purus gravida quis blandit turpis cursus in. Sed enim ut sem viverra aliquet eget sit. Sed euismod nisi porta lorem mollis aliquam ut porttitor. Sit amet porttitor eget dolor morbi non arcu risus quis. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Magna eget est lorem ipsum dolor sit. Ut diam quam nulla porttitor massa id neque aliquam vestibulum. " - NAME
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      
      <Grid item xs={4} >
        <Card className={classes.root1} elevation={0}>
          <CardContent className='primaryTextColour'>
            <Typography variant='body2'>
              "Aliquam sem et tortor consequat id. Magna sit amet purus gravida quis blandit turpis cursus in. Sed enim ut sem viverra aliquet eget sit. Sed euismod nisi porta lorem mollis aliquam ut porttitor. Sit amet porttitor eget dolor morbi non arcu risus quis. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Magna eget est lorem ipsum dolor sit. Ut diam quam nulla porttitor massa id neque aliquam vestibulum. " - NAME
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={4}>
        <Card className={classes.root2} elevation={0}>
          <CardContent className='primaryTextColour'>
            <Typography variant='body2'>
              "Aliquam sem et tortor consequat id. Magna sit amet purus gravida quis blandit turpis cursus in. Sed enim ut sem viverra aliquet eget sit. Sed euismod nisi porta lorem mollis aliquam ut porttitor. Sit amet porttitor eget dolor morbi non arcu risus quis. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Magna eget est lorem ipsum dolor sit. Ut diam quam nulla porttitor massa id neque aliquam vestibulum. " - NAME
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Testimonial