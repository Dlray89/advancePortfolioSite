import {makeStyles} from '@material-ui/core'
import FrontEndDesign from '../../asset/images/frontEndDevelopment.jpg'
import mobileBackground from '../../asset/images/mobileBackground.jpg'



export const useStyles = makeStyles((theme) => ({
    landingPage:{
        backgroundImage:'url('+ FrontEndDesign +')',
        height:'20em',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPositionY:'-5em',
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
        width:'35%',
        background: 'rgba(27, 20, 17, 0.7)',
        color:'#ddca7d',
        marginLeft:'20em',
        marginTop:'2.5%',
        padding:'1%',
        fontSize:'1.5em',
        ...theme.shadows[10],
        
        [theme.breakpoints.down('md')]:{
            margin: 0,
            width:'35%',
            fontSize:'1.2em',
            padding:'1em',
            marginLeft:'32%',
            marginTop:'4%',
        },
    },
    titlleContainer:{
        width:'100%'
    },
    buttonContainer:{
        marginLeft:'0.65em'
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
    },
    buttonIcon:{
        height:'2.5em',
    },
    aboutButtonIcon:{
        height:'2.5em',

    },
    card:{
        width:'40%',
        background: theme.palette.common.black,
        boxShadow: theme.shadows[10],
        [theme.breakpoints.down('sm')]:{
            width:'100%',
            border:'solid 2px red',
            margin: 0
        },
        [theme.breakpoints.down('md')]:{
            width:'70%',
            margin: '2% auto'
        }
    },
    mainContentContainer:{
        background: theme.palette.common.lightBrown,
        padding: "2%",
        display: "flex",
        justifyContent: "space-evenly",
        [theme.breakpoints.down('sm')]:{
            flexDirection: 'column',
            width:'95%',
            border:"solid 2px yellow"
        },
        [theme.breakpoints.down('md')]:{
            flexDirection: 'column',

        }
    },
    pictureContainer:{
        width:'100%',
        textAlign:'center',
        background:'#f7f8fc'
    },
    myMissionPicture:{
        width:'70%'
    },
    myMissionContent:{
        width:'95.5%',
        padding:'2%',
        margin: '1% auto',
        textAlign:'left',
        border:'solid 2px #ddca7d',
        [theme.breakpoints.down('sm')]:{
            fontSize:'0.95em'
        }
    },
    divider:{
        background: theme.palette.common.lightBrown
    },
    techPictureContainer:{
        background:'#010e42',
    },
    myTechnologisePicture:{
        width:'100%',
        height:'140%',
       textAlign:'center' 
    },
    techContent:{
        border:'solid 2px #ddca7d',
        marginTop:'15%',
        width:'100%'
    },
    list:{
        width:'100%'
    },
    listButton:{
        "&:hover":{
            background:theme.palette.common.lightBrown,
            color: theme.palette.common.black
        }
    },
    listText:{
        color: theme.palette.common.lightBrown,
        textAlign:'center',
        fontSize:'1.4em',
        fontFamily: 'Smokum cursive',
        [theme.breakpoints.down('sm')]:{
            fontSize:'1.2em'
        }
    },
    techIcons:{
        height:'2.2em',
        marginLeft:'0.55em'
    }
 

}))