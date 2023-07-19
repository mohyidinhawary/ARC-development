import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue ='#0B72B9'
const arcOrange = '#FFBA60'
const arcGrey = '#868686'

const theme = createMuiTheme({
    palette: {
        common: {
            blue: arcBlue,
            orange: arcOrange
        },
        primary: {
            main: arcBlue
        },
        secondary: {
            main: arcOrange
        }
    },
    typography:{
        tab:{
            fontFamily:'raleway',
            fontSize:'1rem',
            fontWeight:'700',
            textTransform:'none',
        },
        estimate:{
            fontFamily:'pacifico',
            fontSize:'1rem',
            textTransform:'none',
            color:'white',
        },
        h2:{
            color:arcBlue,
            fontFamily:'raleway',
            fontSize:'2.5em',
            fontWeight:'700',
            lineHeight:'1.5em'
        },
        h3:{
            fontFamily:'pacifico',
            fontSize:'2.5rem',
            color:arcBlue
        },
        h4:{
            color:arcBlue,
            fontFamily:'raleway',
            fontSize:'1.75rem',
            fontWeight:900
        },
        h6:{
            color:arcBlue,
            fontFamily:'raleway',
            fontSize:'1.5rem',
            fontWeight:500
        },
        subtitle1:{
            color:arcGrey,
            fontWeight:'bold'
        },
        subtitle2:{
            color:'white',
            fontSize:'1.25rem',
            fontWeight:300
        },
        body1:{
            fontSize:'1.25rem',
            fontWeight:300,
            color:arcGrey
        },
        caption: {
            fontSize: "1rem",
            fontWeight: 300,
            color: arcGrey
          },
        learnButton:{
            borderRadius: 50,
            borderColor: arcBlue,
            color: arcBlue,
            fontFamily: 'roboto',
            fontWeight: 'bold',
            textTransform: 'none',
            borderWidth: 3

        }
    },
    overrides:{
        MuiInputLabel:{
            root:{
                color:arcBlue,
                fontSize:'1.2rem'
            }
        },
        MuiInput:{
            root:{
                color:'#686868'
            },
            underline:{
                "&:before":{
                    borderBottom:`1px solid ${arcBlue}`
                },
                "&:hover:not($disabled):not($focused):not($error):before":{
                    borderBottom:`1px solid ${arcBlue}`
                }
            }
        },
        MuiOutlinedInput:{
            root: {
                color:'#686868',
                "& $notchedOutline": {
                  borderColor: arcBlue
                },
                "&:hover $notchedOutline": {
                  borderColor: arcBlue
                },
                "&$focused $notchedOutline": {
                  borderColor: arcBlue
                }
            }
        }
    }
})

export default theme