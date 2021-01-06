import React from 'react'
import { Grid, Card, CardMedia } from '@material-ui/core'
import { makeStyles} from '@material-ui/styles'
import actServicesSML from '../../images/actServicesSML.jpg'
import bookkeepingSrvSML from '../../images/bookkeepingSrvSML.jpg'
import laptopAdtnlSrvSML from '../../images/laptopAdtnlSrvSML.jpg'

const useStyles = makeStyles({
  serviceContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  accountingServicesMedia: {
    width: 400,
    height: 260,
    borderRadius: 80,
    marginTop: 50,
    marginBottom: 50,
  },

  bookkeepingServicesMedia: {
    width: 400,
    height: 260,
    borderRadius: 80,
    marginTop: 100,
    marginLeft: 100,
    marginBottom: 50,
  },

  additionalServicesMedia: {
    width: 400,
    height: 260,
    borderRadius: 80,
    marginTop: 100,
  },
  headerStyle: {
    textDecoration: 'underline',
    fontWeight: 900,
    fontSize: 30

  },
});

function AccountingServices() {
   const classes = useStyles()

   const accountingText = ['Mazzuaa ultricies mi eget mauris. Ac felis donec et odio pellentesque. Suspendisse sed nisi lacus sed viverra. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Euismod elementum nisi quis eleifend. Praesent tristique magna sit amet purus gravida. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Nulla facilisi morbi tempus iaculis urna id. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Phasellus vestibulum lorem sed risus ultricies tristique.']

   const bookkeepingText = ['At varius vel pharetra vel turpis nunc eget lorem. Aliquam ut porttitor leo a diam sollicitudin tempor. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Dapibus ultrices in iaculis nunc. Ac turpis egestas integer eget aliquet. Vivamus arcu felis bibendum ut tristique et egestas. Felis eget velit aliquet sagittis id consectetur. Consequat semper viverra nam libero justo. Maecenas sed enim ut sem viverra aliquet. Viverra adipiscing at in tellus integer feugiat.']
   
   const additionalServiceText = ['Ullamcorper malesuada proin libero nunc consequat. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Aliquam etiam erat velit scelerisque in dictum non consectetur a. A arcu cursus vitae congue mauris. Venenatis urna cursus eget nunc. Nulla at volutpat diam ut venenatis tellus. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Dignissim diam quis enim lobortis scelerisque fermentum dui. Commodo nulla facilisi nullam vehicula ipsum. Eget gravida cum sociis natoque penatibus et magnis. Pellentesque elit ullamcorper dignissim cras tincidunt. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Varius morbi enim nunc faucibus a pellentesque sit amet. Nibh mauris cursus mattis molestie a. Sem integer vitae justo eget magna. Magna fringilla urna porttitor rhoncus.']


  return (
    <div>
      <Grid container justify='center' alignitems='center'>
        <Grid item>
          <h1 className='primaryHeaderText'><span style={{color:'#d29122', fontWeight:'bolder'}}>E</span>xpl<span style={{color:'#0db6d1', fontWeight:'bolder'}}>o</span>re <span style={{color:'#c23409', fontWeight:'bolder'}}>Y</span>our <span style={{color:'#0db6d1', fontWeight:'bolder'}}>O</span>pt<span style={{color:'#d29122', fontWeight:'bolder'}}>i</span>on<span style={{color:'#c23409', fontWeight:'bolder'}}>s</span></h1>
        </Grid>
      </Grid>

      <Grid container justify='center' alignitems='center'>
        <Grid item>
          <p className='fontSizes'> Find out which service best suits your business needs </p>
        </Grid>
      </Grid>
      
      <Grid container className={classes.serviceContainer} justify='center' alignItems='center'>

        <Grid container className={classes.serviceContainer} justify='center' alignItems='center'>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Card className={classes.accountingServicesMedia}>
              <CardMedia 
                component='img'
                alt='Accountant'
                image={actServicesSML}
                title= 'Accounting Services'
              />
            </Card>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <h2 className={classes.headerStyle}><span style={{color:'#d29122', fontWeight:'bolder'}}>Accounting</span> Services</h2>
            <p>{accountingText}</p>
          </Grid>
        </Grid>


        <Grid container className={classes.serviceContainer} justify='center' alignItems='center'>
          
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <h2 className={classes.headerStyle}><span style={{color:'#0db6d1', fontWeight:'bolder'}}>Bookkeeping</span> Services</h2>
            <p>{bookkeepingText}</p>
          </Grid>

          <Grid item lg={4} md={6} sm={12} xs={12}>
              <Card className={classes.bookkeepingServicesMedia}>
                <CardMedia 
                  component='img'
                  alt='Bookkeeping'
                  image={bookkeepingSrvSML}
                  title='Bookkeeping Services'
                />
              </Card>
            </Grid>
        </Grid>

        <Grid container className={classes.serviceContainer} justify='center' alignItems='center'>

          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Card className={classes.additionalServicesMedia}>
              <CardMedia 
                component='img'
                alt='Work Desk'
                image={laptopAdtnlSrvSML}
                title= 'Additional Services'
              />
            </Card>
          </Grid>

          <Grid item lg={4} md={6} sm={12} xs={12}>
            <h2 className={classes.headerStyle}> <span style={{color:'#c23409', fontWeight:'bolder'}}>Additional</span> Services</h2>
            <p>{additionalServiceText}</p>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default AccountingServices