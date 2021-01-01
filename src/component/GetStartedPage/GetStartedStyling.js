import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  getEstimate: {},
  mainGridContainer: {},
  GettingStartedImgContainer: {
    width: "38%",
    [theme.breakpoints.down('md')]:{
        width:'47%'
    },
    [theme.breakpoints.down('sm')]:{
        width:'70%'
    },
    [theme.breakpoints.down('xs')]:{
        width:'100%',
        marginTop:'2em'
    }
  },
  getStartedTitle: {
    fontSize: "3em",
    marginBottom: "0.1em",
    marginTop: "0.25em",
    textAlign: "center",

    width: "11.7em",
    [theme.breakpoints.down('xs')]:{
        width:'70%',
        margin: 0,
        fontSize:'2.5em'

    },
    [theme.breakpoints.down('sm')]:{
        width:'80%',
        margin: '0 auto',
        

    }
  },
  imgContainer: {
    [theme.breakpoints.down('md')]:{
     margin: '0 auto'  
    },
    [theme.breakpoints.down('sm')]:{
        width:'80%',
        margin:' 0 auto',
        
        textAlign:'center'
    },
    [theme.breakpoints.down('xs')]:{
        width:'80%',
        margin: '0 auto',
        textAlign:'center'

    }
  },
  img: {
    width: "35em",
    [theme.breakpoints.down("sm")]: {
        width:'100%',
        
    },
    [theme.breakpoints.down('xs')]:{
        width:'100%'
    }
  },
  questionContainer: {
    width: "55%",
    marginTop:'5em',
    [theme.breakpoints.down('md')]:{
        width:'47%',
        marginBottom:'2em'
    },
    [theme.breakpoints.down('sm')]:{
        width:'70%',
        marginBottom:'2em'
    },
    [theme.breakpoints.down('xs')]:{
        width:'100%',
        marginBottom:'2em'
    }
  },
  mainQuestion: {
    fontSize: "1.5em",
    [theme.breakpoints.down('xs')]:{
        textAlign:'center'
    }
  },
  servicesContainer: {
    width: "32%",
    marginBottom: "2em",
  },
  servicesIcons: {
    height: "5em",
  },
  services:{
    [theme.breakpoints.down('xs')]:{
        width:'100%',
        margin: 0,
        fontSize:'0.95em',
        textAlign:'center'

    }
  },
  arrows:{
    width:'2em'
  },
  Dialog:{
    border:'solid 2px red'
  },
  inputContainer:{
  },
  input:{
    width:'70%',
    [theme.breakpoints.down('xs')]:{
      fontSize:'0.8em'
    }
  },
  contactButton:{
   
    fontSize:'0.75em',
    [theme.breakpoints.down('xs')]:{
      fontSize:'0.65em'
    }
  },
  sendIcon:{
    height:'2em'
  },
  total:{
    textAlign:'center',
    marginBottom:'1em'
  },
  totalSubtitle:{
    textAlign:'center'
  },
  specialText:{
    color:"#558c8c",
    fontWeight:700,
    
  }
}));
