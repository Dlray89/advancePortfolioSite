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
        '&:hover':{
            background: theme.palette.common.black,
            color:theme.palette.common.lightBrown
          },
        [theme.breakpoints.down('sm')]:{
                fontSize:'0.75em'
        },
        
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
    },
    myMissionContainer:{
        background: theme.palette.common.black,
        color: theme.palette.common.lightBrown,
        padding:'3%'
        
    },
    myMissionTitle:{
        fontSize:'2.5em',
        textAlign:'center',
        fontFamily: 'Smokum cursive'
    },
    myMissionText:{
        fontSize:'1.2em',
        textAlign:'center',
        fontFamily: 'Smokum cursive'

    },
    websiteContainer:{
        width:'60%',
        marginTop:'1em',
        marginLeft:'3em'

    },
    websiteContentContainer:{
        marginRight:'0.75em'
    },
    websiteTitle:{
        fontSize:'2em',
        marginBottom:'1em'
    },
    websiteSubtitle:{
        fontSize:'1.1em',
        marginBottom:'0.75em',
        width:'100%',
        
    },
    websiteButton:{

    },
    webdesignImgContainer:{
    },
    webdesignImg:{
        width:'20em'
    },
    webAppContainer:{
        width:'57.5%',
        marginTop:'3em',
        marginLeft: 'auto',
        marginRight:'3em'


    },
    webAppContentContainer:{
        marginRight:'0.75em'
    },
    webAppTitle:{
        fontSize:'2em',
        marginBottom:'1em'
    },
    webAppSubtitle:{
        fontSize:'1.1em',
        marginBottom:'0.75em',
        width:'100%',
        
    },
    webAppButton:{

    },
    webAppImgContainer:{
    },
    webAppImg:{
        width:'20em'
    },

    responsiveContainer:{
        width:'57.5%',
        marginTop:'3em',
        marginLeft:'3em'


    },
    responsiveContentContainer:{
        marginRight:'0.75em'
    },
    responsiveTitle:{
        fontSize:'2em',
        marginBottom:'1em'
    },
    responsiveSubtitle:{
        fontSize:'1.1em',
        marginBottom:'0.75em',
        width:'100%',
        
    },
    responsiveButton:{

    },
    responsiveImgContainer:{
    },
    responsiveImg:{
        width:'20em'
    }
 

}))