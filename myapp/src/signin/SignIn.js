import React, { useContext, useState } from 'react';
import AuthService from '../services/AuthService'
import { AuthContext } from '../context/AuthContext'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
  errorCredentials: {
    color: '#e4314e',
    fontSize: 33,
    fontWeight: 900,
  },
}));
const SignIn = (props) => {
  const classes = useStyles();

  const [user, setUser] = useState({username: '', password: ''})
  const [credentials, setCredentials] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const authContext = useContext(AuthContext)



  const handleOnChange = e => {
    e.preventDefault()
    setUser({...user, [e.target.name]: e.target.value})
    // console.log(user)
  }

  const handleOnSubmit = e =>{
    e.preventDefault()
    AuthService.login(user).then(data=> {
      const { isAuthenticated, user} = data
      if(isAuthenticated){
        authContext.setUser(user)
        authContext.setIsAuthenticated(isAuthenticated)
        setCredentials(isAuthenticated)
        props.history.push('/uploader')
        // console.log(`credentials SIGNIN: ${credentials}`)
      }
      else {
        setCredentials(!isAuthenticated)
        setErrorMessage(<div><p className= {classes.errorCredentials}>Incorrect Username or Password</p></div>)
        // console.log(`credentials SIGNIN: ${credentials}`)
      }
    })
  }




  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleOnSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={handleOnChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleOnChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/forgot-password" variant="body2" color='secondary'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2" color='secondary'>
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>

        {credentials && (
              errorMessage
            )}
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default SignIn;