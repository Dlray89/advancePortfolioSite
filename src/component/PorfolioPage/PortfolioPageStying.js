import { makeStyles } from "@material-ui/core";
import PortfolioImg from "../../asset/images/portImg.jpg";
import callToactionImg from "../../asset/images/callToAction.jpg";

export const useStyle = makeStyles((theme) => ({
  Portfolio: {
    backgroundImage: "url(" + PortfolioImg + ")",
    height: "25em",
    backgroundRepeat: "no-repeat",
    backgroundSize: "96em",
    backgroundPositionY: "-25em",
    backgroundPosition: "center",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "url(" + PortfolioImg + ")",
      backgroundSize: "100%",
      backgroundPosition: "center",
      backgroundPositionY: "-0em",
      height: "29em",
    },
    [theme.breakpoints.down("xs")]: {
      backgroundImage: "url(" + PortfolioImg + ")",
      backgroundSize: "100%",
      backgroundPosition: "center",
      backgroundPositionY: "0em",
      height: "20em",
    },
  },
  searchContainer: {
    textAlign: "center",
    background: theme.palette.common.lightBrown,
    padding: "2em",
  },
  searchBar: {
    width: "20em",
  },
  searchIcon: {
    color: theme.palette.common.black,
  },

  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
    },
  },
  card: {
    margin: "2% auto",
    background: "#242331",
    width: "40%",
    [theme.breakpoints.down("md")]: {
      width: "97.5%",
      margin: "2em auto",
      marginLeft: "1.22em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "95%",
      margin: "2em auto",
    },
    [theme.breakpoints.down("xs")]: {
      width: "95%",
      margin: "2em auto",
    },
  },
  cardHeader: {
    textAlign: "center",
  },
  projectImages: {
    width: "40em",
    [theme.breakpoints.down("md")]: {
      width: "77.1em",
      textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
      width: "56em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "36em",
    },
  },
  contentContainer: {
    width: "94%",
    margin: "0 auto",
  },
  contentGridContainer: {
    width: "95%",
  },
  contentDetails: {
    color: theme.palette.common.lightBrown,
    padding: "1em",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      marginLeft: "2em",
      width: "100%",
    },
  },

  imgContainer: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  techIcons: {
    height: "3em",
  },

  buttonMainContainer: {
    width: "100%",

    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      width: "100%",
    },
  },
  buttonContainers: {
    margin: "0.15em 0%",
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {
    },
  },
  buttons: {
    background: "#558c8c",
    color: "White",
    width: "33em",
    "&:hover": {
      background: theme.palette.common.lightBrown,
      color: "white",
    },

    [theme.breakpoints.down("md")]: {
      width: "30em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "19em",
    },
  },
  callToAction: {
    background: "url(" + callToactionImg + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "100em",
    height: "60em",
    position: "relative",
    marginTop: "1em",
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
