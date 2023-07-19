import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import check from '../assets/check.svg'
import falseCheck from '../assets/flase.png'


const CheckedList = ({optionsSelected,id,title}) => {
    return (
        <Grid container >
            <Grid item>
                <img src={optionsSelected[id].length!==0?check:falseCheck} alt='checkmark' width='25' xs={1}/>
            </Grid>
            <Grid item xs style={{marginLeft:'0.5rem'}}>
                <Typography variant="h6" style={{lineHeight:1}}>{title}</Typography>
                <ul>
                    {
                    optionsSelected.length >  2?
                        optionsSelected[id].map((platform,idx)=>(
                        <li key={idx}>
                            <Typography variant="body1" style={{lineHeight:1.3}}>{platform.title}</Typography>
                        </li>
                        ))
                        :
                        ''
                    }
                </ul>
            </Grid>
        </Grid>
    )
}

export default CheckedList;