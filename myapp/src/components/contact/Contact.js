  
import React, { useState } from 'react'
import { Grid, Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { apiForm } from './api'
import axios from 'axios'

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiTextField-root': {
      width: '600px',
    },
  },
}));

export default function Contact() {
  const classes = useStyles()

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
    <Grid container justify='center' alignItems='center' className={classes.root}>
      <main>
        <h1 className='primaryHeaderTextColour'>Let's Talk</h1>
        <hr />
          <form onSubmit={handleOnSubmit}>

            <Grid item>
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
                rows={15}
                id="message"
                name="message"
                onChange={handleOnChange}
                required={true}
                value={inputs.message}>
              </TextField>
            </Grid>
     
          <Button type="submit" variant='contained' color='secondary' disabled={status.submitting}>
            {!status.submitting
              ? !status.submitted
                ? 'Submit'
                : 'Submitted'
              : 'Submitting...'}
          </Button>
        </form>
        {status.info.error && (
          <div className="error">Error: {status.info.msg}</div>
        )}
        {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
      </main>
    </Grid>
  )
}