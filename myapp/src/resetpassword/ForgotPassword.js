import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios'

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function ForgotPassword() {
  const classes = useStyles();

  const [email, setEmail] = useState()
  const [showError, setShowError] = useState(false)
  const [messageFromServer, setMessageFromServer] = useState('')
  const [showNullError, setShowNullError] = useState(false)

  const handleOnChange = (e) => {
    setEmail(e.target.value)
  }

  const sendEmail = async (e) => {
    e.preventDefault();
    if (email === '') {
      setShowError(false)
      setMessageFromServer('')
      setShowNullError(true)
    } else {
      try {
        const response = await axios.post('/user/forgotPassword',{email,},);
        console.log(response.data);
        if (response.data === 'recovery email sent') {
          setShowError(false)
          setMessageFromServer('recovery email sent')
          setShowNullError(false)
        }
      } catch (error) {
        console.error(error.response.data);
        if (error.response.data === 'email not in db') {
          setShowError(true)
          setMessageFromServer('')
          setShowNullError(false)
        }
      }
    }
  };

  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>
        <form className={classes.form} onSubmit={ sendEmail }>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange = { handleOnChange }
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Send Reset Password Email
          </Button>
        </form>

        {showNullError && (
          <div>
            <p>The email address cannot be null.</p>
          </div>
        )}

        {showError && (
          <div>
            <p>
              That email address isn&apos;t recognized. Please try again or
              register for a new account.
            </p>
            <Link href="/signin" color='secondary' variant="body2">
                  Already Have An Account?
            </Link>
          </div>
        )}      
        
        {messageFromServer === 'recovery email sent' && (
          <div>
            <h3>Password Reset Email Successfully Sent!</h3>
          </div>
        )}

      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
