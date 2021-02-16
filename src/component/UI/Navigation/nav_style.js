import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
    background: "white",
    [theme.breakpoints.down("sm")]: {
    },
  },
  tabContainer: {
    marginLeft: "20em",
  },
  tabs: {
    ...theme.typography.links,
    fontSize: "1.1em",
  },
  buttonContainer: {
    marginLeft: "auto",
  },
  logoContainer: {
    height: "4em",
    [theme.breakpoints.down("sm")]: {
    },
  },
  logo: {
    marginLeft: "4em",
    width:'13em',
    [theme.breakpoints.down("sm")]: {
      width: "10em",
      height: "3em",
      margin: 0,
      marginLeft:'1em'
    },
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
    [theme.breakpoints.down("sm")]: {
      width: "23%",
    },

    [theme.breakpoints.down("xs")]: {
      width: "42%",
    },
  },
  mobileLogo: {
    width: "25em",
    [theme.breakpoints.down("sm")]: {
      width: "22em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "12.2em",
    },
  },
  linksContainer: {
    textDecoration: "none",
  },
  mobileLinks: {
    color: "white",
    fontSize: "1.7em",
    textAlign: "center",
    fontFamily: "Lustria serif",
  },
}));
