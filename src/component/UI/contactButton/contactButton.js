import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Grid,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import { useStyles } from "./contactButton_Style";
import Phone from "../../../asset/Social Media Logos/icons8-phone-50.png";
import Email from "../../../asset/Social Media Logos/icons8-email-50.png";
import website from "../../../asset/Social Media Logos/icons8-website-50.png";
import AirplaneSend from "../../../asset/Social Media Logos/icons8-email-send-48.png";
import Cancel from "../../../asset/Social Media Logos/icons8-cancel-48.png";



const ContactButton = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };


  return (
    <React.Fragment>
      <Button
        className={classes.navButton}
        variant="outlined"
        onClick={openDialog}
      >
        Contact Me
      </Button>
      <Dialog open={open} onClose={closeDialog} classes={{paper: classes.dialog}}>
        <DialogTitle className={classes.dialogTitle}>
          <Typography >
            Lets Chat about your future and turn your vision into reality
          </Typography>
          
        </DialogTitle>
        <DialogContent>
          <Grid container direction='row' justify='center'>
          <Grid container item direction='row' alignItems='center' className={classes.contactInfo}>
            <Grid item>
              <img src={Phone} alt='phone icon' className={classes.contactIcons}  />
            </Grid>
            <Grid item>614.681.0179</Grid>
          </Grid>

          <Grid container item direction='row' alignItems='center' className={classes.contactInfo}>
            <Grid item>
              <img src={Email} alt='phone icon' className={classes.contactIcons}  />
            </Grid>
            <Grid item>dlrayjr89@gmail.com</Grid>
          </Grid>

          <Grid container item direction='row' alignItems='center' className={classes.contactInfo}>
            <Grid item>
              <img src={website} alt='phone icon' className={classes.contactIcons}  />
            </Grid>
            <Grid item>www.dapthedev.com</Grid>
          </Grid>

          </Grid>

          <Grid item container direction='column' justify='center' style={{border:'solid 2px yellow'}}>
            <Grid item className={classes.inputContainer} >
              <TextField margin='dense' className={classes.input} placeholder='name' value={name} onChange={(e) => setName(e.target.value)}  />
            </Grid>

            <Grid item  className={classes.inputContainer} >
              <TextField margin='dense' className={classes.input} placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}  />
            </Grid>

            <Grid item  className={classes.inputContainer} >
              <TextField margin='dense' className={classes.input} placeholder='phone number' value={phone} onChange={(e) => setPhone(e.target.value)}  />
            </Grid>

            <Grid item  className={classes.inputContainer} >
              <TextField margin='dense' multiline rows={10} className={classes.input} placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}  />
            </Grid>

            <Grid item container justify='space-evenly' className={classes.inputContainer} >
              <Grid item>
              <Button className={classes.contactButton} variant='contained'>Send Request <img className={classes.sendIcon} alt='airplane send icon' src={AirplaneSend}  /></Button>
            
              </Grid>
              <Grid item>
                  <Button className={classes.contactButton} variant='contained' onClick={closeDialog}>Cancel <img className={classes.sendIcon} alt='cancel icon' src={Cancel}  /></Button>
              </Grid>
              </Grid>
          </Grid>
      
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};
export default ContactButton;
