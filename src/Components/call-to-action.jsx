import React from 'react'
import { Link } from 'react-router-dom'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import ButtonArrow from './ButtonArrow'
import background from '../assets/background.jpg'
import mobileBackground from '../assets/mobileBackground.jpg'


const useStyles = makeStyles(theme => ({
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: '0.7rem',
        padding: 7,
        height: 35
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: '50px',
        height: 80,
        width: 205,
        marginRight: '4rem',
        fontSize: '1.5rem',
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down('sm')]: {
            marginRight: 0
        }
    },
    callToActionBackground: {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            backgroundImage: `url(${mobileBackground})`,
            backgroundPosition:'0 65%'
        }
    },
    callTextContainer: {
        marginLeft: '4rem',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            textAlign: 'center'
        }
    }
}))

const CallToAction = () => {
    const classes = useStyles()
    const theme = useTheme()
    const matchSM = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Grid container  >
            <Grid item container direction={matchSM ? 'column' : 'row'} alignItems='center' justify={matchSM ? 'space-around' : 'space-between'} style={{ position: 'absolute', height: '40rem' }} >
                <Grid item>
                    <Grid container direction='column' className={classes.callTextContainer}>
                        <Typography variant='h2' gutterBottom style={{ lineHeight: '2.3rem' }}>
                            Simple Software.
                            <br />
                            Revolutionary Results.
                        </Typography>
                        <Typography variant='subtitle2' style={{ lineHeight: '1.5rem' }}>
                            Take advantage of the
                            <br />
                            21th century
                        </Typography>
                        <Grid item>
                            <Button variant='outlined' component={Link} to='/revolution' className={classes.learnButton}>
                                <span style={{ marginRight: 5 }}>Learn More</span>
                                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button variant='contained' color='secondary' component={Link} to='/estimate' className={classes.estimateButton}>
                        Free Estimate
                     </Button>
                </Grid>
            </Grid>
            <div className={classes.callToActionBackground} style={{ height: '40rem' }} />
        </Grid>
    )
}

export default CallToAction