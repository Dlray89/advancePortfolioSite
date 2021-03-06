import {createMuiTheme} from '@material-ui/core'

//light colors here
const camel = '#b88b4a'
const lightWalnut = '#a27035'
const tan = '#ddca7d'

//dark colors
const rasinBlack = '#242331'
const cafeNoir = '#533e2d'
//Font-here
// const font = 'Lustria serif'
// const logoFont = 'Smokum, cursive'

//font sizes

const medSize = '15px'

export default createMuiTheme({
    palette:{
        common:{
            black: rasinBlack,
            darkBrown: cafeNoir,
            lightBrown: tan,
            medBrown: lightWalnut,
            medBrownTwo: camel
        },
        primary:{
            main: rasinBlack,
            
        },
        secondary: {
            main: tan,
        },
    
    },
    typography:{
        links:{
            fontFamily: 'Lustria, serif',
            color: lightWalnut,
            fontSize:medSize
        },
        h2:{
            fontSize:'2em',
            fontFamily: 'Smokum cursive',
        },
        h3:{
            fontSize:'1.5em',
            textAlign:'center'
        },
        h5:{
            fontFamily: 'Smokum cursive',
            fontSize:'2em',
            color:tan,
            textAlign:'center'
        }   ,   
        body1:{
            fontSize:'0.85em'
        },
        body2:{
            fontFamily: 'Smokum cursive',
            fontSize:'1.4em',
            color: tan
        },
        subtitle1:{
            fontSize:'0.85em',
            textAlign:'center',
            fontFamily: 'Smokum cursive',
        },
        subtitle2:{
            fontSize:'0.85em',
            textAlign:'start'
        }
        
    },
    overrides:{
        MuiInputLabel:{
            root:{
                color: lightWalnut,
                fontSize:'1rem',
                textAlign:'center',
            }
        },
        MuiInput:{
            underline: {
                '&:before':{
                    borderBottom: `2px solid ${camel}`
                },
                '&:hover:not($disable):not($focused):not($error):before':{
                    borderBottom: `2px solid ${camel}`

                }
            }
        },
        MuiAppBar:{
            root:{
                
            }
        }
        
    }
    
})