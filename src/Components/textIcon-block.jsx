import React from 'react'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const TextIconBlock = ({text,icon,iconName,iconHeight,iconWidth,textStyle})=> {
    return(
        <Grid container direction='column' style={{textAlign:'center'}}>
            <Grid item>
                <Typography variant='h4' style={textStyle} gutterBottom>{text}</Typography>
            </Grid>        
            <Grid item>
                <img alt={iconName} src={icon} width={iconWidth} height={iconHeight} />
            </Grid>        
        </Grid>
    )
}

export default TextIconBlock