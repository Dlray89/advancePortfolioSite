import React, { useState } from "react";
import axios from "axios";
import {
  Grid,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  Snackbar,
  CircularProgress,
  TextField,
} from "@material-ui/core";
import { cloneDeep } from "lodash";
import { useStyles } from "./GetStartedStyling";
import GettingStarted from "../../asset/images/callToAction.jpg";

import WebDesignIcon from "../../asset/Social Media Logos/icons8-web-64 (1).png";
import WebApp from "../../asset/Social Media Logos/icons8-apps-tab-48.png";
import Responsive from "../../asset/Social Media Logos/icons8-responsive-16.png";

import Ecommerce from "../../asset/Social Media Logos/icons8-e-commerce-64.png";
import ProjectManagement from "../../asset/Social Media Logos/icons8-project-management-48.png";
import Blog from "../../asset/Social Media Logos/icons8-blog-100.png";
import Feedback from "../../asset/Social Media Logos/icons8-feedback-64.png";
import Contact from "../../asset/Social Media Logos/icons8-phone-64.png";
import Search from "../../asset/Social Media Logos/icons8-search-more-100.png";
import SocialIntegration from "../../asset/Social Media Logos/icons8-social-network-64.png";
import PushNotification from "../../asset/Social Media Logos/icons8-topic-push-notification-48.png";
import Validation from "../../asset/Social Media Logos/icons8-validation-64.png";
import Information from "../../asset/Social Media Logos/icons8-information-50.png";
import Toggle from "../../asset/Social Media Logos/icons8-toggle-on-64.png";
import Graph from "../../asset/Social Media Logos/icons8-graph-report-64.png";
import SinglePerson from "../../asset/Social Media Logos/icons8-account-100.png";
import TwoPerson from "../../asset/Social Media Logos/icons8-tall-person-100.png";
import ThreePerson from "../../asset/Social Media Logos/icons8-people-working-together-100.png";
import Portfolio from "../../asset/Social Media Logos/icons8-resume-website-100.png";
import Standard from "../../asset/Social Media Logos/icons8-website-48.png";

import LeftArrow from "../../asset/technologiesIcons/icons8-left-arrow-100.png";
import RightArrow from "../../asset/technologiesIcons/icons8-right-arrow-100 (1).png";
import disableArrowLeft from "../../asset/Social Media Logos/icons8-arrow-disable-left-100.png";
import disableArrowRight from "../../asset/Social Media Logos/icons8-arrow-disable-right-100.png";
import AirplaneSend from "../../asset/Social Media Logos/icons8-email-send-48.png";
import Cancel from "../../asset/Social Media Logos/icons8-cancel-48.png";

const Questions = [
  {
    id: 1,
    title: "Which service are you looking for?",
    active: true,
    options: [
      {
        id: 1,
        title: "Website Development",
        subtitle: null,
        icon: WebDesignIcon,
        iconAlt: "Icon of a desktop with layout",
        selected: false,
        cost: 0,
      },
      {
        id: 2,
        title: "Front-End Application",
        subtitle: null,
        icon: WebApp,
        iconAlt: "icon of mobile app tabs",
        selected: false,
        cost: 0,
      },
      {
        id: 3,
        title: "Responsive Design",
        subtitle: null,
        icon: Responsive,
        iconAlt: "icon of deaktop displaying mobile responsiness",
        selected: false,
        cost: 0,
      },
    ],
  },
];

const softwareQuestions = [
  { ...Questions[0], active: false },
  {
    id: 2,
    title: "What kind of Application are you looking to create?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "E-Commerce Application",
        subtitle: null,
        icon: Ecommerce,
        iconAlt: "computer outline",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "Project Management Application",
        subtitle: null,
        icon: ProjectManagement,
        iconAlt: "outline of iphone",
        selected: false,
        cost: 100,
      },
      {
        id: 3,
        title: "Blog Application",
        subtitle: null,
        icon: Blog,
        iconAlt: "outlines of android phone",
        selected: false,
        cost: 100,
      },
    ],
    active: true,
  },
  {
    id: 3,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "User FeedBack",
        subtitle: null,
        icon: Feedback,
        iconAlt: "camera outline",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Searching Options",
        subtitle: null,
        icon: Search,
        iconAlt: "gps pin",
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: "One Click Contacting",
        subtitle: null,
        icon: Contact,
        iconAlt: "outline of cloud with arrow pointing up",
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 4,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Users/Authentication",
        subtitle: null,
        icon: Validation,
        iconAlt: "outline of a person with a plus sign",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Social Intergration",
        subtitle: null,
        icon: SocialIntegration,
        iconAlt: "fingerprint",
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: "Push Notifications",
        subtitle: null,
        icon: PushNotification,
        iconAlt: "outline of a bell",
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 5,
    title: "What type of custom features do you expect to need?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Low Complexity",
        subtitle: "(Informational)",
        icon: Information,
        iconAlt: "'i' inside a circle",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Medium Complexity",
        subtitle: "(Interactive, Customizable, Realtime)",
        icon: Toggle,
        iconAlt: "two toggle switches",
        selected: false,
        cost: 50,
      },
      {
        id: 3,
        title: "High Complexity",
        subtitle: "(Data Modeling and Computation)",
        icon: Graph,
        iconAlt: "outline of line graph",
        selected: false,
        cost: 100,
      },
    ],
    active: false,
  },
  {
    id: 6,
    title: "How many users do you expect?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "0-10",
        subtitle: null,
        icon: SinglePerson,
        iconAlt: "person outline",
        selected: false,
        cost: 1,
      },
      {
        id: 2,
        title: "10-100",
        subtitle: null,
        icon: TwoPerson,
        iconAlt: "outline of two people",
        selected: false,
        cost: 1.25,
      },
      {
        id: 3,
        title: "100+",
        subtitle: null,
        icon: ThreePerson,
        iconAlt: "outline of three people",
        selected: false,
        cost: 1.5,
      },
    ],
    active: false,
  },
];

