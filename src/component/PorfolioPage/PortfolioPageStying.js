import { makeStyles } from "@material-ui/core";
// import PortfolioImg from "../../asset/images/portImg.jpg";
import callToactionImg from "../../asset/images/callToAction.jpg";
import webdesign from "../../asset/images/webdesign.jpg";

export const useStyle = makeStyles((theme) => ({
  project: {},
  projectContainer: {
    textAlign: "center",
    width: "80%",
    margin: "0 auto",
  },
  projectImg: {
    width: "100%",
    border: "solid 3px #dfdfdf",
    marginTop: "0.55em",
    borderRadius: "10px",
  },
  projectDetails: {
    width: "80%",
    margin: "0 auto",
    marginTop: "5em",
  },
  bookmarkContainer: {
    borderTop: "solid 3px #dfdfdf",
    width: "35%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  bookMark: {
    fontSize: "2em",
  },
  bookMArkTitle: {
    fontSize: "1em",
    marginTop: "2em",
  },
  bookmarkDetails: {},
  bookmarkSubtitle: {
    fontSize: "0.75em",
    marginTop: "1em",
  },
  bookMarkTechStatck: {
    fontSize: "0.75em",
    marginTop: "1em",
  },
  bookMarkButtonContainer: {
    marginTop: "1em",
  },
  bookMarkButton: {
    border: "solid 3px #dfdfdf",
    borderRadius: 0,
  },

  background: {
    marginLeft: "2em",
    fontSize: "2em",
    [theme.breakpoints.down("sm")]: {
    },
  },

  backgroundDetails: {
    width: "65%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  backgroundTitle: {},
  backgroundSubtitle: {
    marginTop: "2em",
    width: "60%",
    margin: "0 auto",
    lineHeight: 1.3,
    marginLeft: "4em",
    fontSize: "0.95em",
  },
  backgroundImg: {},
  mobileStepperContainer: {
    width: "75.55%",
    margin: " 0 auto",
    marginLeft: "8.6em",
    [theme.breakpoints.down('sm')]:{
      margin:0,
      width:'100%'
    }
  },
  mobileStepper: {},
  callToAction: {
    background: "url(" + callToactionImg + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "100em",
    height: "60em",
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
    fontFamily: "Lustria serif",
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
  calltoaction: {
    backgroundImage: "url(" + webdesign + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "50% 100%, cover",
    backgroundPosition: "left",
    height: "25em",
    background: "#242331",
    marginTop: "5em",
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
    width: "55%",
    marginLeft: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      marginRight: "10em",
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
}));
