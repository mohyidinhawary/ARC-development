import React from 'react'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'



const ProcessBlock = ({header,body,icon,iconName,mainColor,iconWidth,iconWidthSM='250px',iconHeight,containerHeight='60rem'}) => {

    const useStyles = makeStyles(theme => ({
        mainContainer:{
            backgroundColor:mainColor,
            position:'relative',
            height:containerHeight,
            paddingBottom:'10rem',
            paddingTop:'5rem',
            [theme.breakpoints.down('sm')]:{
                height:'auto',
                textAlign:'center'
            }
        },
        blockText:{
            marginLeft:'4rem',
            width:'20rem',
            [theme.breakpoints.down('sm')]:{
                width:'100%',
                marginLeft:'0.5rem',
                marginRight:'0.5rem'
            }
        },
        blockIcon:{
            position:'absolute',
            height:containerHeight,
            [theme.breakpoints.down('md')]:{
                right:'4rem'
            },
            [theme.breakpoints.down('sm')]:{
                position:'static',
                height:'250px',
                marginTop:'2rem'
            }
        }
    }))

    const theme = useTheme()
    const classes=useStyles()
    const matchMD = useMediaQuery(theme.breakpoints.down('md'))
    const matchSM = useMediaQuery(theme.breakpoints.down('sm'))


    

    return(
        <Grid container className={classes.mainContainer}  >
        <Grid item className={classes.blockText} >
            <Grid container direction='column'  >
                <Grid item>
                    <Typography variant='h4' gutterBottom style={{color:'black'}}>{header}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant='body1' style={{color:'white'}} >{body}</Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid item container alignItems='center' justify={matchSM?'center':matchMD?'flex-end':'center'} className={classes.blockIcon} >
            <img src={icon} alt={iconName} width={matchSM?iconWidthSM:iconWidth}  height={iconHeight} />
        </Grid>
    </Grid>
    )
}
export default ProcessBlock