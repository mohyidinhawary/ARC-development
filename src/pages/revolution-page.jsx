import React from 'react'
import Lottie from "react-lottie"

import Grid from '@material-ui/core/Grid'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import {  Typography } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import vision from "../assets/vision.svg";
import consultation from "../assets/consultationIcon.svg";
import mockup from "../assets/mockupIcon.svg";
import review from "../assets/reviewIcon.svg";
import design from "../assets/designIcon.svg";
import build from "../assets/buildIcon.svg";
import launch from "../assets/launchIcon.svg";
import maintain from "../assets/maintainIcon.svg";
import iterate from "../assets/iterateIcon.svg";

import technologyAnimation from "../animations/technologyAnimation/data.json"

import ProcessBlock from '../Components/process-block'
import CallToAction from '../Components/call-to-action'



const useStyles = makeStyles(theme=>({
    mainContainer:{
        padding:'4rem 4rem 14rem 4rem',
        [theme.breakpoints.down('sm')]:{
            padding:'2rem 3rem 8rem 3rem'
        },
        [theme.breakpoints.down('xs')]:{
            padding:'1rem 0.5rem 6rem 0.5rem'
        }
    },
    revolutionBlock:{
        marginTop:'14rem',
        textAlign:'center',
        [theme.breakpoints.down('sm')]:{
            marginTop:'6rem'
        }
    },
    revolutionBlockText:{
        display:'inline',
        textAlign:'right',
        [theme.breakpoints.down('sm')]:{
            textAlign:'center',
            marginTop:'1rem',
            display:'block'
        }
    },
    processesHeader:{
        paddingBottom:'5rem',
        paddingTop:'1rem',
        borderBottom:`3px solid #77b3dd`,
        backgroundColor:'#b6d8f0'
    }
    
}))

