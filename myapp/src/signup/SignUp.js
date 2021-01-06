import React, { useRef, useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AuthService from '../services/AuthService'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Sardius Accounting
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  errorCredentials: {
    color: '#e4314e',
    fontSize: 33,
    fontWeight: 900,
  },
}));

export default function SignUp(props) {
  const classes = useStyles();
  const [user, setUser] = useState({username: '', password: '', email: ""})
  const [credentials, setCredentials] = useState(null)
  const [message, setMessage] = useState()
  let timerID = useRef(null)

  useEffect(()=>{
    return () => {
      clearTimeout(timerID)
    }
  },[])

  const handleOnChange = e => {
    e.preventDefault()
    setUser({...user, [e.target.name]: e.target.value})
    console.log(user)
  }

  const resetForm = ()=> {
    setUser({username : "", password: "", email: ""})
  }

  const handleOnSubmit = e =>{
    e.preventDefault()
    AuthService.register(user).then(data=> {
      console.log(`SIGNUP DATA: ${JSON.stringify(data)}`)
      const { isAuthenticated } = data.message.msgError
      const { message } = data
      resetForm()
        
        if(message.msgBody === 'Username is already taken') {
          setCredentials(isAuthenticated)
          setMessage('Username is already taken, please try a new username')

        } else if (message.msgBody === 'Error has occured') {
          setCredentials(isAuthenticated)
          setMessage('Error occured, Please fill out all boxes')

        } else if (message.msgBody === 'Account successfully created') {
          setCredentials(isAuthenticated)
          setMessage('Account successfully created')

          if(!message.msgError) {
            timerID = setTimeout(()=>{
              props.history.push('/signin');
            },2000)

        }
      }}
    )}

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleOnSubmit}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                // required
                fullWidth
                value={user.username}
                type='text'
                min='5'
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                value={user.email}
                type='email'
                min='6'
                // required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                value={user.password}
                // required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleOnChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color='secondary'
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2" color='secondary'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
        
        {!credentials && (
              <div>
                <p className= {classes.errorCredentials}>
                  {message}
                </p>
              </div>
            )}

      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
