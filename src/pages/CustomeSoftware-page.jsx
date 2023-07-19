import React from 'react'
import {Link} from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import { Hidden, IconButton, Typography } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import CallToAction from '../Components/call-to-action'


import TextIconBlock from '../Components/textIcon-block'
import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import lightBulb from '../assets/bulb.svg'
import cash from '../assets/cash.svg'
import stopWatch from '../assets/stopwatch.svg'
import TextAnimationBlock from '../Components/textAnimation-block'
import AnimationTextBlock from '../Components/animationText-block'
import documentAnimation from '../animations/documentsAnimation/data'
import scaleAnimation from '../animations/scaleAnimation/data.json'
import rootCause from '../assets/root.svg'
import automationAnimation from "../animations/automationAnimation/data.json";
import uxAnimation from "../animations/uxAnimation/data";

const useStyles = makeStyles(theme=>({
    mainContainer:{
        padding:'2rem 4rem 10rem 4rem',
        [theme.breakpoints.down('sm')]:{
            padding:'2rem 3rem 8rem 3rem'
        },
        [theme.breakpoints.down('xs')]:{
            padding:'1rem 0.5rem 8rem 0.5rem'
        }
    },
    arrowContainer:{
        marginTop:'0.5rem',
    },
    bodyText:{
        width:'40rem',
        [theme.breakpoints.down('sm')]:{
            width:'100%',
            textAlign:'center'
        }
    },
    textIcon:{
        marginTop:'8rem',
        marginRight:'9rem',
        [theme.breakpoints.down('sm')]:{
            marginTop:'2rem',
            marginRight:0,
        }
    },
    rootImage:{
        height:'auto',
        width:'30rem',
        [theme.breakpoints.down('sm')]:{
            minwidth:'309',
            width:'100%',
            maxWidth:'30rem',
            height:'auto'
        }
    },
    rootText:{
        width:'30rem',
        [theme.breakpoints.down('sm')]:{
            minwidth:'309',
            width:'100%',
            maxWidth:'30rem',
        }
    }   
}))

