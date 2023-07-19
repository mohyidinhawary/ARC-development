import React from 'react'
import { Link } from 'react-router-dom'


import Grid from '@material-ui/core/Grid'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Hidden, IconButton, Typography } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import CallToAction from '../Components/call-to-action'

import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import analytics from "../assets/analytics.svg";
import seo from "../assets/seo.svg";
import outreach from "../assets/outreach.svg";
import ecommerce from "../assets/ecommerce.svg";


import TextIconBlock from '../Components/textIcon-block'



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
    },
    iconParagraph:{
        width:'25rem',
        [theme.breakpoints.down('sm')]:{
            width:'100%'
        }
    }
}))


const WebsiteDevelopmentPage = () => {
    const classes = useStyles()
    const theme = useTheme()
    const matchSM = useMediaQuery(theme.breakpoints.down('sm'))

    

    return (
        <React.Fragment>
            <Grid container direction='column' className={classes.mainContainer}>
                <Grid item>
                    <Grid container direction='row'>
                        <Hidden smDown>
                            <Grid item className={classes.arrowContainer} style={{ marginRight: '1rem', marginLeft: '-3.5rem' }}>
                                <IconButton style={{ backgroundColor: 'white' }} component={Link} to='/mobileapps'>
                                    <img alt='Back to services' src={backArrow} />
                                </IconButton>
                            </Grid>
                        </Hidden>
                        <Grid item>
                            <Grid container direction='column' className={classes.bodyText}>
                                <Grid item>
                                    <Typography variant='h2' >Website Development</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='body1'>
                                        Having a website is a necessity in today’s business world. They
                                        give you one central, public location to let people know who you
                                        are, what you do, and why you’re the best at it.
                                        <br />
                                        <br />
                                        From simply having your hours posted to having a full fledged
                                        online store, making yourself as accessible as possible to users
                                        online drives growth and enables you to reach new customers.
                            </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Hidden smDown>
                            <Grid item className={classes.arrowContainer} style={{ marginLeft: 'auto' }}>
                                <IconButton style={{ backgroundColor: 'transparent' }} component={Link} to='/services'>
                                    <img alt='Forward to iOS/Android app development' src={forwardArrow} />
                                </IconButton>
                            </Grid>
                        </Hidden>
                    </Grid>
                </Grid>

                <Grid item style={{ marginTop: matchSM ? '10rem' : '15rem' }}>
                    <Grid container direction={matchSM ? 'column' : 'row'} alignItems='center' >
                        <Grid item style={{marginRight:matchSM?'0' :'2rem'}}>
                            <TextIconBlock
                            text='Analytics'
                            icon={analytics}
                            iconName={`graph with magnifying glass revealing 1's and 0's`}
                            />
                        </Grid>
                        <Grid item className={classes.iconParagraph} style={{textAlign:matchSM?'center':'left'}} >
                            <Typography >
                                Knowledge is power, and data is 21st Century gold. Analyzing this
                                data can reveal hidden patterns and trends in your business,
                                empowering you to make smarter decisions with measurable effects.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                
                <Grid item style={{ marginTop: matchSM ? '10rem' : '12rem' }}>

                {
                    matchSM?

                    <Grid container direction={matchSM ? 'column' : 'row'} alignItems='center' justify={matchSM?'flex-start':'flex-end'}>
                        <Grid item >
                            <TextIconBlock
                            text='E-Commerce'
                            icon={ecommerce}
                            iconName='world outline made of dollar signs'
                            />
                        </Grid>
                        <Grid item className={classes.iconParagraph} style={{textAlign:matchSM?'center':'right'}} >
                            <Typography >
                                It’s no secret that people like to shop online.
                                <br/>
                                <br/>
                                In 2017 over $2.3 trillion was spent in e-commerce, and it’s time
                                for your slice of that pie.
                            </Typography>
                        </Grid>
                        
                        
                    </Grid>
                    :
                    <Grid container direction={matchSM ? 'column' : 'row'} alignItems='center' justify={matchSM?'flex-start':'flex-end'}>
                        <Grid item className={classes.iconParagraph} style={{textAlign:matchSM?'center':'right'}} >
                            <Typography >
                                It’s no secret that people like to shop online.
                                <br/>
                                <br/>
                                In 2017 over $2.3 trillion was spent in      
                                <br/>
                                e-commerce, and it’s time
                                for your slice of that pie.
                            </Typography>
                        </Grid>
                        <Grid item style={{marginLeft:matchSM?'0' :'2rem'}}>
                            <TextIconBlock
                            text='E-Commerce'
                            icon={ecommerce}
                            iconName='world outline made of dollar signs'
                            />
                        </Grid>
                        
                    </Grid>
                }

                    
                </Grid>

                
                <Grid item style={{ marginTop: matchSM ? '10rem' : '12rem' }}>
                    <Grid container direction={matchSM ? 'column' : 'row'} alignItems='center' >
                        <Grid item style={{marginRight:matchSM?'0' :'2rem'}}>
                            <TextIconBlock
                            text='Outreach'
                            icon={outreach}
                            iconName='megaphone'
                            />
                        </Grid>
                        <Grid item className={classes.iconParagraph} style={{textAlign:matchSM?'center':'left'}} >
                            <Typography >
                                Knowledge is power, and data is 21st Century gold. Analyzing this
                                data can reveal hidden patterns and trends in your business,
                                empowering you to make smarter decisions with measurable effects.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item style={{ marginTop: matchSM ? '10rem' : '12rem' }}>

                {
                    matchSM?

                    <Grid container direction={matchSM ? 'column' : 'row'} alignItems='center' justify={matchSM?'flex-start':'flex-end'}>
                        <Grid item style={{marginLeft:matchSM?'0' :'2rem'}}>
                            <TextIconBlock
                            text={['Search Engine',<br key='dqwd8' />, `Optimization`]}
                            icon={seo}
                            iconName={`website standing on winner's podium`}
                            />
                        </Grid>
                        <Grid item className={classes.iconParagraph} style={{textAlign:matchSM?'center':'right'}} >
                            <Typography >
                                How often have you ever been to the second page of Google results?
                                <br/>
                                <br/>
                                If you’re like us, probably never.
                            </Typography>
                        </Grid>
                        
                        
                    </Grid>
                    :
                    <Grid container direction={matchSM ? 'column' : 'row'} alignItems='center' justify={matchSM?'flex-start':'flex-end'}>
                        <Grid item className={classes.iconParagraph} style={{textAlign:matchSM?'center':'right'}} >
                            <Typography >
                                How often have you ever been to the second page of Google results?
                                <br/>
                                <br/>
                                If you’re like us, probably never.
                            </Typography>
                        </Grid>
                        <Grid item style={{marginLeft:matchSM?'0' :'2rem'}}>
                            <TextIconBlock
                            text={['Search Engine',<br key='dqwd8' />, `Optimization`]}
                            icon={seo}
                            iconName={`website standing on winner's podium`}
                            />
                        </Grid>
                        
                    </Grid>
                }

                    
                </Grid>
                
            </Grid>
            <CallToAction />
        </React.Fragment>
    )
}

export default WebsiteDevelopmentPage