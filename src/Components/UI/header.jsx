import React, { useEffect, useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import {makeStyles} from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button'
import {Link, useLocation} from 'react-router-dom'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {useTheme} from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


import logo from '../../assets/logo.svg'


const useStyles = makeStyles(theme => ({
    appbar:{
        zIndex:theme.zIndex.modal + 1
    },
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom:'3rem',
        [theme.breakpoints.down('md')]:{
            marginBottom:'2rem'
        },
        [theme.breakpoints.down('xs')]:{
            marginBottom:'1.5rem'
        }
    },
    logo:{
        height:'7rem',
        [theme.breakpoints.down('md')]:{
            height:'6rem'
        },
        [theme.breakpoints.down('xs')]:{
            height:'5rem'
        }
    },
    tabs:{
        marginLeft:'auto'
    },
    tab:{
        ...theme.typography.tab,
        minWidth:10,
        marginLeft:'25px'
    },
    estimateButton:{
        ...theme.typography.estimate,
        borderRadius:'50px',
        marginLeft:'50px',
        marginRight:'25px',
        height:'45px',
        '&:hover':{
            backgroundColor:theme.palette.secondary.dark
        }
    },
    logoContainer:{
        padding:0,
        '&:hover':{
            backgroundColor:'transparent'
        }
    },
    menu:{
        backgroundColor:theme.palette.common.blue,
        borderRadius:0
    },
    menuItem:{
        ...theme.typography.tab,
        color:'white',
        opacity:0.7,
        '&:hover':{
            opacity:1
        }
    },
    drawerIconContainer:{
        marginLeft:'auto',
        '&:hover':{
            backgroundColor:'transparent'
        }
    },
    drawerIcon:{
        height:'50px',
        width:'50px'
    },
    drawer:{
        backgroundColor:theme.palette.common.blue
    },
    drawerItem:{
        ...theme.typography.tab,
        color:'white',
        opacity:0.7
    },
    drawerItemEstimate:{
        backgroundColor:theme.palette.common.orange
    },
    drawerItemSelected:{
        opacity:1
    }
}))

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }


  const tapLocation = {
    '/':0,
    '/services':1,
    '/customesoftware':1, 
    '/mobileapps':1, 
    '/websites':1,
    '/revolution':2,
    '/about':3,
    '/contact':4,
    '/estimate':5
}

const menuLocation ={
    '/services':0,
    '/customesoftware':1, 
    '/mobileapps':2, 
    '/websites':3,
}



const Header = () => {

    const classes = useStyles()
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

    const[openDrawer,setOpenDrawer] = useState(false)
    const[value,setValue]=useState(0)
    const[anchorEl,setAnchorEl]=useState(null)
    const[openMenu,setOpenMenu] =useState(false)
    const[selectedIdx,setSelectedIdx] = useState(0)


    const menuOption=[
        {name:'Services' ,link:'/services' },
        {name:'Costume Software Development' ,link:'/customesoftware' },
        {name:'iOS/Android App Development' ,link:'/mobileapps' },
        {name:'Website Development' ,link:'/websites' }
    ]


    const routes =[
        {name:'Home' ,link:'/' },
        {name:'Services' ,link:'/services', areaOwns: anchorEl ? 'simple-menu' : undefined ,areaHasPopup:true, mouseOver:event => handleClick(event) },
        {name:'The Revolution' ,link:'/revolution' },
        {name:'About Us' ,link:'/about' },
        {name:'Contact Us' ,link:'/contact' }
    ]

    

    const handleChange = (event, newValue) =>{
        setValue(newValue)
    }

    const handleClick = event => {
        setAnchorEl(event.currentTarget)
        setOpenMenu(true)
    }

    const handleClose = ()=> {
        setAnchorEl(null)
        setOpenMenu(false)
    }

    const handleMenuItemClick= (event,i) => {
        setSelectedIdx(i)
    }

    const currentLocation=useLocation().pathname
    useEffect(()=> {            
            setValue(tapLocation[currentLocation])  
            setSelectedIdx(menuLocation[currentLocation]) 
        
    },[value,currentLocation])

     const tabs = (
         <React.Fragment>
            <Tabs value={value} onChange={handleChange} indicatorColor='primary' className={classes.tabs}>
                {
                    routes.map((route,i)=>(
                        <Tab
                        key={i}
                        label={route.name}
                        component={Link} to={route.link}
                        className={classes.tab}
                        aria-owns={route.areaOwns}
                        aria-haspopup={route.areaHasPopup}
                        onMouseOver={route.mouseOver} />
                    ))
                }   
            </Tabs>
            <Button variant='contained' color='secondary' component={Link} to='/estimate' className={classes.estimateButton}>
                Free Estimate
            </Button>
            <Menu id='simple-menu'
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleClose}
            MenuListProps={{onMouseLeave:handleClose}}
            classes={{paper:classes.menu}}
            elevation={0}
            keepMounted
            style={{zIndex:1302}}>
                {
                    menuOption.map((option,i) => (
                        <MenuItem key={i} component={Link} to={option.link} classes={{root:classes.menuItem}}
                        onClick={(event)=> {handleMenuItemClick(event,i);handleClose();setValue(1)}}
                        selected={i===selectedIdx && value===1}
                        >{option.name}</MenuItem>
                    ))  
                }
            </Menu>
         </React.Fragment>
     )
     
    const drawer =(
        <React.Fragment>
            <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS}
            open={openDrawer}
            onClose={()=> setOpenDrawer(false)}
            onOpen={()=> setOpenDrawer(true)}
            anchor='right' 
            classes={{paper:classes.drawer}}
            >
            <div className={classes.toolbarMargin}  />
                <List disablePadding>
                    {
                        [...routes, {name:'Free Estimate' ,link:'/estimate', estimate:classes.drawerItemEstimate }].map((route,i)=>(
                            <ListItem
                            key={i}
                            button divider 
                            component={Link} to={route.link}
                            onClick={()=>{setOpenDrawer(false)}}
                            selected={value===i}
                            className={route.estimate}>
                                <ListItemText
                                className={ value===i ? `${classes.drawerItemSelected} ${classes.drawerItem}` :classes.drawerItem } 
                                disableTypography>
                                    {route.name}
                                </ListItemText>
                            </ListItem>
                        ))
                    }    
                </List>  
            </SwipeableDrawer>
            <IconButton onClick={()=>{setOpenDrawer(!openDrawer)}}  className={classes.drawerIconContainer} disableRipple>
                <MenuIcon className={classes.drawerIcon} />
            </IconButton>
        </React.Fragment>
    )
        
    return(
        <React.Fragment>
            <ElevationScroll>
                    <AppBar position='fixed' className={classes.appbar}>
                        <Toolbar disableGutters>
                            <Button disableRipple className={classes.logoContainer} component={Link} to='/' >
                                <img className={classes.logo} alt='logo' src={logo}/>
                            </Button>
                                {matches? drawer : tabs}
                            </Toolbar>
                    </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    )
}
export default Header