const CustomeSoftwarePage = () =>{
    const classes = useStyles()
    const theme = useTheme()
    const matchSM=useMediaQuery(theme.breakpoints.down('sm'))
    const match1530=useMediaQuery(theme.breakpoints.down(1530))

    return(
        <React.Fragment>
            <Grid container direction='column' className={classes.mainContainer}>
                <Grid item>
                    <Grid container direction='row'>
                    <Hidden smDown>
                            <Grid item className={classes.arrowContainer} style={{marginRight:'1rem' , marginLeft:'-3.5rem'}}>
                                <IconButton style={{backgroundColor:'white'}} component={Link} to='/services'>
                                    <img alt='Back to services' src={backArrow}  />
                                </IconButton>
                            </Grid>
                    </Hidden>
                        <Grid item>
                            <Grid container direction='column' className={classes.bodyText}>
                                <Grid item>
                                    <Typography variant='h2' >Custome Software Development</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='body1'>
                                        Whether we’re replacing old software or inventing new solutions,Arc Development is here to help your business tackle technology.
                                        <br />
                                        <br />
                                        Using regular commercial software leaves you with a lot of stuff
                                        you don’t need, without some of the stuff you do need, and
                                        ultimately controls the way you work. Without using any software
                                        at all you risk falling behind competitors and missing out on huge
                                        savings from increased efficiency.
                                        <br />
                                        <br />
                                        Our custom solutions are designed from the ground up with your
                                        needs, wants, and goals at the core. This collaborative process
                                        produces finely tuned software that is much more effective at
                                        improving your workflow and reducing costs than generalized
                                        options.
                                        <br />
                                        <br />
                                        We create exactly what you what, exactly how you want it.    
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    <Hidden smDown>
                            <Grid item className={classes.arrowContainer} style={{marginLeft:'auto'}}>
                                <IconButton style={{backgroundColor:'transparent'}} component={Link} to='/mobileapps'>
                                    <img alt='Forward to iOS/Android app development' src={forwardArrow}  />
                                </IconButton>
                            </Grid>
                        </Hidden>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction={matchSM? 'column':'row'} justify='center' >
                        <Grid item className={classes.textIcon}>
                            <TextIconBlock
                            icon={lightBulb}
                            iconName='light bulb'
                            text='Save Energy'
                            />
                        </Grid>
                        <Grid item className={classes.textIcon}>
                            <TextIconBlock
                            icon={stopWatch}
                            iconName='Stop Watch'
                            text='Save Time'
                            />
                        </Grid>
                        <Grid item className={classes.textIcon} style={{marginRight:0}}>
                            <TextIconBlock
                            icon={cash}
                            iconName='cash'
                            text='Save Money'
                            />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item>
                    <Grid container direction={match1530?'column' : 'row'} justify={match1530? 'flex-start':'space-between'}>
                        <Grid item lg style={{marginTop:matchSM? '12rem': '15rem'}}>
                            <TextAnimationBlock
                            header='Digital Documents & Data'
                            body={[
                                'Reduce Errors. Reduce Waste. Reduce Costs.',
                                <br key='adwaqa'/>,
                                <br key='adwaafsa'/>,
                                ` Billions are spent annually on the purchasing, printing, and
                                distribution of paper. On top of the massive environmental
                                impact this has, it causes harm to your bottom line as well.`,
                                <br key='a34aqa'/>,
                                <br key='adw5ga'/>,
                                `By utilizing digital forms and documents you can remove these
                                obsolete expenses, accelerate your communication, and help the
                                Earth.`
                            ]}
                            animation={documentAnimation}
                            animationStyles={{
                                maxHeight:275,
                                minHeight:250,
                                maxWidth:275,
                            }}
                            />
                        </Grid>
                        <Grid item lg style={{marginTop:match1530? matchSM?  '10rem':'6rem': '15rem'}}> 
                        {matchSM? 
                            <TextAnimationBlock
                            header='Scale'
                            body='Whether you’re a large brand, just getting started, or taking
                            off right now, our application architecture ensures pain-free
                            growth and reliability.'
                            animation={scaleAnimation}
                            animationStyles={{
                                maxHeight:275,
                                minHeight:250,
                                maxWidth:275,
                            }}
                            />
                            :
                            <AnimationTextBlock
                            header='Scale'
                            body='Whether you’re a large brand, just getting started, or taking
                            off right now, our application architecture ensures pain-free
                            growth and reliability.'
                            animation={scaleAnimation}
                            animationStyles={{
                                maxHeight:275,
                                minHeight:250,
                                maxWidth:275,
                            }}
                            />
                        }
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item style={{marginTop:matchSM? '12rem': '15rem'}}>
                        <Grid container direction='column' alignItems='center'>
                            <Grid item className={classes.rootImage}>
                                <img alt='tree with root' src={rootCause} height='100%' width='100%'/>
                            </Grid>
                            <Grid item>
                                <Typography variant="h4" align="center" gutterBottom className={classes.rootText}>
                                    Root-Cause Analysis
                                </Typography>
                            </Grid>
                            <Grid item>
                            <Typography variant="body1" align="center" className={classes.rootText} >
                            Many problems are merely symptoms of larger, underlying issues.
                            <br/>
                            <br/>
                            We can help you thoroughly examine all areas of your business to
                            develop a holistic plan for the most effective implementation of
                            technology.
                        </Typography>
                            </Grid>
                        </Grid>
                </Grid> 
                
                <Grid item>
                    <Grid container direction={match1530?'column' : 'row'} justify={match1530? 'flex-start':'space-between'}>
                        <Grid item  style={{marginTop:matchSM? '12rem': '15rem'}}>
                            <TextAnimationBlock
                            header='Automation'
                            body={[
                                'Why waste time when you don’t have to?',
                                <br key='adw7fqa'/>,
                                <br key='adwrcfsa'/>,
                                `We can help you identify processes with time or event based
                                actions which can now easily be automated.`,
                                <br key='a3esqa'/>,
                                <br key='adwbqa'/>,
                                `Increasing efficiency increases profits, leaving you more time
                                to focus on your business, not busywork.`
                            ]}
                            animation={automationAnimation}
                            animationStyles={{
                                maxHeight:270,
                                maxWidth:260,
                            }}
                            />
                        </Grid>
                        <Grid item  style={{marginTop:match1530? matchSM?  '10rem':'6rem': '15rem'}}> 
                        {matchSM? 
                            <TextAnimationBlock
                            header='User Experiance Design'
                            body={[
                                'A good design that isn’t usable isn’t a good design.',
                                <br key='adw7as'/>,
                                <br key='adq3cfsa'/>,
                                `So why are so many pieces of software complicated, confusing,
                                and frustrating?`,
                                <br key='a3tgsdqa'/>,
                                <br key='adaava'/>,
                                `By prioritizing users and the real ways they interact with
                                technology we’re able to develop unique, personable experiences
                                that solve problems rather than create new ones.`
                            ]}
                            animation={uxAnimation}
                            animationStyles={{
                                maxHeight:310,
                                maxWidth:155,
                            }}
                            />
                            :
                            <AnimationTextBlock
                            header='User Experiance Design'
                            body={[
                                'A good design that isn’t usable isn’t a good design.',
                                <br key='adw7as'/>,
                                <br key='adq3cfsa'/>,
                                `So why are so many pieces of software complicated, confusing,
                                and frustrating?`,
                                <br key='a3tgsdqa'/>,
                                <br key='adaava'/>,
                                `By prioritizing users and the real ways they interact with
                                technology we’re able to develop unique, personable experiences
                                that solve problems rather than create new ones.`
                            ]}
                            animation={uxAnimation}
                            animationStyles={{
                                maxHeight:310,
                                maxWidth:155,
                            }}
                            />
                        }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <CallToAction  />
        </React.Fragment>
    )
}

export default CustomeSoftwarePage