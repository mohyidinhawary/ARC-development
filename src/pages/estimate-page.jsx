import React, { useState } from 'react'
import { Grid, Typography, Button,IconButton, Dialog, DialogContent } from '@material-ui/core'
import { useTheme,makeStyles,useMediaQuery} from '@material-ui/core'
import {cloneDeep} from 'lodash'

import ContactInformation from '../Components/contact-information'

import Lottie from 'react-lottie'
import estimatAnimation from '../animations/estimateAnimation/data.json'

import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import backArrowDisabled from "../assets/backArrowDisabled.svg"
import forwardArrowDisabled from "../assets/forwardArrowDisabled.svg"
import check from '../assets/check.svg'
import falseCheck from '../assets/flase.png'
import airPlane from '../assets/send.svg'

import {defaultQuestions} from '../data/questionArray'
import QuestionsBlock from '../Components/questionsBlock'

import useInputValidation from '../hooks/useInpuValidation'
import CheckedList from '../Components/checkedList'




const useStyles= makeStyles(theme=>({
    pageHeader:{
      marginTop:'4rem',
      marginLeft:'4rem',
      [theme.breakpoints.down('md')]:{
        marginLeft:0,
        textAlign:'center'
      },
      [theme.breakpoints.down('xs')]:{
        marginTop:'1rem'
      }
    },
    animation:{
      marginRight:'10rem',
      marginTop:'12rem',
      [theme.breakpoints.down('md')]:{
        marginRight:0,
        marginTop:0,
        marginBottom:'3rem'
      }
    },
    questions:{
      margin:'8rem 0',
      paddingRight:'2rem',
      [theme.breakpoints.down('md')]:{
        margin:'50px 0',
        paddingRight:0
      }
    },
    getEstimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: '50px',
        width: '220px',
        marginTop:'2rem',
        '&:hover': {
          backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down('xs')]:{
          width: 150,
        }
      },
      specialText: {
        fontFamily: "Raleway",
        fontWeight: 700,
        color: theme.palette.common.orange,
        fontSize:'2rem'
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
      confirmTextField:{
        marginTop:'0.5rem',
        width:'350px',
        [theme.breakpoints.down('xs')]:{
            width:'245px'
        }
    }
      
}))

const checkoutList=[
  
  {title:'Platforms supported',id:1},
  {title:'Features supported',id:2},
  {title:'Custom features needed',id:3},
  {title:'Users numbers expected',id:4}
]
  


