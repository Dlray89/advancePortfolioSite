import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  getEstimate: {},
  mainGridContainer: {},
  GettingStartedImgContainer: {
    width: "38%",
    [theme.breakpoints.down("md")]: {
      width: "47%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginTop: "2em",
    },
  },
  getStartedTitle: {
    fontSize: "3em",
    marginBottom: "0.1em",
    marginTop: "0.25em",
    textAlign: "center",
    fontFamily:'Lustria serif',

    width: "11.7em",
    [theme.breakpoints.down("xs")]: {
      width: "70%",
      margin: 0,
      fontSize: "2.5em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      margin: "0 auto",
    },
  },
  imgContainer: {
    [theme.breakpoints.down("md")]: {
      margin: "0 auto",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      margin: " 0 auto",

      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      width: "80%",
      margin: "0 auto",
      textAlign: "center",
    },
  },
  img: {
    width: "35em",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  questionContainer: {
    width: "55%",
    marginTop: "5em",
    fontFamily:'Lustria serif',
    [theme.breakpoints.down("md")]: {
      width: "47%",
      marginBottom: "2em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginBottom: "2em",
    },
  },
  mainQuestion: {
    fontSize: "1.5em",
    fontFamily:'Lustria serif',
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  servicesContainer: {
    width: "32%",
    marginBottom: "2em",
  },
  servicesIcons: {
    height: "5em",
  },
  services: {
    fontFamily:'Lustria serif',
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      margin: 0,
      fontSize: "0.75em",
      textAlign: "center",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: 0,
      fontSize: "0.85em",
      textAlign: "center",
    },
  },
  arrows: {
    width: "2em",
  },
  Dialog: {
    border: "solid 2px red",
  },
  inputContainer: {},
  input: {
    width: "70%",
    fontFamily:'Lustria serif',
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8em",
    },
  },
  contactButton: {
    fontSize: "0.75em",
    fontFamily:'Lustria serif',
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.65em",
    },
  },
  sendIcon: {
    height: "2em",
  },
  total: {
    textAlign: "center",
    marginBottom: "1em",
    fontFamily:'Lustria serif'
  },
  totalSubtitle: {
    textAlign: "center",
    fontSize: "0.85em",
    fontFamily:'Lustria serif',
    [theme.breakpoints.down('xs')]:{
      
      textAlign:'center',
      fontSize:'0.75em',
      width:'100%'
    },
  },
  solutionContainer:{
    [theme.breakpoints.down('xs')]:{
      
      textAlign:'center',
      fontSize:'0.75em'
    },
  },
  specialText: {
    color: "#558c8c",
    fontWeight: 700,
    fontFamily:'Lustria serif',
    [theme.breakpoints.down('xs')]:{
      
      textAlign:'center',
      fontSize:'1em'
    },
  },
  webSelectionContainer: {
    width: "100%",
  },
  webSelectioniconContainer: {
    width: "10%",
  },
  webSelectionIcon: {
    height: "2em",
  },
  webSelectionContentContainer: {
    width: "80%",
    fontSize: "0.95em",
    textAlign: "center",
    fontFamily:'Lustria serif'
  },
  webSelectionButtonContainer: {
    marginTop: "2em",
  },
  webselectionButton: {
    fontFamily:'Lustria serif'
  },
  webSelectionButtonIcon: {
    height: "1.2em",
  },
  softwareSelection: {
    width: "100%",
    
    [theme.breakpoints.down('xs')]:{
     
    }
  },
  softwareSelectionFirstCheck: {
    
    marginBottom: "0.55em",
    [theme.breakpoints.down('xs')]:{
     
    }
  },
  softwareFirstCheckIcon: {
    height: "2em",
    [theme.breakpoints.down('xs')]:{
     
    }
  },
  softwareFirstCheckContent: {
    width: "86%",
    fontSize: "0.75em",
    textAlign: "center",
    fontFamily:'Lustria serif',
    [theme.breakpoints.down('xs')]:{
      
      fontSize:'0.65em',
      width:'80%'
    }
  },
  softwareSelectionsecondCheck:{
    
    marginBottom: "0.55em",
  },
  softwareSecondCheckIcon: {
    height: "2em",
  },
  softwareSecondCheckContent: {
    width: "86%",
    fontSize: "0.75em",
    textAlign: "center",
    fontFamily:'Lustria serif',
    [theme.breakpoints.down('xs')]:{
      
      fontSize:'0.65em',
      width:'80%'
    }
  },
  softwareSelectionThirdCheck:{
    
    marginBottom: "0.55em",
  },
  softwareThirdCheckIcon: {
    height: "2em",
  },
  softwareThirdCheckContent: {
    width: "86%",
    fontSize: "0.75em",
    textAlign: "center",
    fontFamily:'Lustria serif',
    [theme.breakpoints.down('xs')]:{
      
      fontSize:'0.65em',
      width:'80%'
    }
  },
  sendEstimateButtonContainer:{
    textAlign:'center',
    marginTop:'0.55em',
    [theme.breakpoints.down('xs')]:{
      
      textAlign:'center'
    },

  },
  sendEstimateButton:{
  
    background: '#558c8c',
        color: 'White',
        fontFamily:'Lustria serif',
        "&:hover": {
            background: theme.palette.common.black,
            color: 'white',
          },
    [theme.breakpoints.down('xs')]:{
      
      fontSize:'0.65em'
    },
  },
  getEstimateButton:{
    background: '#558c8c',
        color: 'White',
        fontFamily:'Lustria serif',
        "&:hover": {
            background: theme.palette.common.black,
            color: 'white',
          },
  },
  goBackButton:{
    textAlign:'center',
    fontFamily: 'Lustria serif'
  }
    
    
}));
