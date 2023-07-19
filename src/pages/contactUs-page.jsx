import { useTheme,makeStyles, Grid, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent';
import useMediaQuery from '@material-ui/core/useMediaQuery'

import ButtonArrow from '../Components/ButtonArrow'
import background from '../assets/background.jpg'
import mobileBackground from '../assets/mobileBackground.jpg'
import phoneIcon from "../assets/phone.svg"
import emailIcon from "../assets/email.svg"
import airPlane from '../assets/send.svg'
import ContactInformation from '../Components/contact-information'

import useInputValidation from '../hooks/useInpuValidation'






const useStyles=makeStyles(theme=>({
    callToActionBackground: {
        backgroundImage: `url(${background})`,
        paddingBottom:'10rem',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.down('md')]: {
            backgroundImage: `url(${mobileBackground})`,
            paddingBottom:0,
            backgroundPosition:'0% 70%'
        }
    },
    icon:{
        verticalAlign:'middle',
        marginRight:'0.5rem',
    },
    textField:{
        marginTop:'0.5rem',
        width:'245px',
        [theme.breakpoints.down('sm')]:{
            width:'350px'
        },
        [theme.breakpoints.down('xs')]:{
            width:'245px'
        }
    },
    sendMessage: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        heigh: 45,
        width: 175,
        marginTop:'2rem',
        '&:hover': {
          backgroundColor: theme.palette.secondary.light
        }
      },
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
        fontSize: '1.5rem',
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down('sm')]: {
            marginRight: 0
        }
    },
    callTextContainer: {
        marginLeft: '4rem',
        [theme.breakpoints.down('md')]: {
            marginLeft: 0,
            textAlign: 'center'
        }
    },
    dialog:{
        padding:'2rem 5rem',
        [theme.breakpoints.down('xs')]:{
            padding:'0rem 0 2rem 0'
        }
    },
    confirmTextField:{
        marginTop:'0.5rem',
        width:'350px',
        [theme.breakpoints.down('xs')]:{
            width:'245px'
        }
    }
}))
 





const ContactUs = () => {
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [phoneHelper,setPhoneHelper] = useState('')
    const [email,setEmail] = useState('')
    const [emailHelper,setEmailHelper] = useState('')
    const [message,setMessage] = useState('')

    const[open,setOpen] = useState(false)

    const classes=useStyles()
    const theme=useTheme()
    const matchMD = useMediaQuery(theme.breakpoints.down('md'))
    const matchSM = useMediaQuery(theme.breakpoints.down('sm'))
    const matchXS = useMediaQuery(theme.breakpoints.down('xs'))

    const[onChange]=useInputValidation(setPhone,setPhoneHelper,setEmail,setEmailHelper)

    

    return (  
        <Grid container >
            <Grid item container direction='column' alignItems='center' justify='center' md={4} lg={3} style={{padding:matchXS?'1rem 0':matchSM?'1.5rem 0':'0'}} >
                <Grid item container direction='column' alignItems={matchSM?'center':'flex-start'} style={{width:matchXS?'245px':matchSM?'350px':'245px'}} >
                    <Grid item>
                        <Typography variant="h2" style={{lineHeight:1}} >Contact Us</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" style={{color:theme.palette.common.blue}} >We're waiting</Typography>
                    </Grid>
                    <Grid item container alignItems='center'  style={{marginTop:'2rem'}}>
                        <Grid item>
                            <img src={phoneIcon} alt='phone icon' className={classes.icon}/>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" style={{color:theme.palette.common.blue}}>
                            <a href='tel:0000000000' style={{textDecoration:'none', color:theme.palette.common.blue}} >(000) 000-0000</a>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container alignItems='center' >
                        <Grid item >
                            <img src={emailIcon} alt='email icon' className={classes.icon} />
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" style={{color:theme.palette.common.blue}}>
                            <a href='mailto:example@example.com' style={{textDecoration:'none', color:theme.palette.common.blue}} >example@example.com</a>
                            </Typography>
                        </Grid>
                    </Grid>
                    <ContactInformation
                    name={name}
                    setName={setName}
                    phone={phone}
                    phoneHelper={phoneHelper}
                    email={email}
                    emailHelper={emailHelper}
                    message={message}
                    setMessage={setMessage}
                    onChange={onChange}
                    confirmTextField={classes.textField}
                    />
                    <Grid item container justify='center'>
                        <Button variant='contained'
                        color='secondary' 
                        onClick={()=>setOpen(true)} 
                        className={classes.sendMessage}
                        disabled={
                            name.length === 0 ||
                            message.length === 0 ||
                            phone.length === 0 ||
                            email.length === 0 ||
                            phoneHelper.length !==0 ||
                            emailHelper.length !==0 
                        }
                        >
                            <span style={{marginRight:'1rem'}}> Send Message </span>
                            <img src={airPlane} alt='air plane'/>
                        </Button>
                    </Grid>
                    <Dialog open={open} onClose={()=>{setOpen(false)}} style={{zIndex:'1302'}} fullScreen={matchXS}>
                        <DialogContent>
                            <Grid container direction='column' alignItems='center' className={classes.dialog}>
                              <Grid item>
                                <Typography variant="h2" align='center' style={{lineHeight:'2.4rem'}} >Confirm Message</Typography>
                              </Grid>
                                <ContactInformation
                                name={name}
                                setName={setName}
                                phone={phone}
                                phoneHelper={phoneHelper}
                                email={email}
                                emailHelper={emailHelper}
                                message={message}
                                setMessage={setMessage}
                                onChange={onChange}
                                confirmTextField={classes.confirmTextField}
                                />
                            <Grid item container alignItems='center' justify='center' >
                              <Grid item style={{marginTop:'2rem'}}>
                                <Button color='primary' onClick={()=>{setOpen(false)}}>Cancel</Button>
                              </Grid>
                              <Grid item >
                                <Button variant='contained'
                                color='secondary' 
                                onClick={
                                    ()=>{
                                        setOpen(false);
                                        setName('');
                                        setPhone('');
                                        setEmail('');
                                        setMessage('');
                                        setPhoneHelper('');
                                        setEmailHelper('')
                                    }} 
                                className={classes.sendMessage}
                                disabled={
                                    name.length === 0 ||
                                    message.length === 0 ||
                                    phone.length === 0 ||
                                    email.length === 0 ||
                                    phoneHelper.length !==0 ||
                                    emailHelper.length !==0 
                                }
                                >
                                    <span style={{marginRight:'1rem'}}> Send Message </span>
                                    <img src={airPlane} alt='air plane'/>
                                </Button>
                              </Grid>
                            </Grid>
                            </Grid>
                        </DialogContent>
                    </Dialog>
                </Grid>
            </Grid>
            <Grid item container  className={classes.callToActionBackground} style={{height:'46rem'}} md={8} lg={9} >



                <Grid item container direction={matchMD?'column':'row'} alignItems='center' justify={matchMD?'center':'flex-start'}  >
                    <Grid item>
                        <Grid container direction='column' className={classes.callTextContainer} >
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
                    <Grid item style={{marginTop:'8.5rem'}}>
                        <Button variant='contained' color='secondary' component={Link} to='/estimate' className={classes.estimateButton}>
                            Free Estimate
                        </Button>
                    </Grid>
                </Grid>



            </Grid>

        </Grid>

    )
}
 
export default ContactUs;