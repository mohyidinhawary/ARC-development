import React from 'react'
import Lottie from "react-lottie"

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import {useTheme, makeStyles} from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'



const useStyles = makeStyles(theme=>({
    textContainer:{
        width:'25rem',
        [theme.breakpoints.down(1530)]:{
            marginRight:'4rem',
           
        },
        [theme.breakpoints.down('sm')]:{
            width:'100%',
            textAlign:'center',
            marginRight:0
        }
    }
}))

const TextAnimationBlock = ({ header, body, animation, animationStyles }) => {
    const theme=useTheme()
    const matchSM= useMediaQuery(theme.breakpoints.down('sm'))
    const classes=useStyles()

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }

    return (
        <Grid container  justify={matchSM?'center':'flex-start'} >
            <Grid item style={{marginBottom:matchSM?'1rem' : 0}} >
                <Grid container direction='column' className={classes.textContainer} >
                    <Grid item>
                        <Typography variant='h4'>{header}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='body1' >{body}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item style={{marginTop:matchSM? 0 :'2rem'}}>
                <Lottie options={defaultOptions} style={animationStyles} 
                />
            </Grid>
        </Grid>
    )
}
export default TextAnimationBlock