import React from 'react'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Avatar from '@material-ui/core/Avatar'

import history from '../assets/history.svg'
import profile from '../assets/founder.png'
import yearbook from '../assets/yearbook.jpg'
import puppy from '../assets/puppy.svg'
import CallToAction from '../Components/call-to-action'



const AboutUsPage = () => {

    const useStyles = makeStyles(theme => ({
        mainContainer:{
            padding:'3rem 4rem 10rem 4rem',
            [theme.breakpoints.down('sm')]:{
                padding:'2rem 3rem 8rem 3rem'
            },
            [theme.breakpoints.down('xs')]:{
                padding:'1rem 0.5rem 8rem 0.5rem'
            }
        },
        missionStatement:{
            fontStyle:'italic',
            fontSize:'1,5rem',
            fontWeight:'300',
            lineHeight:'1.4'
        },
        avatar:{
            height:'25rem',
            width:'25rem',
            [theme.breakpoints.down('xs')]:{
                height:'18rem',
                width:'18rem',
            }
        }
    }))

    const theme = useTheme()
    const classes=useStyles()
    const matchMD = useMediaQuery(theme.breakpoints.down('md'))
    const matchSM = useMediaQuery(theme.breakpoints.down('sm'))
    const matchXS = useMediaQuery(theme.breakpoints.down('xs'))


    

    return(
        <React.Fragment>
        <Grid container direction='column' className={classes.mainContainer}>
        <Grid item  >
            <Grid container direction='column' style={{textAlign:matchSM?'center':'left'}} >
                <Grid item style={{marginBottom:matchSM?'3rem':'5rem'}}>
                    <Typography variant='h2' >About Us</Typography>
                </Grid>
                <Grid item >
                    <Typography variant='h4' align='center' color='primary' className={classes.missionStatement} style={{padding:matchSM?'0 0':'0 8%'}}>
                        Whether it be person to person, business to consumer, or an individual
                        to their interests, technology is meant to bring us closer to what we
                        care about in the best way possible. Arc Development will use that
                        principle to provide fast, modern, inexpensive, and aesthetic software
                        to the Midwest and beyond.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid item  style={{marginTop:matchSM?'5rem':'12rem'}}>
            <Grid container  alignItems='center'>
                <Grid item md>
                    <Grid container direction='column'  style={{textAlign:matchSM?'center':'left'}}>
                        <Grid item >
                            <Typography variant="h4" gutterBottom >
                                History
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" style={{fontWeight:'700',fontStyle:'italic'}} paragraph>
                                We're the new kid on the block
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">
                                Founded in 2019, we’re ready to get our hands on the world’s
                                business problems.
                                <br/>
                                <br/>
                                It all started with one question: Why aren’t all businesses
                                using available technology? There are many different answers to
                                that question: economic barriers, social barriers, educational
                                barriers, and sometimes institutional barriers.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container md justify={matchSM?'center':'center'} >
                    <img src={history} alt='quill pen sitting on top of book' width='100%' style={{maxWidth:'530px'}} />
                </Grid>
                <Grid item>
                    <Typography variant="body1" style={{textAlign:matchSM?'center':'left'}}>
                        We aim to be a powerful force in overcoming these obstacles.
                        Recent developments in software engineering and computing power,
                        compounded by the proliferation of smart phones, has opened up
                        infinite worlds of possibility. Things that have always been
                        done by hand can now be done digitally and automatically, and
                        completely new methods of interaction are created daily. Taking
                        full advantage of these advancements is the name of the game.
                        <br/>
                        <br/>
                        All this change can be a lot to keep up with, and that’s where
                        we come in.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>

        <Grid item>
            <Grid container direction='column' alignItems='center' style={{marginTop:matchSM?'5rem':'12rem'}}>
                <Grid item>
                    <Typography variant="h4" gutterBottom>Team</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" align='center' paragraph >Example name, Founder</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" align='center' paragraph>I started coding when I was 9 years old.</Typography>
                </Grid>
                <Grid item>
                    <Avatar alt='Example name' src={profile} className={classes.avatar} />
                </Grid>

                <Grid item  container justify='space-between' direction={matchMD?'column':'row'} style={{marginTop:matchMD?'3rem':'0'}} >
                    <Grid item container md direction='column' alignItems='center'  >
                        <Grid item>
                            <img alt='yearbook page about founder' width={matchXS?'275':'350'} height={matchXS?'undefined':'325'} src={yearbook} />
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align='center' >a page from my Sophomore yearbook</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container md direction='column' alignItems='center' style={{padding:'2rem 0'}} >
                        <Grid item style={{width:matchSM?'100%':'80%'}}>
                            <Typography variant="body1" align='center' paragraph >
                                I taught myself basic coding from a library book in third grade,
                                and ever since then my passion has solely been set on learning —
                                learning about computers, learning mathematics and philosophy,
                                studying design, always just learning.
                            </Typography>
                        </Grid>
                        <Grid item style={{width:matchSM?'100%':'80%'}}>
                            <Typography variant="body1" align='center' >
                                Now I’m ready to apply everything I’ve learned, and to help
                                others with the intuition I have developed.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container md direction='column' alignItems='center'  >
                        <Grid item >
                            <img alt='grey spotted puppy' width={matchXS?'275':'350'} height={matchXS?'undefined':'325'} src={puppy}  />
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align='center' >my miniature dapple dachshund, Sterling</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    <CallToAction/>
    </React.Fragment>
    )
}
export default AboutUsPage