const Estimate = () => {
  const [questions,setQuestions] = useState(defaultQuestions)
  const[total,setTotal]=useState(0)
  const[service,setService]=useState('')
  const[optionsSelected,setOptionsSelected]=useState([])

  const [name,setName] = useState('')
  const [phone,setPhone] = useState('')
  const [phoneHelper,setPhoneHelper] = useState('')
  const [email,setEmail] = useState('')
  const [emailHelper,setEmailHelper] = useState('')
  const [message,setMessage] = useState('')

  const[open,setOpen] = useState(false)

  const[onChange]=useInputValidation(setPhone,setPhoneHelper,setEmail,setEmailHelper)

  const classes=useStyles()
  const theme=useTheme()
  const matchMD = useMediaQuery(theme.breakpoints.down('md'))
  const matchSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchXS = useMediaQuery(theme.breakpoints.down('xs'))

  const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: estimatAnimation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }

  const navigatePreviousQuestion = () =>{
    const newQuestions = cloneDeep(questions)
    const activeQuestion = newQuestions.filter(question=>(question.active===true))
    const activeQuestionIdx = activeQuestion[0].id - 1
    const previousQuestionIdx = activeQuestionIdx - 1

        newQuestions[activeQuestionIdx]= {...activeQuestion[0] , active:false}
        newQuestions[previousQuestionIdx]= {...newQuestions[previousQuestionIdx],active:true}

        setQuestions(newQuestions)
  }

  const previousButtonDisabled = () =>{
    const newQuestions = cloneDeep(questions)
    const activeQuestion = newQuestions.filter(question=>(question.active===true))
    if (activeQuestion[0].id - 1 === 0){
      return true
    }
    return false
  }

  const navigateNextQuestion = () =>{
    const newQuestions = cloneDeep(questions)
    const activeQuestion = newQuestions.filter(question=>(question.active===true))
    const activeQuestionIdx = activeQuestion[0].id - 1
    const nextQuestionIdx = activeQuestionIdx + 1
    if (activeQuestionIdx !== questions.length - 1){
        newQuestions[activeQuestionIdx]= {...activeQuestion[0] , active:false}
        newQuestions[nextQuestionIdx]= {...newQuestions[nextQuestionIdx],active:true}
        setQuestions(newQuestions)
    }
  }

  const nextButtonDisabled = () =>{
      const newQuestions = cloneDeep(questions)
      const activeQuestion = newQuestions.filter(question=>(question.active===true))
      if (activeQuestion[0].id - 1 === questions.length - 1){
        return true
      }
      return false
    }

  const getTotal = () =>{
    let selected = questions.map(question => question.options.filter(option=>option.selected))

    selected.length > 2 ?
    setOptionsSelected([
      selected[0],
      selected[1],
      [...selected[2],...selected[3]],
      selected[4],
      selected[5],
    ])
    :
    setOptionsSelected(selected)

    selected= selected.flat()
    console.log(optionsSelected)

    const cost = selected.reduce((acc,currentValue)=>{
      if(currentValue.title === "0-10" || currentValue.title === "10-100" || currentValue.title === "100+")
        return acc= acc * currentValue.cost
        return acc= acc + currentValue.cost
    },0)

    setTotal(cost)
  }

  const isQuestionsAnsweredAll= ()=>{

    if(optionsSelected.length > 2){
     if (optionsSelected[1].length > 0 &&
      optionsSelected[2].length > 0 &&
      optionsSelected[3].length > 0 &&
      optionsSelected[4].length > 0) 
        return true
          else
            return false
    } else if(optionsSelected.length === 2){ 
        if( optionsSelected[1].length > 0) 
          return true
            else
              return false
      } 
}

    return (
            <Grid container direction={matchMD?'column':'row'} justify='space-between' alignItems={matchMD?'center':'flex-start'}   >
              <Grid item container direction='column'  lg={5}>
                <Grid item  className={classes.pageHeader} >
                  <Typography variant="h2" >Estimate</Typography>
                </Grid>                
                <Grid item  className={classes.animation}>
                  <Lottie options={defaultOptions} height={matchMD?'60%':'100%'} width={matchXS?'300px':matchMD?'500px':'100%'} />
                </Grid>                
              </Grid>
              <Grid item container direction='column' 
              alignItems='center' lg={7}  className={classes.questions}>
                <Grid item >
                  {
                    questions.filter(question=>question.active===true).map(({id,active,...ques})=>(
                      <QuestionsBlock key={id} {...ques} questions={questions} setQuestions={setQuestions} setService={setService}  />
                    ))
                  }
                </Grid>
                <Grid item container justify='space-between' style={{width:matchXS?'70%':'50%',maxWidth:matchXS?300:450, marginTop:'3rem'}} >
                  <Grid item>
                  <IconButton disabled={previousButtonDisabled()} style={{backgroundColor:'white'}}  onClick={navigatePreviousQuestion}  >
                    <img alt='Back to services' src={previousButtonDisabled()? backArrowDisabled:backArrow}  />
                  </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton disabled={nextButtonDisabled()} style={{backgroundColor:'transparent'}} onClick={navigateNextQuestion} >
                        <img alt='Forward to iOS/Android app development' src={nextButtonDisabled() ? forwardArrowDisabled:forwardArrow}  />
                    </IconButton>
                  </Grid>
                </Grid>
                <Grid item>
                    <Button variant='contained'
                    onClick={()=>{getTotal();setOpen(true)}}
                    color='secondary' 
                    disabled={questions.length< 2}
                    className={classes.getEstimateButton}
                    >
                        <span> Get Estimate </span>
                    </Button>
                    <Dialog open={open} onClose={()=>{setOpen(false)}} maxWidth='md' fullScreen={matchXS} style={{zIndex:'1302'}} >
                      <DialogContent >
                      <Grid container direction='column' alignItems='center' className={classes.dialog} >
                        <Grid item>
                          <Typography variant="h2" align='center' style={{lineHeight:'2.4rem'}} >Estimate</Typography>
                        </Grid>
                        <Grid item container >
                          <Grid item container direction='column' md alignItems={matchMD?'center':'flex-start'} >
                              <Grid item container direction='column' className={classes.confirmTextField} >
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
                                <Grid item>
                                  <Typography variant="body1" style={{lineHeight:1.1}} paragraph>
                                    We can create this custome digital solutionfor an estimated
                                    <span className={classes.specialText}>${total.toFixed(2)}</span>
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Typography variant="body1" style={{lineHeight:1.1}}>
                                    Fill out your name, number, and email, place your request, and
                                    we’ll get back to you with details moving forward and a final
                                    price.
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item container direction='column' md alignItems={matchMD?'center':'flex-start'} >
                              <Grid item container direction='column' className={classes.confirmTextField}  style={{paddingTop:'3.2rem ', paddingLeft:matchSM?'0':'2rem'}} >
                                <Grid item container >
                                  <Grid item xs={1}>
                                    <img src={check} alt='checkmark' width='25'/>
                                  </Grid>
                                  <Grid item xs style={{marginLeft:'0.5rem'}}>
                                    <Typography variant="h6" style={{lineHeight:1}}>Service you are interested in</Typography>
                                    <ul>
                                      <li>
                                        <Typography variant="body1" style={{lineHeight:1.3}}>{service}</Typography>
                                      </li>
                                    </ul>
                                  </Grid>
                                </Grid>
                                  {
                                    optionsSelected.length > 2 ?
                                      checkoutList.map(({id,title})=>(
                                        <Grid item key= {id}>
                                          <CheckedList id={id} title={title}   optionsSelected={optionsSelected}/>
                                        </Grid>
                                      ))
                                      :
                                      optionsSelected.length === 2 ?
                                      <Grid item container >
                                        <Grid item>
                                          <img src={optionsSelected[1].length!==0?check:falseCheck} alt='checkmark' width='25'
                                          xs={1}/>
                                        </Grid>
                                        <Grid item xs style={{marginLeft:'0.5rem'}}>
                                          <Typography variant="h6" style={{lineHeight:1}}>Website type</Typography>
                                          <ul>
                                          {
                                            optionsSelected[1].length!==0?
                                            <li>
                                              <Typography variant="body1" style={{lineHeight:1.3}}>{optionsSelected[1][0].title}</Typography>
                                            </li>
                                            :
                                            ''
                                          }
                                          
                                          </ul>
                                        </Grid>
                                      </Grid>
                                      :
                                      ''
                                    }
                                    {
                                  !isQuestionsAnsweredAll()?
                                  <Grid item>
                                    <Typography variant="body1" align='center' color="error" style={{margin:'2rem 0'}}>Please answer all questions</Typography>
                                  </Grid>
                                  :
                                  ''}
                              </Grid>
                            </Grid>
                        </Grid>
                        
                        <Grid item container alignItems='center' justify='center' >
                          <Grid item style={{marginTop:'2rem' }}>
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
                                setEmailHelper('');
                                setQuestions(defaultQuestions)
                            }
                            } 
                            className={classes.sendMessage}
                            disabled={
                              name.length === 0 ||
                              message.length === 0 ||
                              phone.length === 0 ||
                              email.length === 0 ||
                              phoneHelper.length !==0 ||
                              emailHelper.length !==0 ||
                              !isQuestionsAnsweredAll()
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
            </Grid>
    )
}

export default Estimate