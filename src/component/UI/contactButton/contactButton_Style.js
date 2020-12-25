import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  navButton: {
    background: theme.palette.common.lightBrown,
    color: theme.palette.common.black,
    marginRight: "3em",
    "&:hover": {
      borderColor: theme.palette.common.lightBrown,
      color: theme.palette.common.lightBrown,
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.lightBrown}`,
    marginTop: "2em",
    borderRadius: 5,
  },
  dialog: {
    width: "100%" },
    dialogTitle: {
    fontSize: "2em",
  },
  contactInfo: {
    width: "30%",
    fontSize: "0.75em",
  },

  contactIcons: {
    height: "4em",
  },
  inputContainer: {
    textAlign: "center",
  },
  input: {
    width: "90%",
    fontSize:'1.5em'
  },
  contactButton:{
      background: theme.palette.common.black,
      color: theme.palette.common.lightBrown,
      marginTop:'1em'
  },
  sendIcon:{
      height:'2em',
      marginLeft:'0.25em'
  }
}));
