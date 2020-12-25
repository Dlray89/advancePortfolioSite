import {createMuiTheme} from '@material-ui/core'

//light colors here
const camel = '#b88b4a'
const lightWalnut = '#a27035'
const tan = '#ddca7d'

//dark colors
const rasinBlack = '#242331'
const cafeNoir = '#533e2d'
//Font-here
const font = 'Lustria serif'
const logoFont = 'Smokum, cursive;'

//font sizes
const logoSize = '18px'
const smallSize = '12px'
const medSize = '15px'
const largeSize = '18px'

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
            main: `${rasinBlack}`,
            
        },
        secondary: {
            main: `${tan}`,
        },
    
    },
    typography:{
        links:{
            fontFamily: `${font}`,
            color: lightWalnut,
            fontSize:medSize
        },
        logo:{
            fontFamily: `${logoFont}`,
            color: tan,
            fontSize:'20px'
        }
    }
    
})