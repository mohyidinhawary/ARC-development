import React from 'react'

import Grid from '@material-ui/core/Grid'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Typography } from '@material-ui/core'

import ServiceBlockV2 from '../Components/service-block-v2'
import customeSoftwareIcon from '../assets/Custom Software Icon.svg'
import mobileAppsIcon from '../assets/mobileIcon.svg'
import websiteIcon from '../assets/websiteIcon.svg'


const useStyles = makeStyles(theme => ({
    serviceBlockContainer: {
        marginTop: '15rem',
        [theme.breakpoints.down('sm')]: {
            padding: '1rem',
            marginTop: '4rem'
        }
    },
    specialText: {
        fontFamily: 'pacifico',
        color: theme.palette.common.orange
    },
    servicesText:{
        marginTop:'3rem',
        marginLeft:'4rem',
        [theme.breakpoints.down('sm')]:{
            textAlign:'center',
            marginTop:'2rem',
            marginLeft:0,
        }

    }
}))


const ServicesPage = () => {
    const classes = useStyles()
    const theme = useTheme()
    const matchSM = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Grid container direction='column'>
            <Grid item><Typography variant='h2' className={classes.servicesText} >Services</Typography></Grid>
            <Grid item className={classes.serviceBlockContainer} style={{ marginRight: matchSM ? 0 : '4rem',marginTop:matchSM?'5rem':'8rem' }}>{/*-----Custom Software Block-----*/}
                <ServiceBlockV2
                serviceIcon={customeSoftwareIcon}
                justifyType='flex-end'
                serviceNameText='Custome Software Development'
                subtitle1='Save Energy. Save Time. Save Money'
                subtitle2={['Complete digital solutions, from investigation to ', <span key='asdas' className={classes.specialText}>celebration</span>]}
                serviceRoute='/customesoftware'
                />
            </Grid>
            <Grid item className={classes.serviceBlockContainer} style={{ marginLeft: matchSM ? 0 : '4rem' }}>{/*-----iOS/Android Block-----*/}
                <ServiceBlockV2
                serviceIcon={mobileAppsIcon}
                justifyType='flex-start'
                serviceNameText='iOS/Android App Development'
                subtitle1='Extend Functionality. Extend Access. Increase Engagment'
                subtitle2={["Integrate your web experiance or create a standalone app ", matchSM ? null : <br key='easdaf' />, "with either mobile platform"]}
                serviceRoute='/mobileapps'
                />
            </Grid>
            <Grid item className={classes.serviceBlockContainer} style={{ marginRight: matchSM ? 0 : '4rem',marginBottom:matchSM? '4rem': '8rem' }}>{/*-----Website Block-----*/}
                <ServiceBlockV2
                serviceIcon={websiteIcon}
                justifyType='flex-end'
                serviceNameText='Website Development'
                subtitle1='Reach More. Discover More. Sell More'
                subtitle2='Optimized for Search Engines. built for speed '
                serviceRoute='/websites'
                />
            </Grid>
        </Grid>
    )
}

export default ServicesPage