import { makeStyles } from "@material-ui/core";
import pattern from "../../asset/patterns/leftPattern.svg";

export const useStyles = makeStyles((theme) => ({
  footer: {
    background: theme.palette.common.black,
    color: theme.palette.common.lightBrown,
    height: "14.53em",
    backgroundImage: "url(" + pattern + ")",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "0em",
    backgroundSize: "27em",
    [theme.breakpoints.down("sm")]: {},
  },

  home: {
    width: "20%",
  },
  services: {
    width: "20%",
  },
  information: {
    width: "20%",
  },
  logoContainer:{
  
    width:'20%',
    [theme.breakpoints.down('sm')]:{
        width:'60%',
        margin:'0 auto',
    }
  },
  footerText:{
    width:'100%',
    [theme.breakpoints.down('sm')]:{
        width:'100%',
        textAlign:'center',
        fontSize:'1.5em'
    }
    


  },
  socialMediaContainer:{
      width:'20%',
      verticalAlign:'text-bottom',
      [theme.breakpoints.down('sm')]:{
        width:'80%',
        margin: '0 auto',
    }
  },

  icons:{
      height:'3em',
      marginLeft: 'auto',
      [theme.breakpoints.down('sm')]:{
        height:'4em',
        
    }
    
  }
}));
