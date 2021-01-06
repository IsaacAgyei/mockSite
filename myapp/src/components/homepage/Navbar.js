import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthService from '../../services/AuthService'
import { AuthContext } from '../../context/AuthContext'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Button, Grid } from '@material-ui/core'
import Logo from '../../images/Logo.png'



const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  logoSpec: {
    width: 300,
    height: 70
  },
})

const Navbar = props => {

  const classes = useStyles()
  const {isAuthenticated, user ,setIsAuthenticated,setUser} = useContext(AuthContext);
    
  const onClickLogoutHandler = ()=>{
    AuthService.logout().then(data=>{
      if(data.success){
        setUser(data.user);
        setIsAuthenticated(false);
        }
      });
    }

    const unauthenticatedNavBar = ()=>{
        return (
            <>
              <Button 
                component={Link}
                to= '/'
                variant='outlined' 
                color="secondary"
              > 
                Home
              </Button>
              <Button 
                component={Link}
                to= '/about'
                variant='outlined' 
                color="secondary"
              > 
                About
              </Button>
              <Button 
                component={Link}
                to= '/services'
                variant='outlined' 
                color="secondary"
              > 
                Services
              </Button>
              <Button 
                component={Link}
                to= '/prices'
                variant='outlined' 
                color="secondary"
              > 
                Prices
              </Button>
              <Button 
                component={Link}
                to= '/contact'
                variant='outlined' 
                color="secondary"
              > 
                Contact
              </Button>

              <Button 
                component={Link}
                to= '/register'
                variant='outlined' 
                color="secondary"
                > 
                SignUp
              </Button> 
    
              <Button 
                component={Link}
                to= '/signin'
                variant='outlined' 
                color="secondary"
              > 
                Login
              </Button>
              
            </>
        )
    }

    const authenticatedNavBar = ()=>{
      return(
        <>
         <Button 
            component={Link}
            to= '/'
            variant='outlined' 
            color="secondary"
          > 
            Home
          </Button>
          <Button 
            component={Link}
            to= '/about'
            variant='outlined' 
            color="secondary"
          > 
            About
          </Button>
          <Button 
            component={Link}
            to= '/services'
            variant='outlined' 
            color="secondary"
          > 
            Services
          </Button>
          <Button 
            component={Link}
            to= '/prices'
            variant='outlined' 
            color="secondary"
          > 
            Prices
          </Button>
          <Button 
            component={Link}
            to= '/contact'
            variant='outlined' 
            color="secondary"
          > 
            Contact
          </Button>
           <Button 
              component={Link}
              to= '/uploader'
              variant='outlined' 
              color="secondary"
            > 
            Upload
           </Button>
           <Button 
            type="button" 
            variant='outlined' 
            color="secondary"
            onClick={onClickLogoutHandler}>
            Logout
          </Button>
        </>
      )
    }

       
  return (
      <div className={classes.root}>
          <AppBar position='static'>
            <Toolbar>
              <Grid container justify='flex-start' alignItems='center'>
                <Grid item xs={6} >
                  <img alt="company logo" className={classes.logoSpec} src={Logo}/>
                </Grid>
                  <Grid item xs={6} >
                        {
                          !isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()
                        }
                  </Grid>
                </Grid>
            </Toolbar>
          </AppBar>
      </div>
    )
}

export default Navbar

// import React, {useContext} from 'react'
// import { Link } from 'react-router-dom'
// import AuthService from '../services/AuthService'
// import { AuthContext } from '../context/AuthContext'
// import { makeStyles } from '@material-ui/core/styles'
// import { AppBar, Toolbar, Button, Grid } from '@material-ui/core'



// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//   },
//   logoSpec: {
//     width: 300,
//     height: 70
//   },
// })

// const Navbar = props => {

//   const classes = useStyles()
//   const {isAuthenticated, user ,setIsAuthenticated,setUser} = useContext(AuthContext);
    
//   const onClickLogoutHandler = ()=>{
//     AuthService.logout().then(data=>{
//       if(data.success){
//         setUser(data.user);
//         setIsAuthenticated(false);
//         }
//       });
//     }

//     const unauthenticatedNavBar = ()=>{
//         return (
//             <>
//               <Button 
//                 component={Link}
//                 to= '/'
//                 variant='outlined' 
//                 color="secondary"
//               > 
//             Home
//            </Button> 
//            <Button 
//               component={Link}
//               to= '/signin'
//               variant='outlined' 
//               color="secondary"
//             > 
//             Sign In
//            </Button>
//            <Button 
//               component={Link}
//               to= '/register'
//               variant='outlined' 
//               color="secondary"
//             > 
//             Register
//            </Button> 
//             </>
//         )
//     }

//     const authenticatedNavBar = ()=>{
//       return(
//         <>
//           <Button 
//             component={Link}
//             to= '/'
//             variant='outlined' 
//             color="secondary"
//             > 
//             Home
//            </Button> 
//            <Button 
//               component={Link}
//               to= '/uploader'
//               variant='outlined' 
//               color="secondary"
//             > 
//             Upload
//            </Button>
//           <Button 
//             type="button" 
//             variant='outlined' 
//             color="secondary"
//             onClick={onClickLogoutHandler}>
//             Logout
//           </Button>
//         </>
//       )
//     }

       
//   return (
//       <div className={classes.root}>
//           <AppBar position='static'>
//             <Toolbar>
//               <Grid container justify='flex-start' alignItems='center'>
//                   <Grid item xs={6} >
//                         {
//                           !isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()
//                         }
//                   </Grid>
//                 </Grid>
//             </Toolbar>
//           </AppBar>
//       </div>
//     )
// }

// export default Navbar