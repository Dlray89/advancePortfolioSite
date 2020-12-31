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
        marginLeft: '1.65em'

    }
  },
  imgContainer: {
    [theme.breakpoints.down('md')]:{
     margin: '0 auto'  
    },
    [theme.breakpoints.down('sm')]:{
        width:'80%',
        margin:' 0 auto'
    },
    [theme.breakpoints.down('xs')]:{
        width:'80%',
        margin: 0,
        marginLeft:'3.7em'

    }
  },
  img: {
    width: "35em",
    [theme.breakpoints.down("sm")]: {
        width:'32em'
    },
    [theme.breakpoints.down('xs')]:{
        width:'23em'
    }
  },
  questionContainer: {
    width: "55%",
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
    marginBottom: "2em",
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
  }
}));
