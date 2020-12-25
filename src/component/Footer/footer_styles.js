import { makeStyles } from '@material-ui/core'
import pattern from '../../asset/patterns/leftPattern.svg'


export const useStyles = makeStyles((theme) => ({
    footer:{
        background: theme.palette.common.black,
        marginTop:'10em',
        color: theme.palette.common.lightBrown,
        height:'14.53em',
        backgroundImage:'url('+ pattern+ ')',
        backgroundRepeat:'no-repeat',
        backgroundPositionX:'0em',
        backgroundSize:'27em',
        [theme.breakpoints.down('sm')]:{
        }
    },
   
    footerLogo:{
        height: '4em',
        marginTop:'0.49em',
        [theme.breakpoints.down('sm')]:{
            height:'6em',
            width:'15em'
        }
    },
    socialMediaContainer:{
        width:'30%',
        [theme.breakpoints.down('sm')]:{
            margin: '0 auto',
            width:'60%',
            marginTop:'1em'
        },
        [theme.breakpoints.down('xs')]:{
            width:'70%'
        }
        
    },
    logoContainer:{
        height:'4.25em',
        [theme.breakpoints.down('sm')]:{
            textAlign: 'center',
            height:'7em',
            padding: 0
        }
    },
    icons:{
        height: '3em',
        [theme.breakpoints.down('sm')]:{
            height:'3em'
        }
    },
    logoandSocialContainer:{
        marginBottom:'4em',
        [theme.breakpoints.down('sm')]:{
            marginTop:'6.4em'
        }
    },
    servicesContainter:{
        height:'10em',
        [theme.breakpoints.down('sm')]:{
        }
    },
    TitleLink:{
        marginBottom:'1.45em'
    },
    links:{
        marginBottom:'0.75em'

    }
}))


