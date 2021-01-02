import { makeStyles } from "@material-ui/core";
import FrontEndDesign from "../../asset/images/frontEndDevelopment.jpg";
import mobileBackground from "../../asset/images/mobileBackground.jpg";
import callToactionImg from "../../asset/images/callToAction.jpg";

export const useStyles = makeStyles((theme) => ({
  landingPage: {
    backgroundImage: "url(" + FrontEndDesign + ")",
    height: "20em",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPositionY: "-5em",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "url(" + mobileBackground + ")",
      backgroundSize: "100%",
      backgroundPosition: "center",
      backgroundPositionY: "-0em",
      height: "29em",
    },
    [theme.breakpoints.down("xs")]: {
      backgroundImage: "url(" + mobileBackground + ")",
      backgroundSize: "100%",
      backgroundPosition: "center",
      backgroundPositionY: "0em",
      height: "20em",
    },
  },
  servicesContainer: {},
  introCard: {
    position: "absolute",
    width: "35%",
    background: "rgba(27, 20, 17, 0.7)",
    color: "#ddca7d",
    marginLeft: "20em",
    marginTop: "5%",
    padding: "1%",
    fontSize: "1.5em",
    ...theme.shadows[10],

    [theme.breakpoints.down("md")]: {
      margin: 0,
      width: "35%",
      fontSize: "1.2em",
      padding: "1em",
      marginLeft: "32%",
      marginTop: "4%",
    },
  },
  titlleContainer: {
    width: "100%",
  },
  buttonContainer: {
    marginLeft: "0.65em",
  },
  headerButton: {
    background: "#558c8c",
    color: "White",
    "&:hover": {
      background: theme.palette.common.lightBrown,
      color: "white",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.75em",
    },
  },
  buttonIcon: {
    height: "2.5em",
  },
  aboutButtonIcon: {
    height: "2.5em",
  },
  card: {
    width: "40%",
    background: theme.palette.common.black,
    boxShadow: theme.shadows[10],
    [theme.breakpoints.down("sm")]: {
      width: "100%",

      margin: 0,
    },
    [theme.breakpoints.down("md")]: {
      width: "70%",
      margin: "2% auto",
    },
  },
  mainContentContainer: {
    background: theme.palette.common.lightBrown,
    padding: "2%",
    display: "flex",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "95%",
      border: "solid 2px yellow",
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  pictureContainer: {
    width: "100%",
    textAlign: "center",
    background: "#f7f8fc",
  },
  myMissionPicture: {
    width: "70%",
  },
  myMissionContent: {
    width: "95.5%",
    padding: "2%",
    margin: "1% auto",
    textAlign: "left",
    border: "solid 2px #ddca7d",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.95em",
    },
    
  },
  techStackIconContainer: {
    width: "50%",
  },
  techStackIcon:{
        height:'4em',
        [theme.breakpoints.down('md')]:{
          height:'3em'
        },
        [theme.breakpoints.down('xs')]:{
          height:'2.1em'
        }
  },
  divider: {
    background: theme.palette.common.lightBrown,
  },
  techPictureContainer: {
    background: "#010e42",
  },
  myTechnologisePicture: {
    width: "100%",
    height: "140%",
    textAlign: "center",
  },
  techContent: {
    border: "solid 2px #ddca7d",
    marginTop: "15%",
    width: "100%",
  },
  list: {
    width: "100%",
  },
  listButton: {
    "&:hover": {
      background: theme.palette.common.lightBrown,
      color: theme.palette.common.black,
    },
  },
  listText: {
    color: theme.palette.common.lightBrown,
    textAlign: "center",
    fontSize: "1.4em",
    fontFamily: "Smokum cursive",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2em",
    },
  },
  techIcons: {
    height: "2.2em",
    marginLeft: "0.55em",
  },
  myMissionContainer: {
    background: theme.palette.common.black,
    color: theme.palette.common.lightBrown,
    padding: "3%",
  },
  myMissionTitle: {
    fontSize: "2.5em",
    textAlign: "center",
    fontFamily: "Smokum cursive",
    [theme.breakpoints.down('md')]:{
      fontSize:'2.1em'
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.7em",
    },
  },
  myMissionText: {
    fontSize: "1.2em",
    textAlign: "center",
    fontFamily: "Smokum cursive",
  },
  websiteContainer: {
    width: "60%",
    marginTop: "5em",
    marginLeft: "3em",
    
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: 0,
      display: "flex",
      flexDirection: "column-reverse",
      marginBottom: "8em",
      marginTop: "5em",
    },
  },
  websiteContentContainer: {
    marginRight: "0.75em",
    
    width:'50%',
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: 0,
      textAlign: "center",
    },
  },
  websiteTitle: {
    fontSize: "1.7em",
    marginBottom: "1em",
    
    [theme.breakpoints.down('xs')]:{
      fontSize:'1.5em'
    }
  },
  websiteSubtitle: {
    fontSize: "1em",
    marginBottom: "0.75em",
    width: "100%",
    
    wordWrap: 'normal',
    [theme.breakpoints.down('md')]:{
      fontSize:'1.2em'
    },
    [theme.breakpoints.down('xs')]:{
      fontSize:'1em'
    }
  },
  websiteButton: {
    background: "#558c8c",
    color: "White",
    "&:hover": {
      background: theme.palette.common.lightBrown,
      color: "white",
    },
  },
  webdesignImgContainer: {
    
    width:"45%",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      width: "100%",
    },
  },
  webdesignImg: {
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "30.2",
    },
  },
  webAppContainer: {
    width: "60%",
    marginTop: "5em",
    marginLeft: "auto",
    
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: 0,
      display: "flex",
      flexDirection: "column-reverse",
      marginBottom: "8em",
    },
  },
  webAppContentContainer: {
    marginRight: "0.75em",
    
    width:'50%',
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: 0,
      textAlign: "center",
    },
  },
  webAppTitle: {
    fontSize: "1.7em",
    marginBottom: "1em",
    
    [theme.breakpoints.down('xs')]:{
      fontSize:'1.5em'
    }
  },
  webAppSubtitle: {
    fontSize: "1em",
    marginBottom: "0.75em",
    width: "100%",
    
    wordWrap: 'normal',
    [theme.breakpoints.down('md')]:{
      fontSize:'1.2em'
    },
    [theme.breakpoints.down('xs')]:{
      fontSize:'1em'
    }
  },
  webAppButton: {
    background: "#558c8c",
    color: "White",
    "&:hover": {
      background: theme.palette.common.lightBrown,
      color: "white",
    },
  },
  webAppImgContainer: {
    
    width:"45%",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      width: "100%",
    },
  },
  webAppImg: {
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "30.2",
    },
  },

  responsiveContainer: {
    width: "60%",
    marginTop: "5em",
    marginLeft: "3em",
    
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: 0,
      display: "flex",
      flexDirection: "column-reverse",
    },
  },
  responsiveContentContainer: {
    marginRight: "0.75em",
    
    width:'50%',
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: 0,
      textAlign: "center",
    },
  },
  responsiveTitle: {
    fontSize: "1.7em",
    marginBottom: "1em",
    
    [theme.breakpoints.down('xs')]:{
      fontSize:'1.5em'
    }
  },
  responsiveSubtitle: {
    fontSize: "1em",
    marginBottom: "0.75em",
    width: "100%",
    
    wordWrap: 'normal',
    [theme.breakpoints.down('md')]:{
      fontSize:'1.2em'
    },
    [theme.breakpoints.down('xs')]:{
      fontSize:'1em'
    }
  },
  responsiveButton: {
    background: "#558c8c",
    color: "White",
    "&:hover": {
      background: theme.palette.common.lightBrown,
      color: "white",
    },
  },
  responsiveImgContainer: {
    
    width:"45%",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      width: "100%",
    },
  },
  responsiveImg: {
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "30.2",
    },
  },
  callToAction: {
    background: "url(" + callToactionImg + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "100em",
    height: "60em",
    position: "relative",
    marginTop: "9em",
    marginBottom: 0,
    [theme.breakpoints.down("md")]: {
      backgroundSize: "75em",
    },
  },
  callToActionLayer: {
    backgroundColor: "rgba(27, 20, 17, 0.9)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  callToActionCard: {
    height: "18em",
    width: "30%",
    background: "#242331",
    [theme.breakpoints.down("md")]: {
      width: "70%",
      height: "20em",
    },
  },
  cardCTAContent: {
    color: theme.palette.common.lightBrown,
  },
  cardCTAButton: {
    background: "#558c8c",
    color: "white",
    marginTop: "2em",
    "&:hover": {
      background: theme.palette.common.lightBrown,
      color: "white",
    },
  },
}));
