import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  TextField,
  Typography,
  Grid,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  CircularProgress,
  Snackbar,
} from "@material-ui/core";
import { useStyles } from "./contactButton_Style";
import Phone from "../../../asset/Social Media Logos/icons8-phone-50.png";
import Email from "../../../asset/Social Media Logos/icons8-email-50.png";
import AirplaneSend from "../../../asset/Social Media Logos/icons8-email-send-48.png";
import Cancel from "../../../asset/Social Media Logos/icons8-cancel-48.png";

const ContactButton = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    background: "",
  });

  const onChangeValidation = (event) => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );

        if (!valid) {
          setEmailHelper("Please enter an vaild email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );

        if (!valid) {
          setPhoneHelper("Please enter a valid phone number");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };

  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  const onConfirm = () => {
    setLoading(true);
    axios
      .get(
        "https://us-central1-tech-portfolio-83a00.cloudfunctions.net/sendMail",
        {
          params: {
            name: name,
            email: email,
            phone: phone,
            message: message,
          },
        }
      )
      .then((res) => {
        setLoading(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setAlert({
          open: true,
          message: "sent successfully",
          background: "#4bb543",
        });
      })
      .catch((err) => {
        setLoading(false);
        setAlert({
          open: true,
          message: "Something went wrong. Please try again",
          background: "#ff3232",
        });
      });
  };

  const buttonContents = (
    <React.Fragment>
      Send Request{" "}
      <img
        className={classes.sendIcon}
        alt="airplane send icon"
        src={AirplaneSend}
      />
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <Button
        className={classes.navButton}
        variant="outlined"
        onClick={openDialog}
      >
        Contact Me
      </Button>
      <Dialog
        style={{ marginTop: "7em", fontFamily:'Lustria serif' }}
        open={open}
        onClose={closeDialog}
        classes={{ paper: classes.dialog }}
      >
        <DialogTitle className={classes.dialogTitle}>
          <Grid container item justify="center" alignItems="center">
            <Typography className={classes.Title}>
              Lets Chat about your future and turn your vision into reality
            </Typography>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid
              container
              item
              direction="column"
              alignItems="center"
              className={classes.contactInfo}
            >
              <Grid item>
                <img
                  src={Phone}
                  alt="phone icon"
                  className={classes.contactIcons}
                />
              </Grid>
              <Grid item>
                {" "}
                <a
                  style={{ textDecoration: "none", color: "inherit" }}
                  href="tel:614.681.0179"
                >
                  614.681.0179
                </a>
              </Grid>
            </Grid>

            <Grid
              container
              item
              direction="column"
              alignItems="center"
              className={classes.contactInfo}
            >
              <Grid item>
                <img
                  src={Email}
                  alt="phone icon"
                  className={classes.contactIcons}
                />
              </Grid>
              <Grid item>
                <a
                  style={{ textDecoration: "none", color: "inherit" }}
                  href="mailto:dlrayjr89@gmail.com"
                >
                  dlrayjr89@gmail.com
                </a>{" "}
              </Grid>
            </Grid>
          </Grid>
          <Divider />

          <Grid item container direction="column" justify="center">
            <Grid item className={classes.inputContainer}>
              <TextField
                variant="outlined"
                id="name"
                margin="dense"
                className={classes.input}
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                inputProps={{
                  style:{
                    fontFamily:'Lustria serif'
                  }
                }}
              />
            </Grid>

            <Grid item className={classes.inputContainer}>
              <TextField
                variant="outlined"
                id="email"
                margin="dense"
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                className={classes.input}
                placeholder="Email"
                value={email}
                onChange={onChangeValidation}
                inputProps={{
                  style:{
                    fontFamily:'Lustria serif'
                  }
                }}
              />
            </Grid>

            <Grid item className={classes.inputContainer}>
              <TextField
                variant="outlined"
                id="phone"
                margin="dense"
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
                className={classes.input}
                placeholder="Phone Number"
                value={phone}
                onChange={onChangeValidation}
                inputProps={{
                  style:{
                    fontFamily:'Lustria serif'
                  }
                }}
              />
            </Grid>

            <Grid item className={classes.inputContainer}>
              <TextField
                variant="outlined"
                id="message"
                margin="dense"
                multiline
                rows={4}
                className={classes.input}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                inputProps={{
                  style:{
                    fontFamily:'Lustria serif'
                  }
                }}
              />
            </Grid>

            <Grid
              item
              container
              justify="space-evenly"
              className={classes.inputContainer}
            >
              <Grid item>
                <Button
                  disabled={
                    name.length === 0 ||
                    message.length === 0 ||
                    phoneHelper.length !== 0 ||
                    emailHelper.length !== 0
                  }
                  onClick={onConfirm}
                  className={classes.contactButton}
                  variant="contained"
                >
                  {loading ? (
                    <CircularProgress color="secondary" size={30} />
                  ) : (
                    buttonContents
                  )}
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className={classes.contactButton}
                  variant="contained"
                  onClick={closeDialog}
                >
                  Cancel{" "}
                  <img
                    className={classes.sendIcon}
                    alt="cancel icon"
                    src={Cancel}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <Snackbar
          open={alert.open}
          message={alert.message}
          ContentProps={{
            style: {
              background: alert.background,
              marginBottom: "2em",
              fontSize: "0.97em",
              textAlign: "center",
            },
          }}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          onClose={() => setAlert({ ...alert, open: false })}
          autoHideDuration={4000}
        />
      </Dialog>
    </React.Fragment>
  );
};
export default ContactButton;
