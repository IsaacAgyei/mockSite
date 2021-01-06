import React from 'react';
import { Typography, Card, CardContent, CardHeader, Button, CardActions, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom'
import "../../styles/App.css";

const useStyles = makeStyles({
  root: {
    width: 275
  },

  pos: {
    marginBottom: 25,
    marginTop: 25,
    color: "#4c4c4c"
  },
  buttonColour: {
    backgroundColor: '#e4314e',
    color: 'white'

  }
});

function PriceCards({titleHeader, 
                    costGradientColor, 
                    costFont='costFont', 
                    pkgDetails, 
                    pkgDetailsCss, 
                    cost, 
                    buttonText='Ask About Package', 
                    cycle='per month'}) {

  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined" >
    <CardHeader
      title= {<Typography> {titleHeader} </Typography>}
      className="headerGradient"
      align="center"
    />

    <CardContent className={costGradientColor}>
      <Typography
        align="center"
        className={costFont}
        variant="h2"
      >
        {cost}
      </Typography>
      <Typography align="center" className={classes.pos}>
        {cycle}
      </Typography>
    </CardContent>

    <CardContent className= {pkgDetailsCss}>
      <Typography align='center' variant="body2" component="div">
          {pkgDetails.map((value, index) => {
              return <div key={index}><p> {value} </p><hr/></div>
            })}
      </Typography>
    </CardContent>
    <CardActions className={"buttonBackground"}>
      <Button component={ Link } to='/contact' className={classes.buttonColour} size="small" variant='outlined'>
        {buttonText}
      </Button>
    </CardActions>
  </Card>
  );
}

export default PriceCards