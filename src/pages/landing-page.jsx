import React from "react";
import Lottie from "react-lottie";
import { Link } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import landinganimation from "../animations/landinganimation/data.js";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Card from "@material-ui/core/Card"
import CardContent from '@material-ui/core/CardContent'

import ButtonArrow from '../Components/ButtonArrow'
import customeSoftwareIcon from '../assets/Custom Software Icon.svg'
import mobileAppsIcon from '../assets/mobileIcon.svg'
import websiteIcon from '../assets/websiteIcon.svg'
import revoulotionBackgroundImage from '../assets/repeatingBackground.svg'
import informationBackgroundImage from '../assets/infoBackground.svg'
import CallToAction from '../Components/call-to-action'
import ServiceBlock from '../Components/service-block'


const useStyles = makeStyles(theme => ({
  animation: {
    marginTop: '2rem',
    marginLeft: '10%',
    maxWidth: '40rem',
    minWidth: '21em',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30rem',
    }

  },
  textHeroContainer: {
    marginLeft: '2rem',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    marginRight: 50,
    heigh: 45,
    width: 145,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  },
  heroLearnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    heigh: 45,
    width: 145,
    '&:hover': {
      backgroundColor: '#e2f3ff'
    }
  },
  buttonContainer: {
    minWidth: '22rem'
  },
  mainContainer: {
    marginTop: '5rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '3rem'
    }, [theme.breakpoints.down('xs')]: {
      marginTop: '2rem'
    }
  },
  specialText: {
    fontFamily: 'pacifico',
    color: theme.palette.common.orange
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    padding: 7,
    height: 35
  },
  serviceBlockContainer: {
    marginTop: '15rem',
    [theme.breakpoints.down('sm')]: {
      padding: '1rem',
      marginTop: '10rem'
    }
  },
  icon: {
    marginLeft: '2rem',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    }
  },
  revolutionBackground: {
    backgroundImage: `url(${revoulotionBackgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%'
  },
  revolutionCardContainer: {
    height: '60rem',
    textAlign: 'center'
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 12,
    padding: '7rem',
    [theme.breakpoints.down('sm')]: {
      padding: '7rem 0',
      borderRadius: 0,
      width: '100%'
    },
  },
  informaionBackground: {
    backgroundImage: `url(${informationBackgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%'
  },
  informationContainer: {
    marginTop: '12rem'
  },
  aboutUsContainer: {
    marginLeft: '4rem',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '2rem'
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      textAlign: 'center',
      padding: '3rem 0'
    }
  },
  contactUsContainer: {
    marginRight: '4rem',
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
      marginRight: '2rem'
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
      textAlign: 'center',
      padding: '3rem 0'
    }
  }
}))


const LandingPage = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matchSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchXS = useMediaQuery(theme.breakpoints.down('xs'))

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: landinganimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <Grid container direction='column' className={classes.mainContainer}>
      <Grid item>{/*-----Hero Block-----*/}
        <Grid container justify='flex-end' alignItems='center' direction='row'>
          <Grid item sm className={classes.textHeroContainer} >
            <Typography variant='h2' align='center'
            >Bringing West Coast Technology
              <br />
              To The Midwest
            </Typography>
            <Grid item >
              <Grid container direction='row' justify='center' className={classes.buttonContainer}>
                <Grid item >
                  <Button variant="contained" className={classes.estimateButton} component={Link} to='/estimate'>Free Estimate</Button>
                </Grid>
                <Grid item >
                  <Button variant="outlined" component={Link} to='/revolution' className={classes.heroLearnButton}>
                    <span style={{ marginRight: 8 }}>Learn More</span>
                    <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm className={classes.animation}>
            <Lottie options={defaultOptions} height="100%" width="100%" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.serviceBlockContainer} style={{ marginLeft: matchSM ? 0 : '4rem' }}>{/*-----Custom Software Block-----*/}
        <ServiceBlock
        serviceIcon={customeSoftwareIcon}
        justifyType='flex-start'
        serviceNameText='Custome Software Development'
        subtitle1='Save Energy. Save Time. Save Money'
        subtitle2={['Complete digital solutions, from investigation to ',<span key='1e12e' className={classes.specialText}>celebration</span>]}
        serviceRoute='/customesoftware'
        />
      </Grid>
      <Grid item className={classes.serviceBlockContainer} style={{ marginRight: matchSM ? 0 : '4rem' }}>{/*-----iOS/Android Block-----*/}
        <ServiceBlock
        serviceIcon={mobileAppsIcon}
        justifyType='flex-end'
        serviceNameText='iOS/Android App Development'
        subtitle1='Extend Functionality. Extend Access. Increase Engagment'
        subtitle2={["Integrate your web experiance or create a standalone app ", matchSM ? null : <br key='3ds'/>,  "with either mobile platform"]} 
        serviceRoute='/mobileapps'
        />
      </Grid>
      <Grid item className={classes.serviceBlockContainer} style={{ marginLeft: matchSM ? 0 : '4rem' }}>{/*-----Website Block-----*/}
        <ServiceBlock
        serviceIcon={websiteIcon}
        justifyType='flex-start'
        serviceNameText='Website Development'
        subtitle1='Reach More. Discover More. Sell More'
        subtitle2='Optimized for Search Engines. built for speed '
        serviceRoute='/websites'
        />
      </Grid>
      <Grid item style={{ marginTop: '12rem' }}>{/*-----Revolution Block-----*/}
        <Grid container justify='center' alignItems='center' className={classes.revolutionCardContainer}>
          <Card className={classes.revolutionCard}>
            <CardContent >
              <Grid container direction='column'>
                <Grid item >
                  <Typography variant='h3' gutterBottom >The Revolution</Typography>
                </Grid>
                <Grid item >
                  <Typography variant='subtitle1'>Visionary insight coupled with cutting-edge technology is a recipe for revolution.</Typography>
                  <Button variant="outlined" component={Link} to='/revolution' className={classes.heroLearnButton}>
                    <span style={{ marginRight: 8 }}>Learn More</span>
                    <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>
      <Grid item className={classes.informationContainer}>{/*-----Information Block-----*/}
        <Grid container alignItems='center' style={{ height: '50rem' }}>
          <Grid item container style={{ position: 'absolute' }} direction={matchXS ? 'column' : 'row'} >
            <Grid item sm className={classes.aboutUsContainer}>
              <Grid container direction='column' >
                <Typography variant='h2' style={{ color: 'white' }}>About Us</Typography>
                <Typography variant='subtitle2'>Let's get personal</Typography>
                <Grid item>
                  <Button variant="outlined" component={Link} to='/about' className={classes.learnButton} style={{ borderColor: 'white', color: 'white' }}>
                    <span style={{ marginRight: 8 }}>Learn More</span>
                    <ButtonArrow width={12} height={12} fill='white' />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm className={classes.contactUsContainer}>
              <Grid container direction='column' >
                <Typography variant='h2' style={{ color: 'white' }}>Contact Us</Typography>
                <Typography variant='subtitle2'>Say Hello</Typography>
                <Grid item>
                  <Button variant="outlined" component={Link} to='/contact' className={classes.learnButton} style={{ borderColor: 'white', color: 'white' }}>
                    <span style={{ marginRight: 8 }}>Learn More</span>
                    <ButtonArrow width={12} height={12} fill='white' />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div className={classes.informaionBackground} />
        </Grid>
      </Grid>
      <Grid item >
        <CallToAction />
      </Grid>
    </Grid>
  )
}

export default LandingPage;
