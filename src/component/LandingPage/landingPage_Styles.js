import { makeStyles } from "@material-ui/core";

import heroCardImg from "../../asset/refactorImages/davidhero3.jpg";
import webdesign from "../../asset/images/webdesign.jpg";
export const useStyles = makeStyles((theme) => ({
  landingPage: {
    backgroundImage: "url(" + heroCardImg + ")",
    height: "50em",
    backgroundRepeat: "no-repeat",
    backgroundSize: "45% 100%, cover",
    backgroundPosition: "right",
    backgroundPositionY:'3em',
        background: "#242331",
    [theme.breakpoints.down("sm")]: {
      backgroundSize: "100% 100%, cover",
      height: "40em",
    },
  },
  heroCardDetails: {
    width: "50%",
    margin: "auto 0",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      background: "#242331",
    },
  },
  heroCardTitle: {
    color: "white",
    fontFamily: "Smokum cursive",
    fontSize: "4em",
    marginLeft: "1em",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5em",
      marginLeft: "1.2em",
      marginTop: "1em",
    },
  },
  heroCardSubtitle: {
    color: "white",
    fontFamily: "Smokum cursive",
    fontSize: "1.3em",
    width: "70%",
    lineHeight: 1.3,
    marginTop: "1em",
    marginLeft: "3em",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em",
      lineHeight: "1.5",
    },
  },
  heroButtonContainer: {
    marginTop: "2em",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "3em",
    },
  },
  heroButton: {
    marginLeft: "4em",
    width: "20em",
    fontFamily: "Smokum cursive",

    [theme.breakpoints.down("sm")]: {
      marginLeft: "3.5em",
    },
  },
  techArchContainer: {
    width: "100%",
  },
  techArch: {
    width: "32%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      margin: "2em auto",
    },
  },
  techArchTitle: {
    textAlign: "center",
    fontSize: "3em",
    marginBottom: "0.25em",
    marginTop: "1em",
    fontFamily: "Smokum cursive",
  },

  techArchTitle2: {
    textAlign: "center",
    fontSize: "1.5em",
    fontFamily: "Smokum cursive",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.8em",
    },
  },
  techArchDetails: {
    textAlign: "center",
    fontSize: "0.85em",
    width: "70%",
    margin: " 0 auto",
    lineHeight: 1.5,
    fontFamily: "Smokum cursive",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em",
    },
  },
  techArchIconContainer: {
    textAlign: "center",
  },
  techArchIcon: {
    width: "3em",
  },
  calltoaction: {
    backgroundImage: "url(" + webdesign + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "50% 100%, cover",
    backgroundPosition: "left",
    height: "25em",
    background: "#242331",
    marginTop: "5em",
    fontFamily: "Smokum cursive",

    [theme.breakpoints.down("sm")]: {
      backgroundSize: "100% 100%, cover",
      height: "25em",
    },
  },
  calltoactionDetails: {
    width: "50%",
    marginLeft: "auto",
    margin: "auto 0",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: 0,
      background: "rgba(27, 20, 17, 0.6)",
    },
  },
  calltoactionTitle: {
    textAlign: "right",
    fontSize: "2.5em",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
      fontSize: "2.2em",
      width: "60%",
      marginLeft: "0.45em",
      marginTop: "6em",
    },
  },
  calltoactionSubtitle: {
    textAlign: "right",
    fontSize: "1.2em",
  },
  calltoactionButton: {
    color: "white",
  },
  calltoactionButtonContainer: {
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      borderTop: "solid 2px white",
      margin: "0 auto",
      textAlign: "left",
      marginLeft: "1em",
    },
  },
  serviceContainer: {
    width: "40%",
    marginLeft: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "55%",
      marginRight: "11.5em",
    },
  },
  calltoactionServices: {
    color: "white",
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
    },
  },
  dot: {
    width: "0.35em",
    color: "white",
  },
  newestProject: {
    fontSize: "1.5em",
    background: "#242331",

    marginTop: "3em",
    margin: "0 auto",
    width: "92%",
    textAlign: "center",
    borderTopRightRadius: "10px",
    borderTopLeftRadius: "10px",
    marginBottom: "1em",
    [theme.breakpoints.down("sm")]: {
      borderRadius: 0,
      height: "15em",
    },
  },
  newestProjectTitle: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em",
    },
  },
  projectContainer: {},
  project: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: "3em",
    },
  },
  projectDetails: {
    width: "50%",
    fontFamily: "Smokum cursive",
  },
  projectTitle: {
    width: "90%",
    fontSize: "2.2em",
    marginBottom: "0.25em",
    color: "white",
  },
  projectDate: {
    width: "89%",
    fontSize: "0.85em",
    marginTop: "2em",
    color: "white",
  },
  projectSubtitle: {
    width: "90%",
    fontSize: "1em",
    lineHeight: 1.3,
    marginTop: "0em",
    marginBottom: "3em",
    color: "white",
  },
  projectImgContainer: {
    width: "50%",
  },
  projectImg: {
    width: "100%",
    height: "100%",
  },
  projectButtonContainer: {
    width: "90%",
    marginBottom: "2em",
    borderTop: "solid 2px white",
    padding: "1em",
  },
  projectButton: {
    fontSize: "0.65em",
    width: "100%",
    marginBottom: "0.55em",
    color: "black",
    background: "white",
  },
  buttonContainer: {
    width: "100%",
  },
  projectLogo: {
    width: "2em",
  },
  aboutContainer: {
    width: "92%",
    margin: "0 auto",
    marginTop: "6em",
    [theme.breakpoints.down('sm')]:{
    }
  },
  about: {
    width: "100%",
    margin: "0 auto",
  },
  aboutImgContainer: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  aboutImg: {
    width: "70%",
    marginLeft: "0.55em",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin:0
    },
  },
  aboutText: {
    width: "50%",
    borderTop: "solid 3px #dfdfdf",
    fontFamily: "Lustria serif",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      borderTop: 0,
    },
  },
  aboutTextTitle: {
    marginTop: "0.96em",
    fontSize: "3em",
    marginBottom: "0.66em",
    fontFamily: "Lustria serif",
    [theme.breakpoints.down("md")]: {
      fontSize: "2em",
      borderBottom: "solid 3px #dfdfdf",
    },
  },
  aboutTextDetails: {
    width: "70%",
    textAlign: "left",
    lineHeight: 1.7,
    [theme.breakpoints.down("md")]: {
      fontSize: "0.80em",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.90em",
      width: "100%",
      marginBottom: "5em",
    },
  },
  aboutTextButtonContainer: {
    marginTop: "auto",
  },
  aboutTextButton: {
    borderRadius: 0,
    border: "solid 3px #dfdfdf",
    marginTop: "",
    fontFamily: "Lustria serif",
  },
}));
