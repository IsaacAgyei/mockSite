import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Button, Typography, TextField } from '@material-ui/core';
import axios from 'axios'
import MailTwoToneIcon from '@material-ui/icons/MailTwoTone';
import LocationOnTwoToneIcon from '@material-ui/icons/LocationOnTwoTone';
import PhoneAndroidTwoToneIcon from '@material-ui/icons/PhoneAndroidTwoTone';
import { apiForm } from './api'
import Particles from 'react-particles-js'; 

const lineTricks = <Particles
        style={{ position: "absolute" }}
        height="95%"
        width="95%"
        params={{
          particles: {
            color: {
              value: "#000000"
            },
            line_linked: {
              color: {
                value: "#000000"
              }
            },
            number: {
              value: 100
            },
            size: {
              value: 2
            }
          }
        }}
        />

const useStyle = makeStyles({
   paper1: {
    marginTop: 50,
    width: 600,
    padding: 50,
    background: '#fef6e7',
   },

   paper2: {
     marginRight: 250,
     marginBottom: 25,
     marginTop: 100,
     padding: 30,
     background: '#fef6e7',
   },

   paperHeader2: {
     fontWeight: 900,
     marginBottom: 25,
   },

  iconText: {
    marginLeft: 100,
  },

  contactForm: {
    width: 500,
    '& .MuiTextField-root': {
      width: 400,
    },
    padding: 40,
  },
  backgroundSettings: {
    backgroundColor: '#fef6e7'  //'#fcfcfb'
  }
})

function ContactPage() {
  const classes = useStyle()

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })
  const [inputs, setInputs] = useState({
    email: '',
    message: '',
    firstName: '',
    lastName: '',
    phone: ''
  })
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        email: '',
        message: '',
        firstName: '',
        lastName: '',
        phone: ''
      })
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }
  const handleOnChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    axios({
      method: 'POST',
      url: apiForm,
      data: inputs
    })
      .then(response => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        )
      })
      .catch(error => {
        handleServerResponse(false, error.response.data.error)
      })
  }

  return ( 
    
    <div className={classes.backgroundSettings}>
      {lineTricks}
      <Grid container justify='space-between' alignContent='center'>
        <Paper className={classes.paper1} elevation={0}>
          <Grid item >
   
            <Typography variant='h5' component='h5' className={classes.paperHeader2}> <span style={{color:'#d29122', fontWeight:'bolder'}}>Get</span> <span style={{color:'#0db6d1', fontWeight:'bolder'}}>In</span> <span style={{color:'#c23409', fontWeight:'bolder'}}>Touch</span></Typography>

                <Typography ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></Typography>
                <Typography ><p> {<MailTwoToneIcon fontSize='large' />} sardiusaccounting@gmail.com </p></Typography>
                <Typography ><p> {<LocationOnTwoToneIcon  fontSize='large' />} 1920 Bloor Street, Galahad, Alberta T0B 1R0 </p></Typography>
                <Typography ><p> {<PhoneAndroidTwoToneIcon fontSize='large'  />} 780-583-3107 </p></Typography>
          </Grid>
          </Paper>

          <Paper className={classes.paper2}  elevation={8}>
            <Grid item className={classes.contactForm}>
          
              <Typography variant='h5' component='h5' className={classes.paperHeader2}> <span style={{color:'#d29122', fontWeight:'bolder'}}>Have</span> <span style={{color:'#0db6d1', fontWeight:'bolder'}}>A</span> <span style={{color:'#c23409', fontWeight:'bolder'}}>Question?</span> </Typography> 
                <form onSubmit={handleOnSubmit}>
                  <Grid container >
                    <Grid item >
                      <TextField 
                        label='First Name' 
                        variant='filled' 
                        required 
                        id="firstName"
                        type="text"
                        name="firstName"
                        onChange={handleOnChange}
                        value={inputs.firstName}>
                      </TextField>
                    </Grid>

                    <Grid item>
                      <TextField 
                        label='Last Name' 
                        variant='filled' 
                        required 
                        id="lastName"
                        type="text"
                        name="lastName"
                        onChange={handleOnChange}
                        value={inputs.lastName}>
                      </TextField>
                    </Grid>

                    <Grid item>
                      <TextField 
                        label='Phone' 
                        variant='filled' 
                        required 
                        id="phone"
                        type="number"
                        name="phone"
                        onChange={handleOnChange}
                        value={inputs.phone}>
                      </TextField>
                    </Grid>

                    <Grid item>
                      <TextField 
                        label='Email' 
                        variant='filled' 
                        required 
                        id="email"
                        type="email"
                        name="_replyto"
                        onChange={handleOnChange}
                        value={inputs.email}>
                      </TextField>
                    </Grid>

                    <Grid item>
                      <TextField
                        label='Message' 
                        variant='filled'
                        multiline
                        rows={5}
                        id="message"
                        name="message"
                        onChange={handleOnChange}
                        required={true}
                        value={inputs.message}>
                      </TextField>
                    </Grid>

                    <Grid item xs={12}>
                    <Button type="submit" variant='contained' color='secondary' disabled={status.submitting}>
                    {!status.submitting
                      ? !status.submitted
                        ? 'Submit'
                        : 'Submitted'
                      : 'Submitting...'}
                    </Button>
                    </Grid>
                    </Grid>
                    </form>
                    {status.info.error && (
                    <div className="error">Error: {status.info.msg}</div>
                    )}
                    {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
            
        </Grid>
        </ Paper>
        </Grid>
    </div>
  )

}

export default ContactPage