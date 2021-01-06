
import React, { useState, useEffect } from 'react';
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
import { useParams } from 'react-router-dom';


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

export default function ResetPassword() {
  const classes = useStyles();
  const { token } = useParams()

  const loading = {
    margin: '1em',
    fontSize: '24px',
  }

  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ update, setUpdate ] = useState(false)
  const [ isLoading, setIsLoading ] = useState(true)
  const [ error, setError ] = useState(false)


  useEffect(() => {
    async function fetchData(){
    
      try {
      const response = await axios.get('/user/reset', {
        params: {
          resetPasswordToken: token
        },
      });
      console.log(`Reset Password res: ${response}`);
      if (response.data.message === 'password reset link a-ok') {
        setUsername(response.data.username)
        setUpdate(false)
        setIsLoading(false)
        setError(false)
      }
    } catch (error) {
      console.log(error.response.data);
      setUpdate(false)
      setIsLoading(false)
      setError(true)
    }}
    fetchData()
  },[token])

  const handleChange = (e) => {
    setPassword(e.target.value)
  }
  
  const updatePassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        '/user/updatePasswordViaEmail', { username, password, resetPasswordToken: token,},);
      console.log(response.data);
      if (response.data.message === 'password updated') {
        setUpdate(true)
        setError(false)
      } else {
        setUpdate(false)
        setError(true)
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create New Password
          </Typography>
          <form className={classes.form} onSubmit={updatePassword}>
          <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="New Password"
                type="password"
                id="password"
                onChange= {handleChange}
              />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Reset Password
            </Button>
          </form>

          {error && (
            <div>
              <div style={loading}>
                <h4>Problem resetting password. Please send another reset link.</h4>
                <Link href="/forgot-password" color='secondary' variant="body2">
                      Forgot Password?
                </Link>
              </div>
           </div>
          )}

          {isLoading && (
            <div>
              <div style={loading}>Loading User Data...</div>
            </div>
          )}

        {update && (
          <div>
            <p>
              Your password has been successfully reset, please try logging in
              again.
            </p>
            <Link href="/signin" color='secondary' variant="body2">
              Login With New Password?
            </Link>
          </div>
        )}
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>

    </div>
  );
}