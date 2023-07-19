import React from 'react'
import {Link} from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {useTheme , makeStyles} from '@material-ui/core/styles'

import ButtonArrow from './ButtonArrow'

const useStyles = makeStyles(theme => ({
    icon: {
        marginLeft: '2rem',
        [theme.breakpoints.down('sm')]: {
          marginLeft: 0
        }
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: '0.7rem',
        padding: 7,
        height: 35
    }
}))

const ServiceBlock = ({serviceIcon,justifyType,serviceNameText,subtitle1,subtitle2,serviceRoute}) => {
    const theme = useTheme()
    const classes=useStyles()
    const matchSM = useMediaQuery(theme.breakpoints.down('sm'))
    return(
    <Grid container justify={`${matchSM ? 'center' : justifyType}`} spacing={matchSM ? 4 : 0} >
          <Grid item style={{ textAlign: matchSM ? 'center' : undefined }}>
            <Typography variant='h4'>{serviceNameText}</Typography>
            <Typography variant='subtitle1' style={{ marginBottom: '1rem' }}>{subtitle1}</Typography>
            <Typography variant='subtitle1'>{subtitle2}</Typography>
            <Button variant='outlined' component={Link} to={serviceRoute} className={classes.learnButton}>
              <span style={{ marginRight: 8 }}>Learn More</span>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
            </Button>
          </Grid>
          <Grid item className={classes.icon} >
            <img alt='mobile app Icon' src={serviceIcon} />
          </Grid>
        </Grid>
    )
}
export default ServiceBlock