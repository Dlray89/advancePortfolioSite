import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  navButton: {
    background: '#558c8c',
    color: 'White',
    marginRight: "3em",
    marginLeft: '2em',
    fontFamily:'Lustria serif',
    
    [theme.breakpoints.down('sm')]:{
        margin: '0 auto'
    },
    "&:hover": {
      background: theme.palette.common.lightBrown,
      color: 'white',
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
    fontSize:'0.8em'
  },
  contactButton:{
      background: theme.palette.common.black,
      color: theme.palette.common.lightBrown,
      marginTop:'1em',
      fontFamily:'Lustria serif',
      fontSize:'0.75em'
      
  },
  sendIcon:{
      height:'2em',
      marginLeft:'0.25em'
  },
  Title:{
    fontSize:'0.9em',
    textAlign:'center',
    fontFamily:'Lustria serif'
  }

}));
