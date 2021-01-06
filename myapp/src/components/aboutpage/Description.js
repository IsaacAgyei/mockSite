import React from 'react'
import { Grid, Card, CardMedia } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles'
import colabSML from "../../images/colabSML.jpg"
import handShakeSML from "../../images/handShakeSML.jpg"

const useStyles = makeStyles({
  root: {
    paddingLeft: 50,
    paddingTop: 30,
  },
  media: {
    width: 400,
    height: 400,
  },
  textStruct: {
    fontSize: 40,
    fontWeight: 'bolder',
    borderStyle: 'solid' ,
    color: 'white',
    width: 300,
    marginTop: 330,
    padding: 30,
    marginLeft: '-200px',

    borderColor: 'white',
    borderWidth: '10px',
    backgroundColor:'wheat',
  },

  subHeaderText: {
    marginTop: 100,
    fontSize: 45,
  },

  subHeaderText2: {
    marginTop: 170,
    marginLeft: 100,
    fontSize: 25,
    fontWeight: 'bolder',
  },

  paragraphText: {
    marginLeft: 100,
    marginTop: 30,
    fontSize: 20 ,
    width: '30em',
  }
})

function Description() {
  const classes = useStyles()

  return (
    <div>
      <Grid container justify='flex-start' alighitems='center'>
        <Grid item className= { classes.root }>
          <Card>
            <CardMedia 
              className={ classes.media }
              component='img'
              image= { colabSML }
              title= 'Working People'
            />

            <CardMedia 
              className={ classes.media }
              component='img'
              image= { handShakeSML }
              title= 'Working People'
            />
          </Card>
        </Grid>

        <Grid item>
          <p className= { classes.textStruct }> Organized, Efficient, Reliable </p>
        </Grid>

        <Grid item>
  <h5 className={ classes.subHeaderText }> <span style={{color:'#d29122', fontWeight:'bolder'}}>Saridus</span> <span style={{color:'#0db6d1', fontWeight:'bolder'}}>Accounting</span>{' & Tax '}<span style={{color:'#c23409', fontWeight:'bolder'}}>Solutions</span> </h5>

          <p className={ classes.subHeaderText2 }> We <span style={{color:'#d29122', fontWeight:'bolder'}}>Focus</span> on <span style={{color:'#0db6d1', fontWeight:'bolder'}}>Numbers</span>, You Do What You <span style={{color:'#c23409', fontWeight:'bolder'}}>Love</span>.</p>
          <p className= { classes.paragraphText }> 
            At Sardius Accounting we're committed to your service. <br/>
            We pride ourselves in the strategic and tactical value we add throughout the life of your business. <br/><br/>
            We also pride ourselves in the quality of the services we provide to our clients. Our goal is to
            exceed all your expectations. We are Chartered Professional Accountants (CPA) with several years of
            experience offering the most reliable financial information specific to your business interest. 
          </p>
        </Grid>

      </Grid>
    </div>
  )
}


export default Description