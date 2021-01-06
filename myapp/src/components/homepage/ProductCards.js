import React from 'react'
import { Grid, Typography, Card, CardContent, CardMedia, Button, CardActions } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'


const useStyles = makeStyles({
  root: {
    paddingRight: 50,
    paddingLeft: 50,
  }
})

function ProductCards (
  { headerTitle, 
    buttonTitle='Learn More', 
    mediaImage, 
    headerCss='primaryTextColour', 
    rootClass, 
    mediaClass}) {
  
  const classes = useStyles()

  return (
      <Grid item className={classes.root}>
        <Card className={rootClass} elevation={8}>
          <CardMedia
            className={mediaClass}
            image= {mediaImage}
            title={headerTitle} 
            />
          <CardContent className={headerCss}>
            <Typography gutterBottom variant='h6' component='h6' align='center'>
              {headerTitle}
            </Typography>
          </CardContent>
          <CardActions>
            <Button component={Link} to= '/services' variant='contained' size="small" color="secondary">
              {buttonTitle}
            </Button>
          </CardActions>
        </Card>
      </Grid>
  )
}


export default ProductCards