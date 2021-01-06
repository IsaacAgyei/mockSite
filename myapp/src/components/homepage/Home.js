import React from 'react'
import { Typography, Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Particles from 'react-particles-js'; 

const lineTricks = <Particles
        style={{ position: "absolute" }}
        height="80%"
        width="100%"
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
           
           
 
function Home() {

  return (
    <div>
      {lineTricks}
      <Grid container direction="row" justify="center" alignItems="center"  className='content'>
        <Grid item xs={6}>
          <Typography component={'div'}>
            <div>
              <h1>Welcome to Sardius Accounting and Tax Solutions</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
                <Grid container justify='center' alignItems='center' color='primary'>
                  <Grid item>
                    <Button component={Link} to='/prices' variant='contained' color='secondary'>Get Started</Button>
                  </Grid>
                </Grid>
            </div>
          </Typography>
        </Grid>
      </Grid>
    </div>

  )
}

export default Home