const RevolutionPage = () =>{
    const classes = useStyles()
    const theme = useTheme()
    const matchSM=useMediaQuery(theme.breakpoints.down('sm'))
    const matchXS=useMediaQuery(theme.breakpoints.down('xs'))



    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: technologyAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return(
        <React.Fragment>
            <Grid container direction='column' className={classes.mainContainer}>
                <Grid item  style={{textAlign:'center'}}>
                    <Typography variant='h3'>The Revolution</Typography>
                </Grid>
                <Grid item className={classes.revolutionBlock} >
                    <img src={vision} alt='mountain through binoculars' width={matchXS?'330px': matchSM?'450px':'600px'} style={{float:matchSM?'none':'left'}} />
                    <Grid container direction='column' className={classes.revolutionBlockText}>
                        <Grid item md>
                            <Typography variant='h4' >Vision</Typography>
                        </Grid>
                        <Grid item md>
                            <Typography variant='body1'>
                                The rise of computers, and subsequently the Internet, has
                                completely altered every aspect of human life. This has increased
                                our comfort, broadened our connections, and reshaped how we view
                                the world.
                                <br />
                                <br />
                                What once was confined to huge rooms and teams of engineers now
                                resides in every single one of our hands. Harnessing this
                                unlimited potential by using it to solve problems and better lives
                                is at the heart of everything we do.
                                <br />
                                <br />
                                We want to help businesses capitalize on the latest and greatest
                                technology. The best way to predict the future is to be the one
                                building it, and we want to help guide the world into this next
                                chapter of technological expansion, exploration, and innovation.
                                <br />
                                <br />
                                By holding ourselves to rigorous standards and pristine quality,
                                we can ensure you have the absolute best tools necessary to thrive
                                in this new frontier.   
                                <br />
                                <br />
                                We see a future where every individual has personalized software
                                custom tailored to their lifestyle, culture, and interests,
                                helping them overcome life’s obstacles. Each project is a step
                                towards that goal.
                            </Typography>
                        </Grid>
                        </Grid>
                </Grid>
                <Grid item className={classes.revolutionBlock}>
                    <Lottie options={defaultOptions}  width={matchXS?'330px': matchSM?'450px':'600px'}  style={{float:matchSM?'none':'right'}} />
                    <Grid container direction='column' className={classes.revolutionBlockText} style={{textAlign:matchSM?'center':'left'}} >
                        <Grid item md>
                            <Typography variant='h4' >Technology</Typography>
                        </Grid>
                        <Grid item md>
                            <Typography variant='body1'>
                                In 2013, Facebook invented a new way of building websites. This
                                new system, React.js, completely revolutionizes the process and
                                practice of website development.
                                <br />
                                <br />
                                Instead of chaining together long individual pages, like
                                traditional websites, React websites are built with little chunks
                                of code called components. These components are faster, easier to
                                maintain, and are easily reused and customized, each serving a
                                singular purpose.
                                <br />
                                <br />
                                Two years later they shocked the world by releasing a similar
                                system, React Native, for producing iOS and Android apps. Instead
                                of having to master two completely separate development platforms,
                                you can leverage the knowledge you already possessed from building
                                websites and reapply it directly! This was a huge leap forward.
                                <br />
                                <br />
                                This technology is now being used by companies like AirBnB,
                                Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when
                                Facebook purchased Instagram large portions of it were even
                                rebuilt using React.  
                                <br />
                                <br />
                                Developers have since built on top of these systems by automating
                                project setup and deployment, allowing creators to focus as much
                                as possible on their work itself.
                                <br />
                                <br />
                                These technical advancements translate into savings by
                                significantly reducing the workload and streamlining the workflow
                                for developing new pieces of software, while also lowering the
                                barrier to entry for mobile app development.
                                <br />
                                <br />
                                This puts personalization in your pocket — faster, better, and
                                more affordable than ever before.
                            </Typography>
                        </Grid>
                        </Grid>
                </Grid>           
            </Grid>

            <Grid container direction='column'>
                <Grid item className={classes.processesHeader} >
                    <Typography variant='h4'  align='center'>Process</Typography>
                </Grid>
                <Grid item>
                    <ProcessBlock
                    header='Consultation'
                    body={[
                        `Our process begins the moment you realize you need a piece of
                        technology for your business. Whether you already have an idea for
                        where to start and what to do, or if you just know you want to
                        step things up, our initial consultation will help you examine
                        your business holistically to find the best solutions.`,
                        <br  key='id1' />,
                        <br  key='id2' />,
                        `Detailed notes will be taken on your requirements and constraints,
                        while taking care to identify other potential areas for
                        consideration.`,
                        <br  key='id3' />,
                        <br  key='id4' />,
                        `Cutting-edge advancements in machine learning like object
                        detection and natural language processing allow computers to do
                        things previously unimaginable, and our expertise and intuition
                        will help usher you into this new future of possibilities.`
                    ]}
                    icon={consultation}
                    iconName='handshake'
                    mainColor='#B3B3B3'
                    iconWidth='500px'
                    iconWidthSM='350px'
                    />
                </Grid>
                
                <Grid item>
                    <ProcessBlock
                    header='Mockup'
                    body={[
                        `After we settle on the best path forward and decide on a solution
                        to pursue, details like the cost and timeline will be finalized.`,
                        <br  key='id5' />,
                        <br  key='id6' />,
                        `Then it’s time for us to start on your minimum viable product.
                        That’s just a fancy term for a mockup, which doesn’t include
                        colors, images, or any other polished design elements, but
                        captures the essential layout structure and functionality.`,
                        <br  key='id7' />,
                        <br  key='id8' />,
                        `This helps us understand and refine the solution itself before
                        getting distracted by specifics and looks.`
                    ]}
                    icon={mockup}
                    iconName='basic website design outline'
                    mainColor='#FF7373'
                    iconWidth='500px'
                    iconWidthSM='350px'
                    />
                </Grid>
                <Grid item>
                    <ProcessBlock
                    header='Review'
                    body={[
                        `Before moving any farther we come back to you with our progress.
                        This gives you the freedom to discuss any changes you may want or
                        any ideas you may have come up with before any heavy lifting has
                        been done.`,
                        <br  key='id9' />,
                        <br  key='id10' />,
                        `We give you an interactive demonstration of the mockups,
                        thoroughly explaining the thought process that went into each
                        screen and every anticipated feature.`,
                        <br  key='id11' />,
                        <br  key='id12' />,
                        `Once you’re completely satisfied with the vision for our solution
                        we get down to the nitty gritty, fine-details of design.`
                    ]}
                    icon={review}
                    iconName='magnifying glass'
                    mainColor='#39B54A'
                    iconWidth='400px'
                    iconWidthSM='300px'
                    />
                </Grid>
                <Grid item>
                    <ProcessBlock
                    header='Design'
                    body={[
                        `Using the mockups and notes taken during the consultation as
                        guides, we will start ironing out what the final product will look
                        like. This also involves using any brand material like fonts,
                        colors, and logos to extend the experience you’re already familiar
                        with.`,
                        <br  key='id13' />,
                        <br  key='id14' />,
                        `No aspect is superfluous, and care will be taken with every
                        decision.`
                    ]}
                    icon={design}
                    iconName='paintbrush leaving stroke of paint'
                    mainColor='#A67C52'
                    iconWidth='800px'
                    iconWidthSM='330px'
                    />
                </Grid>
                <Grid item>
                    <ProcessBlock
                    header='Review'
                    body={[
                        `A second round of review is essential to our goal of creating
                        exactly what you want, exactly how you want it.`,
                        <br  key='id15' />,
                        <br  key='id16' />,
                        `This time we’ll be going over the finalized designs in another
                        fully interactive demonstration. Again this gives you an
                        opportunity to tweak things and make sure we get everything right
                        the first time.`
                    ]}
                    icon={review}
                    iconName='magnifying glass'
                    mainColor='#39B54A'
                    iconWidth='400px'
                    iconWidthSM='300px'
                    />
                </Grid>
                <Grid item>
                    <ProcessBlock
                    header='Build'
                    body={[
                        `Here’s where we get down to business.`,
                        <br  key='id17' />,
                        <br  key='id18' />,
                        `Engineering begins after your approval on the final designs. We
                        start by scaffolding out the project on a high level, prioritizing
                        some areas over others.`,
                        <br  key='id19' />,
                        <br  key='id20' />,
                        `Each area is then developed in order of importance until ready to
                        be connected to the next piece.`,
                        <br  key='id21' />,
                        <br  key='id22' />,
                        `Typically the backend, behind the scenes operations are completed
                        first. Once all the services are in place we can then create the
                        front end, user side of things.`,
                        <br  key='id23' />,
                        <br  key='id24' />,
                        `Finishing the application doesn’t mean we’re done though, because
                        we use extensive testing to guarantee compatibility with all
                        intended devices.`,
                        <br  key='id25' />,
                        <br  key='id26' />,
                        `Only after our rigorous examinations will we accept a product as
                        finished, then pushing it through the production pipeline. This
                        produces an optimized, compressed, consumer version of the code
                        and assets ready for deployment.`
                    ]}
                    icon={build}
                    iconName='building construction site'
                    mainColor='#FBB03B'
                    iconWidth='500px'
                    iconWidthSM='350px'
                    containerHeight='80rem'
                    />
                </Grid>
                <Grid item>
                    <ProcessBlock
                    header='Launch'
                    body={[
                        `The moment we’ve all been waiting for.`,
                        <br  key='id27' />,
                        <br  key='id28' />,
                        `When construction comes to a close you’re the first one to know.
                        We’ll give our final demonstration to show off your shiny new
                        software in the wild so you know exactly how it will look to your
                        users.`,
                        <br  key='id29' />,
                        <br  key='id30' />,
                        ` When you say the word, we press the button and launch your project
                        out to the public. We’re there to ensure everything goes to plan
                        so you can start reaping the rewards of your technological
                        investment immediately.`
                    ]}
                    icon={launch}
                    iconName='rocket'
                    mainColor='#C1272D'
                    iconWidth='100px'
                    iconWidthSM='65px'
                    />
                </Grid>
                <Grid item>
                    <ProcessBlock
                    header='Maintain'
                    body={[
                        `Our work doesn’t end there.`,
                        <br  key='id31' />,
                        <br  key='id32' />,
                        `After a successful launch we keep in close contact to listen to
                        feedback and hear how the project is being received.`,
                        <br  key='id33' />,
                        <br  key='id34' />,
                        `From there on out we make sure your application is kept up to date
                        and taking advantage of the best features and practices available.
                        When new developments arise or new techniques are discovered in
                        future projects, we will implement those advancements in your
                        project as part of our routine maintenance.`
                    ]}
                    icon={maintain}
                    iconName='wrench tightening bolts'
                    mainColor='#8E45CE'
                    iconWidth='300px'
                    iconWidthSM='160px'
                    />
                </Grid>
                <Grid item>
                    <ProcessBlock
                    header='Iterate'
                    body={[
                        `The cycle repeats whenever you come up with a new idea for
                        extending your current project, or come up with a brand new system
                        entirely.`,
                        <br  key='id35' />,
                        <br  key='id36' />,
                        `By planning for future features and changes we can build and
                        evolve your application over time. As new use cases and customer
                        needs develop we can respond with continuous integration of new
                        content.`,
                        <br  key='id37' />,
                        <br  key='id38' />,
                        `Our iterative process will keep you current and competitive,
                        allowing you to quickly implement changes instead of waiting
                        months for a single update.`
                    ]}
                    icon={iterate}
                    iconName='falling dominoes'
                    mainColor='#29ABE2'
                    iconWidth='400px'
                    iconWidthSM='320px'
                    />
                </Grid>
                    <CallToAction/>
            </Grid>
        </React.Fragment>    
    )
}

export default RevolutionPage