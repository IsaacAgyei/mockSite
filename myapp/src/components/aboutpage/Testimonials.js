import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  testimonyContainer: {
    color: 'white',
    display: 'flex',
    flexWrap: 'wrap',
  },

  root: {
    textDecoration: 'underline',
    fontSize: 50,
    marginTop: 100,
    marginLeft: 150,
  },

  paragraphText: {
    fontSize: 15,
    backgroundColor: '#c23409',
    margin: 5,
    padding: 10
  },
  paragraphText2: {
    fontSize: 15,
    backgroundColor: '#c1ab82',
    marginLeft: 5,
    padding: 20,
  }
})

function Testimonials() {
  const classes = useStyles()

  const testimony1 = <div><p>
    I have been very pleased with my experience Sardius Accounting and Tax Solutions. I
have been using their services for the past few years and each time they have gone
over and above to accommodate my schedule and needs. Elijah has always been
available and prompt to answer any concerns as well as provide advice that is in my
best interest to know. Overall, I am very satisfied and would not hesitate to recommend
their services!
    </p>
    <p style={{fontWeight:'bolder'}}>- Dr. Nii Ayi. Chiropractor</p></div> 
  
  const testimony2 = <div><p>
  They conduct themselves with the utmost professionalism. They are client focused and
look to provide creative alternatives where possible to better your personal and
professional needs.
  </p>
  <p style={{fontWeight:'bolder'}}>- Angela Thompson</p></div>

  const testimony3 = <div><p>
    Thank you for your expertise in serving as my accountant these past three years or is it now
four? I have complete confidence and trust in your proven careful attention to detail and timely
submission of tax forms. In particular you have reviewed my tax returns from previous years and
secured significant refunds. I look forward to your accounting services for years to come.
    </p>
    <p style={{fontWeight:'bolder'}}>- Giovanni Di Vicenzo</p></div> 

  const testimony4 = <div><p>
    Elijah was great to work with and I had a great experience. He is very professional,
diligent and handled all my inquires/requests in a timely manner. I was very happy with
the work he did for me and highly recommend his services.
    </p>
    <p style={{fontWeight:'bolder'}}>- Christine Olagundoye</p></div> 

  const testimony5 = <div><p>
    My experience dealing with them has been fantastic. Their professionalism is second to none, and you can tell they truly takes pride in his work. There is also a personal connection that Elijah brings to the business that makes you
very comfortable with the team overseeing your finances.
    </p>
    <p style={{fontWeight:'bolder'}}>- Ryan Emes, 2154988 Alberta Ltd</p></div> 

  const testimony6 = <div><p>
    "Elijah provides a client experience that is well-organized and simple to navigate. His
proactive communication, preparation of useful tools and thoughtful delivery, alleviate
the stress associated with tax preparation. I have no hesitation recommending his
services."
    </p>
    <p style={{fontWeight:'bolder'}}>- Chris Sotiropoulos</p></div> 

 

  return (
    <div>
      <Grid container justify='flex-start' alignItems='center' >
        <Grid item >
          <h1 className={classes.root}> <span style={{color:'#d29122', fontWeight:'bolder'}}>T</span>esti<span style={{color:'#0db6d1', fontWeight:'bolder'}}>m</span>onial<span style={{color:'#c23409', fontWeight:'bolder'}}>s</span> </h1>
        </Grid>
      </Grid>
      
      <Grid container justify='center' alignItems='center' className={classes.testimonyContainer}  >

        <Grid item lg={3} md={12} sm={12} xs={12} className={classes.paragraphText}>
          { testimony1 }
        </Grid>

        <Grid item lg={3} md={12} sm={12} xs={12} className={classes.paragraphText2}>
          { testimony2 }
        </Grid>

        <Grid item lg={3} md={12} sm={12} xs={12} className={classes.paragraphText}>
          { testimony3 }
        </Grid>
        <Grid item lg={3} md={12} sm={12} xs={12} className={classes.paragraphText2}>
          { testimony4 }
        </Grid>

        <Grid item lg={3} md={12} sm={12} xs={12} className={classes.paragraphText}>
          { testimony5 }
        </Grid>

        <Grid item lg={3} md={12} sm={12} xs={12} className={classes.paragraphText2}>
          { testimony6 }
        </Grid>
      </Grid>
    </div>
  )
}

export default Testimonials