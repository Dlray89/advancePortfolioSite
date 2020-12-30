import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  mainContainer: {},
  appbar: {},
  tabContainer: {
    marginLeft: "auto",
  },
  tabs: {
    ...theme.typography.links,
    fontSize: "1.1em",
  },
  buttonContainer: {
    marginLeft: "auto",
  },
  logoContainer: {
    height: "6em",
  },
  logo: {
    height: "6em",
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "1.80em",
  },
  careerTitle: {
    fontSize: "0.65em",
  },
  menuButton: {
    color: theme.palette.common.lightBrown,
    height: "1.5em",
    width: "1.5em",
    [theme.breakpoints.down("sm")]: {
      color: theme.palette.common.lightBrown,
      height: "1.5em",
      width: "1.5em",
    },
  },
  mobileDrawer: {
    background: "#eae9bb",
    color: theme.palette.common.lightBrownn,
    [theme.breakpoints.down("sm")]: {
      width: "40%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "43.8%",
    },
  },
  mobileLogo: {
    width: "25em",
    [theme.breakpoints.down("sm")]: {
      width: "22em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "16em",
    },
  },
  linksContainer: {
    textDecoration: "none",
  },
  mobileLinks: {
    color: theme.palette.common.black,
    fontSize: "1.7em",
    textAlign: "center",
  },
}));
