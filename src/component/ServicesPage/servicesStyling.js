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
        marginTop:'5em',
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
        
        width:'50%',
        [theme.breakpoints.down('md')]:{
            
            width:'100%',
            margin: 0,
            textAlign:'center',
          
        }
    },
    websiteTitle:{
        fontSize:'1.7em',
        marginBottom:'1em',
        
        width:'100%'

    },
    websiteSubtitle:{
        fontSize:'1.1em',
        marginBottom:'0.75em',
        width:'100%',
        wordWrap:'normal',
        [theme.breakpoints.down('md')]:{
            width:'95%',
            margin: '0 auto',
            textAlign:'center',
            marginBottom:'1em'

        },
        [theme.breakpoints.down('xs')]:{
            
            fontSize:'1em',
            padding:'2%'

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
        },
        [theme.breakpoints.down('xs')]:{
            width: '100%'
        }
    },
    webAppContainer:{
        width:'70%',
        marginTop:'6em',
        marginLeft:'auto',
        marginBottom:'4em',
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
        width:'52.55%',
        [theme.breakpoints.down('md')]:{
            
            width:'100%',
            margin: 0,
            textAlign:'center',
          
        }
    },
    webAppTitle:{
        fontSize:'1.7em',
        marginBottom:'1em',
        
        width:'100%'
    },
    webAppSubtitle:{
        fontSize:'1.1em',
        marginBottom:'0.75em',
        width:'100%',
        wordWrap:'normal',
        [theme.breakpoints.down('xs')]:{
            
            fontSize:'1em',
            padding:'2%'

        },
        [theme.breakpoints.down('md')]:{
            width:'95%',
            margin: '0 auto',
            textAlign:'center',
            marginBottom:'1em'

        },
        
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
        marginLeft:'1em',
        
        [theme.breakpoints.down('md')]:{
            margin:0,
            textAlign:'center',
            width:'100%'
        }
    },
    webAppImg:{
        width:'25em',
        [theme.breakpoints.down('md')]:{
            width: '25em'
        },
        [theme.breakpoints.down('xs')]:{
            width: '100%'
        }
    },

    responsiveContainer:{
        width:'70%',
        marginTop:'6em',
        marginLeft:'3em',
        marginBottom:'4em',

        
        
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
        
        width:'50%',
        [theme.breakpoints.down('md')]:{
            
            width:'100%',
            margin: 0,
            textAlign:'center',
          
        }
    },
    responsiveTitle:{
        fontSize:'1.7em',
        marginBottom:'1em',
        
        width:'100%'
    },
    responsiveSubtitle:{
        fontSize:'1.1em',
        marginBottom:'0.75em',
        width:'100%',       
        wordWrap:'normal',
        [theme.breakpoints.down('xs')]:{
            
            fontSize:'1em',
            padding:'2%'

        },
        [theme.breakpoints.down('md')]:{
            width:'95%',
            margin: '0 auto',
            textAlign:'center',
            marginBottom:'1em'

        },
        
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
        marginLeft:'1em',
        
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
        },
        [theme.breakpoints.down('xs')]:{
            width: '100%'
        }
    },
    

}))