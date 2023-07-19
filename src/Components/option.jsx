import React from 'react'
import { Grid, Typography } from '@material-ui/core'



const Option = ({title,subtitle,icon,iconAlt}) => {

    return (
        <Grid container direction='column'  >
          <Grid item>
            <Typography variant="h6" style={{lineHeight:'2rem',height:'64px'}} >{title}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" style={{height:subtitle?'60px':'0px'}} >{subtitle}</Typography>
          </Grid>
          <Grid item style={{marginTop:'1rem'}} >
            <img src={icon} alt={iconAlt} width='200' height='200' />
          </Grid>
        </Grid>
    )
}

export default Option;