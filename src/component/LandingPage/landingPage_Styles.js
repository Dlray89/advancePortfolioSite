import {makeStyles} from '@material-ui/core'
import FrontEndDesign from '../../asset/images/frontEndDevelopment.jpg'
import mobileBackground from '../../asset/images/mobileBackground.jpg'



export const useStyles = makeStyles((theme) => ({
    landingPage:{
        backgroundImage:'url('+ FrontEndDesign +')',
        height:'50em',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPositionY:'-15em',
        [theme.breakpoints.down('sm')]:{
            backgroundImage:'url('+ mobileBackground +')',
            backgroundSize:'100%',
            backgroundPosition:'center',
            backgroundPositionY:'-0em',
            height:'29em'
      },
      [theme.breakpoints.down('xs')]:{
          backgroundImage:'url('+ mobileBackground +')',
          backgroundSize:'100%',
          backgroundPosition:'center',
          backgroundPositionY:'0em',
          height:'20em'
      }
    
        
    },
    introCard:{
        position: 'absolute',
        width:'50%',
        background: 'rgba(27, 20, 17, 0.7)',
        color:'#ddca7d',
        marginTop:'5em',
        marginLeft:'15em',
        padding:'1%',
        fontSize:'1.5em',
        ...theme.shadows[10],
        [theme.breakpoints.down('sm')]:{
            margin: 0,
            width:'90%',
            fontSize:'0.85em',
            padding:'0.8em',
            marginLeft:'1em',
            marginTop:'4.5em',
        },
        [theme.breakpoints.down('md')]:{
            margin: 0,
            width:'80%',
            fontSize:'1.2em',
            padding:'1em',
            marginLeft:'4em',
            marginTop:'8em',

        },
        
        
        

    },
    headerButton:{
        border:'solid 1px #ddca7d',
        color: theme.palette.common.darkBrown,
        background:theme.palette.common.lightBrown,
        [theme.breakpoints.down('sm')]:{
                fontSize:'0.75em'
        },
        '&:hover':{
            color:'white'
        }
    }
}))