const websiteQuestions = [
  { ...Questions[0], active: false },
  {
    id: 2,
    title: "Which type of website are you wanting?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Online Portfolio",
        subtitle: "(Informational)",
        icon: Portfolio,
        iconAlt: "person outline",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "Industry Standard",
        subtitle: "(Website for your current industry)",
        icon: Standard,
        iconAlt: "outline of two people",
        selected: false,
        cost: 200,
      },
      {
        id: 3,
        title: "E-Commerce",
        subtitle: "(Sales)",
        icon: Ecommerce,
        iconAlt: "outline of three people",
        selected: false,
        cost: 250,
      },
    ],
    active: true,
  },
];

const GetStartedPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mobileMd = useMediaQuery(theme.breakpoints.down("md"));
  const [questions, setQuestions] = useState(Questions);
  const [open, setOpen] = useState(false);
  const [total, setTotal] = useState(0);
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

 
  const closeHandle = () => {
    setOpen(false);
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

  const getTotal = () => {
    let cost = 0;

    const selections = questions
      .map((question) => question.options.filter((option) => option.selected))
      .filter((question) => question.length > 0);

    selections.map((options) => options.map((option) => (cost += option.cost)));

    if (questions.length > 2) {
      const userCost = questions
        .filter(
          (question) => question.title === "How many users do you expect?"
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        )[0][0].cost;

      cost -= userCost;
      cost *= userCost;
    }
    setTotal(cost);
    console.log(cost);
  };

  const nextQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;

    const nextIndex = activeIndex + 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

    setQuestions(newQuestions);
  };

  const prevQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;

    const nextIndex = activeIndex - 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

    setQuestions(newQuestions);
  };

  const navigationPrevDisable = () => {
    const currentlyActive = questions.filter((question) => question.active);

    if (currentlyActive[0].id === 1) {
      return true;
    } else {
      return false;
    }
  };

  const navigationNextDisable = () => {
    const currentlyActive = questions.filter((question) => question.active);

    if (currentlyActive[0].id === questions[questions.length - 1].id) {
      return true;
    } else {
      return false;
    }
  };

  const HandleSelect = (id) => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;

    const newSelected = newQuestions[activeIndex].options[id - 1];
    const prevSelected = currentlyActive[0].options.filter(
      (option) => option.selected
    );

    switch (currentlyActive[0].subtitle) {
      case "Select one.":
        if (prevSelected[0]) {
          prevSelected[0].selected = !prevSelected[0].selected;
        }
        newSelected.selected = !newSelected.selected;
        break;
      default:
        newSelected.selected = !newSelected.selected;
        break;
    }

    switch (newSelected.title) {
      case "Website Development":
        setQuestions(websiteQuestions);
        break;
      case "Front-End Application":
        setQuestions(softwareQuestions);
        break;
      case "Responsive Design":
        setQuestions(websiteQuestions);
        break;
      default:
        setQuestions(newQuestions);
    }
  };

  return (
    <div className={classes.getEstimate}>
      <Grid
        className={classes.mainGridContainer}
        direction={mobileMd ? "column" : "row"}
        justify="space-between"
        alignItems="center"
        item
        container
      >
        <Grid
          direction="column"
          justify="center"
          alignItems="flex-start"
          className={classes.GettingStartedImgContainer}
          item
          container
        >
          <Grid className={classes.getStartedTitle} item>
            <Typography>Let's get started</Typography>
          </Grid>

          <Grid className={classes.imgContainer} item>
            <img className={classes.img} alt="" src={GettingStarted} />
          </Grid>
        </Grid>

        <Grid className={classes.questionContainer} container item>
          {questions
            .filter((question) => question.active)
            .map((question) => (
              <Grid
                key={question.id}
                container
                justify="center"
                alignItems="center"
                item
              >
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  item
                >
                  <Typography className={classes.mainQuestion}>
                    {question.title}
                  </Typography>
                  <Typography style={{ marginBottom: "3em" }} gutterBottom>
                    {question.subtitle}
                  </Typography>
                </Grid>

                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  item
                >
                  {question.options.map((item) => (
                    <Grid
                      key={item.id}
                      className={classes.servicesContainer}
                      container
                      direction="column"
                      justify="center"
                      alignItems="center"
                      item
                      component={Button}
                      style={{
                        display: "grid",
                        textTransform: "none",
                        background: item.selected
                          ? theme.palette.common.lightBrown
                          : null,
                        borderRadius: 0,
                      }}
                      onClick={() => HandleSelect(item.id)}
                    >
                      <Grid className={classes.services}>
                        <Typography>{item.title}</Typography>
                        <Typography>{item.subtitle}</Typography>
                      </Grid>
                      <Grid item>
                        <img
                          className={classes.servicesIcons}
                          alt={item.iconAlt}
                          src={item.icon}
                        />
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            ))}
          <Grid justify="center" alignItems="center" item container>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
              item
            >
              <Grid item>
                <IconButton
                  disabled={navigationPrevDisable()}
                  onClick={prevQuestion}
                >
                  <img
                    className={classes.arrows}
                    src={navigationPrevDisable() ? disableArrowLeft : LeftArrow}
                    alt="icon of a left arrow"
                  />
                </IconButton>
              </Grid>

              <Grid item>
                <IconButton
                  onClick={nextQuestion}
                  disabled={navigationNextDisable()}
                >
                  <img
                    className={classes.arrows}
                    src={
                      navigationNextDisable() ? disableArrowRight : RightArrow
                    }
                    alt="icon of a right arrow"
                  />
                </IconButton>
              </Grid>
            </Grid>

            <Grid item style={{ marginTop: "2em" }}>
              <Button
                variant="contained"
                onClick={() => {
                  setOpen(true);
                  getTotal();
                }}
              >
                Estimate
              </Button>
              <Dialog
                style={{ marginTop: "5em" }}
                open={open}
                onClose={closeHandle}
              >
                <DialogTitle>
                  <Grid container justify="center" alignItems="center">
                    <Grid item>
                      <Typography>
                        Your estimate for your digital product.
                      </Typography>
                    </Grid>
                  </Grid>
                </DialogTitle>

                <DialogContent>
                  <Grid container item direction="column">
                    <Grid item container direction="column" justify="center">
                      <Grid
                        container
                        justify="center"
                        alignItems="center"
                        item
                        className={classes.inputContainer}
                      >
                        <TextField
                          variant="outlined"
                          id="name"
                          margin="dense"
                          className={classes.input}
                          placeholder="Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </Grid>

                      <Grid
                        container
                        justify="center"
                        item
                        className={classes.inputContainer}
                      >
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
                        />
                      </Grid>

                      <Grid
                        container
                        justify="center"
                        item
                        className={classes.inputContainer}
                      >
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
                        />
                      </Grid>

                      <Grid
                        container
                        justify="center"
                        item
                        className={classes.inputContainer}
                      >
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
                        />
                      </Grid>
                      <Grid
                        container
                        item
                        direction="column"
                        justify="center"
                        alignItems="center"
                      >
                        <Grid
                          item
                          container
                          direction="column"
                          justify="center"
                          alignItems="center"
                          className={classes.total}
                        >
                          <Grid item>
                            We can create this digital solution for an
                            estimated:{" "}
                          </Grid>
                          <Grid item>
                            {" "}
                            <span className={classes.specialText}>
                              {" "}
                              ${total.toFixed(2)}
                            </span>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          item
                          justify="center"
                          alignItems="center"
                          className={classes.totalSubtitle}
                        >
                          Fill out your name, phone number, and email, place
                          your request, and we'll get back to you with details
                          moving forward and a final price.
                        </Grid>
                      </Grid>

                      <Grid
                        item
                        container
                        justify="space-evenly"
                        alignItems="center"
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
                            onClick={closeHandle}
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
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      onClose={() => setAlert({ ...alert, open: false })}
                      autoHideDuration={4000}
                    />
                  </Grid>
                  <Grid justify="center" container item>
                    <div style={{ fontSize: "0.60em" }}>
                      {" "}
                      &copy; 2020 Dapnologies
                    </div>
                  </Grid>
                </DialogContent>
              </Dialog>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default GetStartedPage;
