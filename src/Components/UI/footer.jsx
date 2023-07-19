import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'

import footeradoenment from '../../assets/Footer Adornment.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'

const useStyles = makeStyles(theme => ({
    footer: {
        position: 'relative',
        zIndex: 1302,
        width: '100%',
        backgroundColor: theme.palette.common.blue
    },
    adornment: {
        width: '25rem',
        verticalAlign: 'bottom',
        [theme.breakpoints.down('md')]: {
            width: '21rem'
        },
        [theme.breakpoints.down('xs')]: {
            width: '15rem'
        }
    },
    mainContainer: {
        position: 'absolute',
        margin: 0
    },
    link: {
        color: 'white',
        fontFamily: 'Arial',
        fontSize: '0.75rem',
        fontWeight: 'bold',
        textDecoration: 'none'
    },
    subContainer: {
        margin: '2.7rem 2.5rem 2.7rem 4rem'
    },
    socialIcon: {
        height: '3rem',
        width: '3rem',
        [theme.breakpoints.down('xs')]: {
            height: '2.5rem',
            width: '2.5rem',
        }
    },
    socialContainer: {
        position: 'absolute',
        marginTop: '10rem',
        right: '1.5rem',
        [theme.breakpoints.down('md')]: {
            marginTop: '7.5rem'
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '5rem',
            right: '0.6rem'
        }
    }
}))


const Footer = () => {
    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
                <Grid container justify='center' direction='row' className={classes.mainContainer}>
                    <Grid item>
                        <Grid container direction='column' spacing={2} className={classes.subContainer}>
                            <Grid item className={classes.link} component={Link} to='/'>Home</Grid>
                        </Grid>
                    </Grid>
                    <Grid item >
                        <Grid container direction='column' spacing={2} className={classes.subContainer}>
                            <Grid item className={classes.link} component={Link} to='/services'>services</Grid>
                            <Grid item className={classes.link} component={Link} to='/customesoftware'>Costume Software Development</Grid>
                            <Grid item className={classes.link} component={Link} to='/mobileapps'>iOS/Android App Development</Grid>
                            <Grid item className={classes.link} component={Link} to='/websites'>Website Development</Grid>
                        </Grid>
                    </Grid>
                    <Grid item >
                        <Grid container direction='column' spacing={2} className={classes.subContainer}>
                            <Grid item className={classes.link} component={Link} to='/revolution'>The Revolution</Grid>
                            <Grid item className={classes.link} component={Link} to='/revolution'>Vision</Grid>
                            <Grid item className={classes.link} component={Link} to='/revolution'>Technology</Grid>
                            <Grid item className={classes.link} component={Link} to='/revolution'>Process</Grid>
                        </Grid>
                    </Grid>
                    <Grid item >
                        <Grid container direction='column' spacing={2} className={classes.subContainer}>
                            <Grid item className={classes.link} component={Link} to='/about'>About Us</Grid>
                            <Grid item className={classes.link} component={Link} to='/about'>History</Grid>
                            <Grid item className={classes.link} component={Link} to='/about'>Team</Grid>
                        </Grid>
                    </Grid>
                    <Grid item >
                        <Grid container direction='column' spacing={2} className={classes.subContainer}>
                            <Grid item className={classes.link} component={Link} to='/contact'>Contact Us</Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>

            <Grid container className={classes.socialContainer} spacing={2} justify='flex-end'>
                <Grid item component={'a'} href='https://facbook.com' rel='noopener noreferrer' target='_blank'>
                    <img alt='facebook logo' src={facebook} className={classes.socialIcon} />
                </Grid>
                <Grid item component={'a'} href='https://twitter.com' rel='noopener noreferrer' target='_blank'>
                    <img alt='twitter logo' src={twitter} className={classes.socialIcon} />
                </Grid>
                <Grid item component={'a'} href='https://instagram.com' rel='noopener noreferrer' target='_blank'>
                    <img alt='instagram logo' src={instagram} className={classes.socialIcon} />
                </Grid>
            </Grid>


            <img alt='black decorative slash' src={footeradoenment} className={classes.adornment} />
        </footer>
    )

}

export default Footer