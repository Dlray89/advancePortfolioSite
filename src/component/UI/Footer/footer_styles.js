import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  footer: {
    background: theme.palette.common.black,
    color: theme.palette.common.lightBrown,
    backgroundSize: "27em",
    [theme.breakpoints.down("sm")]: {},
  },

  home: {
    width: "20%",
    fontFamily:'Lustria serif'
  },
  services: {
    width: "20%",
  },
  information: {
    width: "20%",
  },
  logoContainer:{
  
    width:'40%',
    [theme.breakpoints.down('sm')]:{
        width:'60%',
        margin:'0 auto',
    }
  },
  footerText:{
    width:'100%',
    fontFamily:'Lustria serif',
    [theme.breakpoints.down('sm')]:{
        width:'100%',
        textAlign:'center',
        fontSize:'1.5em'
    }
    


  },
  socialMediaContainer:{
      width:'19%',
      textAlign:'center',
      margin:'0 auto',
      [theme.breakpoints.down('sm')]:{
        width:'80%',
        margin: '0 auto',
    }
  },

  icons:{
      height:'3em',
      [theme.breakpoints.down('sm')]:{
        height:'4em',
        
    }
    
  }
}));
