import {makeStyles} from '@material-ui/core'
import ServicesImg from '../../asset/images/servicesImg.jpg'


export const useStyles = makeStyles((theme) => ({
    Services:{
        backgroundImage:'url('+ ServicesImg +')',
        height:'20em',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPositionY:'-30em',
        
        [theme.breakpoints.down('sm')]:{
            backgroundImage:'url('+ ServicesImg +')',
            backgroundSize:'100%',
            backgroundPosition:'center',
            backgroundPositionY:'-0em',
            height:'22em'
        }
      },
    
    websiteContainer:{
        width:'70%',
        marginTop:'1em',
        marginLeft:'3em',
        [theme.breakpoints.down('md')]:{
            
            width:'100%',
            margin: 0,
            display:'flex',
            flexDirection:'column-reverse',
            marginBottom:'8em',
        }

    },
    websiteContentContainer:{
        marginRight:'0.75em',
        [theme.breakpoints.down('md')]:{
            
            width:'100%',
            margin: 0,
            textAlign:'center',
          
        }
    },
    websiteTitle:{
        fontSize:'2em',
        marginBottom:'1em'
    },
    websiteSubtitle:{
        fontSize:'1.1em',
        marginBottom:'0.75em',
        width:'100%',
        [theme.breakpoints.down('md')]:{
            width:'95%',
            margin: '0 auto',
            textAlign:'center',
            marginBottom:'1em'

        }
       
        
    },
    websiteButton:{
        background: '#558c8c',
        color: 'White',
        
        "&:hover": {
            background: theme.palette.common.lightBrown,
            color: 'white',
          },

    },
    webdesignImgContainer:{
        marginLeft:'1em',
        [theme.breakpoints.down('md')]:{
            margin: 0,
            textAlign:'center',
            width:'100%'
        }
    },
    webdesignImg:{
        width:'25em',
        [theme.breakpoints.down('md')]:{
            width: '30.2'
        }
    },
    webAppContainer:{
        width:'60%',
        marginTop:'3em',
        marginLeft: 'auto',
        marginRight:'3em',
        [theme.breakpoints.down('md')]:{
            
            width:'100%',
            margin: 0,
            display:'flex',
            flexDirection:'column-reverse',
            marginBottom:'8em'
        }


    },
    webAppContentContainer:{
        marginRight:'0.75em',
        [theme.breakpoints.down('md')]:{
            
            width:'100%',
            margin: 0,
            textAlign:'center',
          
        }
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
        background: '#558c8c',
        color: 'White',
        "&:hover": {
            background: theme.palette.common.lightBrown,
            color: 'white',
          },

    },
    webAppImgContainer:{
        marginTop:'1em',
        [theme.breakpoints.down('md')]:{
            margin:0,
            textAlign:'center',
            width:'100%'
        }
    },
    webAppImg:{
        width:'30em',
        [theme.breakpoints.down('md')]:{
            width: '25em'
        }
    },

    responsiveContainer:{
        width:'80%',
        marginTop:'3em',
        marginLeft:'3em',
        marginBottom: '3em',
        
        [theme.breakpoints.down('md')]:{
            
            width:'100%',
            margin: 0,
            display:'flex',
            flexDirection:'column-reverse',
            marginBottom:'3em'
        }


    },
    responsiveContentContainer:{
        marginRight:'0.75em',
        [theme.breakpoints.down('md')]:{
            
            width:'100%',
            margin: 0,
            textAlign:'center',
          
        }
    },
    responsiveTitle:{
        fontSize:'2em',
        marginBottom:'1em'
    },
    responsiveSubtitle:{
        fontSize:'1.1em',
        marginBottom:'0.75em',
        width:'100%',
        [theme.breakpoints.down('md')]:{
            width:'95%',
            textAlign:'center',
            margin: '0 auto',
            marginBottom:'1em'
        }
        
    },
    responsiveButton:{
        background: '#558c8c',
        color: 'White',
        "&:hover": {
            background: theme.palette.common.lightBrown,
            color: 'white',
          },
    },
    responsiveImgContainer:{
        marginTop:'1em',
        marginLeft:'1.5em',
        [theme.breakpoints.down('md')]:{
            margin: 0,
            textAlign:'center',
            width:'100%'
        }
    },
    responsiveImg:{
        width:'25em',
        [theme.breakpoints.down('md')]:{
            width: '30.2'
        }
    },
    

}))