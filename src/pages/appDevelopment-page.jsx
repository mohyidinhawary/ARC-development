import React from 'react'
import { Link } from 'react-router-dom'
import Lottie from "react-lottie"

import Grid from '@material-ui/core/Grid'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Hidden, IconButton, Typography } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import CallToAction from '../Components/call-to-action'

import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import swiss from "../assets/swissKnife.svg"
import access from "../assets/extendAccess.svg"
import engagement from "../assets/increaseEngagement.svg"
import TextIconBlock from '../Components/textIcon-block'

import integrationAnimation from "../animations/integrationAnimation/data.json"

const useStyles = makeStyles(theme => ({
    mainContainer: {
        padding: '2rem 4rem 10rem 4rem',
        [theme.breakpoints.down('sm')]: {
            padding: '2rem 3rem 8rem 3rem'
        },
        [theme.breakpoints.down('xs')]: {
            padding: '1rem 0.5rem 8rem 0.5rem'
        }
    },
    arrowContainer: {
        marginTop: '0.5rem',
    },
    bodyText: {
        width: '40rem',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            textAlign: 'center'
        }
    },
    textIcon: {
        marginTop: '12rem',
        marginRight: '3rem',
        [theme.breakpoints.down('sm')]: {
            marginTop: '6rem',
            marginRight: 0,
        }
    }
}))


const MobileAppsDevelopmentPage = () => {
    const classes = useStyles()
    const theme = useTheme()
    const matchSM = useMediaQuery(theme.breakpoints.down('sm'))

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: integrationAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <React.Fragment>
            <Grid container direction='column' className={classes.mainContainer}>
                <Grid item>
                    <Grid container direction='row'>
                        <Hidden smDown>
                            <Grid item className={classes.arrowContainer} style={{ marginRight: '1rem', marginLeft: '-3.5rem' }}>
                                <IconButton style={{ backgroundColor: 'white' }} component={Link} to='/customesoftware'>
                                    <img alt='Back to services' src={backArrow} />
                                </IconButton>
                            </Grid>
                        </Hidden>
                        <Grid item>
                            <Grid container direction='column' className={classes.bodyText}>
                                <Grid item>
                                    <Typography variant='h2' >iOS/Android App Development</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='body1'>
                                        Mobile apps allow you to take your tools on the go.
                                        <br />
                                        <br />
                                        Whether you want an app for your customers, employees, or
                                        yourself, we can build cross-platform native solutions for any
                                        part of your business process. This opens you up to a whole new
                                        world of possibilities by taking advantage of phone features like
                                        the camera, GPS, push notifications, and more.
                                        <br />
                                        <br />
                                        Convenience. Connection.
                            </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Hidden smDown>
                            <Grid item className={classes.arrowContainer} style={{ marginLeft: 'auto' }}>
                                <IconButton style={{ backgroundColor: 'transparent' }} component={Link} to='/websites'>
                                    <img alt='Forward to iOS/Android app development' src={forwardArrow} />
                                </IconButton>
                            </Grid>
                        </Hidden>
                    </Grid>
                </Grid>
                <Grid item style={{ marginTop: matchSM ? '10rem' : '15rem' }}>
                    <Grid container direction={matchSM ? 'column' : 'row'}  >
                        <Grid item md>
                            <Grid container direction='column' style={{ textAlign: matchSM ? 'center' : 'left' }}>
                                <Grid item>
                                    <Typography variant='h4'  >Integration</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='body1'>
                                        Our technology enables an innate interconnection between web and
                                        mobile applications, putting everything you need right in one
                                        convenient place.
                                        <br />
                                        <br />
                                        This allows you to extend your reach, reinvent interactions, and
                                        develop a stronger relationship with your users than ever before.
                                </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md>
                            <Lottie options={defaultOptions} width='20rem' />
                        </Grid>
                        <Grid item md >
                            <Grid container direction='column' style={{ textAlign: matchSM ? 'center' : 'right' }}>
                                <Grid item>
                                    <Typography variant='h4' >Simultaneous Platform Support</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='body1' >
                                        Our cutting-edge development process allows us to create apps for
                                        iPhone, Android, and tablets — all at the same time.
                                        <br />
                                        <br />
                                        This significantly reduces costs and creates a more unified brand
                                        experience across all devices.
                                </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction={matchSM ? 'column' : 'row'} justify='center' style={{ marginTop: matchSM ? '4rem' : '0' }} >
                        <Grid item md className={classes.textIcon}>
                            <TextIconBlock
                                icon={swiss}
                                iconName='swiss army knife'
                                text='Extend Functionality'
                                iconWidth='150'
                                iconHeight='150'
                            />
                        </Grid>
                        <Grid item md className={classes.textIcon}>
                            <TextIconBlock
                                icon={access}
                                iconName='tear-one-off sign'
                                text='Extend Access'
                                iconWidth='300'
                                iconHeight='150'
                            />
                        </Grid>
                        <Grid item md className={classes.textIcon} style={{ marginRight: 0 }}>
                            <TextIconBlock
                                icon={engagement}
                                iconName='app with notification"'
                                text='Increase Engagement'
                                iconWidth='150'
                                iconHeight='150'
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <CallToAction />
        </React.Fragment>
    )
}

export default MobileAppsDevelopmentPage