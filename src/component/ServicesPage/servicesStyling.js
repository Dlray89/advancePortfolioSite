import {makeStyles} from '@material-ui/core'
import wireframing from '../../asset/refactorImages/wireframingHero.jpg'
import Webdesign from "../../asset/images/webdesign.jpg";
import WebApp from "../../asset/images/webApplicationDesign.jpg";

export const useStyles = makeStyles((theme) => ({
    Services:{
        backgroundImage:'url('+ wireframing+')',
        height:'25em',
        backgroundRepeat:'no-repeat',
        backgroundSize:'50% 100%, cover',
        background: "#242331",
        
        [theme.breakpoints.down('sm')]:{
            backgroundImage:'url('+ wireframing +')',
            backgroundSize:'100%',
            backgroundPosition:'center',
            backgroundPositionY:'-0em',
            height:'22em'
        }
      },
      heroDetails:{
            
            width:'50%',
            marginLeft:'auto',
            margin:'auto 0',
            fontFamily: "Smokum cursive",
            [theme.breakpoints.down('md')]:{

            },
            [theme.breakpoints.down('sm')]:{
                background: "#242331",
                margin:0,
                width:'100%'
            }

      },

      heroTitle:{
            color:'white',
            fontSize:'3em',
            marginLeft:'1em',
            [theme.breakpoints.down('md')]:{
                fontSize:'2.5em'
            },
            [theme.breakpoints.down('sm')]:{
                fontSize:'3em',
                margin:0,
                marginLeft:'0.45em'
                
            }
      },
      heroSubtitle:{
        color:'white',
        fontSize:'1.2em',
        marginLeft:'2.5em',
        width:'80%',
        marginTop:'1em',
        [theme.breakpoints.down('md')]:{
            fontSize:'0.99em'
        },
        [theme.breakpoints.down('sm')]:{
            marginBottom:'3em' ,
            marginLeft:'1.2em'           
        }

      },
    
    websiteContainer:{
        width:'100%',
        
        backgroundImage:'url('+ Webdesign +')',
        height:'25em',
        backgroundRepeat:'no-repeat',
        backgroundSize:'55% 100%, cover',
        backgroundPosition:'right',
        background: "#242331",

        [theme.breakpoints.down('sm')]:{
            backgroundSize:'100% 100%, cover'
            
        }

    },
    websiteDetails:{
        
        width:'40%',
        marginRight:'auto',
        [theme.breakpoints.down('sm')]:{
            background: "white",
            margin:0,
            width:'100%'
        }
        
    },
    websiteTitle:{
        color:'white',
        fontSize:'3em',
        marginLeft:'0.85em',
        fontFamily: "Smokum cursive",
        [theme.breakpoints.down('md')]:{
            fontSize:'2.5em',
            marginLeft:'0.38em'
        },
        [theme.breakpoints.down('sm')]:{
            fontSize:'3em',
            marginLeft:'0.55em',
            color:'#242331'
        }

    },
    websiteSubtitle:{
        color:'white',
        fontSize:'1.2em',
        marginLeft:'2em',
        width:'70%',
        fontFamily: "Smokum cursive",
        [theme.breakpoints.down('md')]:{
            fontSize:'0.99em',
            marginLeft:'1.55em'
        },
        [theme.breakpoints.down('sm')]:{
            marginLeft:'1.25em',
            color:'#242331'

        }

    },
    websiteButtonContainer:{
        borderTop:'solid 2px #fdfdfd',
        width:'90%',
        margin: '0 auto',
        marginTop:'2em',
        [theme.breakpoints.down('sm')]:{
            marginBottom:'2em',
            borderTop:'solid 2px #242331'
        }
    },
    websiteButton:{
        color:'white',
        border:'solid 3px #fdfdfd',
        background:'inherit',
        borderRadius:0,
        marginTop:'1em',
        fontFamily: "Smokum cursive",
        width:'45%',
        
        '&:hover':{
            background:'#558c8c',
            color:'white',
            
        },
        [theme.breakpoints.down('sm')]:{
            color:'#242331',
            border:'solid 3px #242331',

        }


    },
    webAppContainer:{
        width:'100%',
        
        backgroundImage:'url('+ WebApp +')',
        height:'25em',
        backgroundRepeat:'no-repeat',
        backgroundSize:'50% 100%, cover',
        backgroundPosition:'left',
        background: "#242331",
        fontFamily: "Smokum cursive",
        [theme.breakpoints.down('sm')]:{
            backgroundSize:'100% 100%, cover'
            
        }

    },
    webAppDetails:{
        
        width:'50%',
        marginLeft:'auto',
        margin:'auto 0',
        [theme.breakpoints.down('sm')]:{
            background: "#242331",
            margin:0,
            width:'100%'
        }
        
    },
    webAppTitle:{
        color:'white',
        fontSize:'3em',
        marginLeft:'0.75em',
        fontFamily: "Smokum cursive",
        [theme.breakpoints.down('md')]:{
            fontSize:'2.5em',
            marginLeft:'0.63em'
        },
        [theme.breakpoints.down('sm')]:{
            fontSize:'3em',
            marginLeft:'0.55em'
        }
  },
  webAppSubtitle:{
    color:'white',
    fontSize:'1.2em',
    marginLeft:'2em',
    width:'80%',
    fontFamily: "Smokum cursive",
    [theme.breakpoints.down('md')]:{
        fontSize:'0.99em',
        marginLeft:'1.55em'
    },
    [theme.breakpoints.down('sm')]:{
        marginLeft:'1.25em'
    }

  },
  websiteAppButtonContainer:{
    borderTop:'solid 2px #fdfdfd',
    width:'90%',
    margin: '0 auto',
    marginTop:'2em',
    [theme.breakpoints.down('sm')]:{
        marginBottom:'2em'
    }
},
webAppButton:{
    color:'white',
    border:'solid 3px #fdfdfd',
    background:'inherit',
    borderRadius:0,
    marginTop:'1em',
    fontFamily: "Smokum cursive",
    width:'40%',
    '&:hover':{
        background:'#558c8c',
        color:'white',
        
    }


},
techStackContainer:{
    marginTop:'3em',
    marginBottom:'3em',
    [theme.breakpoints.down('sm')]:{
        

    }
},
techStack:{
    fontFamily: "Smokum cursive",
    [theme.breakpoints.down('sm')]:{
        
    }

},
mainTitle:{
    fontSize:'3em',
    marginBottom:'1em',
    fontFamily: "Smokum cursive",
     [theme.breakpoints.down('md')]:{
            fontSize:'2.50em',
            marginLeft:'1.55em'
        },

    [theme.breakpoints.down('sm')]:{
        fontSize:'2.3em',
        textAlign:'left',
        margin:0
    }
},
teachStackCard:{
    width:'30%',
    marginBottom:'2em',
    [theme.breakpoints.down('sm')]:{
        width:'70%',
        margin:'1em auto',
        background: "#242331",
        padding:'1em',
        '&:hover':{
            marginRight:'3em',
            borderLeft: "solid 4px transparent",
            borderImage: "linear-gradient(to top, #558c8c, white, #b88b4a)",
            borderImageSlice: 1,

        }

    }

},
techStackTitle:{
    textAlign:'center',
    fontSize:'1.4em',
    marginTop:'0.45em',
    [theme.breakpoints.down('md')]:{
        fontSize:'2em',
    },
    [theme.breakpoints.down('sm')]:{
        width:'100%',
        textAlign:'left',
        margin:0,
       
        color:'white'

    }


},
techStackSubtitle:{
    textAlign:'center',
    width:'80%',
    margin:'0em auto',
    fontSize:'1em',
    lineHeight:1.4,
    [theme.breakpoints.down('md')]:{
        fontSize:'0.89em',
    },
    [theme.breakpoints.down('sm')]:{
        width:'100%',
        textAlign:'left',
        margin:0,
       
        fontSize:'0.99em',
        marginTop:'1em',
        color:'white'
    }

},
techStackImgContainer:{
    textAlign:'center',
    [theme.breakpoints.down('sm')]:{
        width:'100%',
        textAlign:'left'
    }
},
techStackImg:{
    width:'3.5em',
    [theme.breakpoints.down('sm')]:{
        width:'3em'
    }

}
   
}))