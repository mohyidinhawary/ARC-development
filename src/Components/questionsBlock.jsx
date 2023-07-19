import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import { useTheme,useMediaQuery} from '@material-ui/core'

import Option from './option'
import { cloneDeep } from 'lodash'
import { softwareQuestions, websiteQuestions } from '../data/questionArray'




const QuestionsBlock = ({title,options,subtitle, questions,setQuestions,setService}) => {
    const theme=useTheme()
    const matchSM = useMediaQuery(theme.breakpoints.down('sm'))
    const matchMD = useMediaQuery(theme.breakpoints.down('md'))

    const selectOption =(idx) =>{
        const newQuestions=cloneDeep(questions)
        const activeQuestion = newQuestions.filter(question=>(question.active===true))
        const previousSelected = activeQuestion[0].options.filter(option=>option.selected)
        const selectedOption = activeQuestion[0].options[idx]

        activeQuestion[0].options[idx].selected = ! selectedOption.selected

        if(activeQuestion[0].subtitle === 'Select one.' ){
                if(previousSelected.length>0){
                    previousSelected[0].selected=false
                }
        }



        switch (selectedOption.title){
            case 'Custom Software Development':
                setQuestions(softwareQuestions)
                setService(selectedOption.title)
                break

            case 'iOS/Android App Development':
                setQuestions(softwareQuestions)
                setService(selectedOption.title)
                break

            case 'Website Development':
                setQuestions(websiteQuestions)
                setService(selectedOption.title)
                break

            default:
                setQuestions(newQuestions)
                break
        }

    }
    

    return (
        <Grid container direction='column' alignItems='center'  >
          <Grid item >
            <Typography variant="h2" align='center' gutterBottom style={{fontSize:'1.8rem',lineHeight:'2rem'}} >{title}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" align='center' style={{marginBottom:matchMD?'2rem':'6rem'}} >{subtitle}</Typography>
          </Grid>
          <Grid item container direction={matchSM?'column':'row'} alignItems={matchSM?'center':'flex-start'}>
            
                {
                    options.map(({id,...option},idx)=>(
                        <Grid item lg key={id} 
                        component={Button} 
                        onClick={()=>{selectOption(idx)}}
                        style={{
                            backgroundColor:option.selected?theme.palette.secondary.main:'white',
                            borderRadius:0,
                            height:'360px',
                            width:'253px',
                            marginTop:option.title.includes('Development')?'29.6px':'0px',
                            textTransform:'none'
                        }} 
                        >
                            <Option  {...option} />
                        </Grid>
                    ))
                }
          </Grid>
        </Grid>
    )
}

export default QuestionsBlock