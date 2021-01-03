import React, { useState } from "react";
import axios from "axios";
import {
  Grid,
  Button,
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
import Responsive from "../../asset/Social Media Logos/icons8-responsive-64.png";

import Ecommerce from "../../asset/Social Media Logos/icons8-design-portal-100.png";
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
// import Cancel from "../../asset/Social Media Logos/icons8-cancel-48.png";
import CheckMark from "../../asset/Social Media Logos/icons8-check-box-with-check-48.png";
import GoBAck from '../../asset/Social Media Logos/icons8-go-back-50.png'
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
        title: "Custom Application",
        subtitle: "(Business/Organization/Brand)",
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
        subtitle: "(Business/Organization/Brand)",
        icon: Standard,
        iconAlt: "outline of two people",
        selected: false,
        cost: 200,
      },
      {
        id: 3,
        title: "Custom Application",
        subtitle: "(Sales/Responsive Design)",
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

  const [services, setServices] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [features, setFeatures] = useState([]);
  const [customFeatures, setCustomFeatures] = useState([]);
  const [category, setCategory] = useState([]);
  const [users, setUsers] = useState([]);

  const theme = useTheme();
  const mobileMd = useMediaQuery(theme.breakpoints.down("md"));
  const mobileXS = useMediaQuery(theme.breakpoints.down("xs"));
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

  const SendEstimate = () => {
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
            total: total,
            service: services,
            customFeatures: customFeatures,
            users: users,
            category: category,
            features: features,
          },
        }
      )
      .then((res) => {
        setLoading(false);
        setAlert({
          open: true,
          message: "Your estimate placed successfully",
          background: "#4bb543",
        });
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setAlert({
          open: true,
          message:
            "Something went wrong sending your estimate. Please try again!",
          background: "#ff3232",
        });
      });
  };

  const estimateDisable = () => {
    let disable = true;

    const emptySelection = questions
      .map((question) => question.options.filter((option) => option.selected))
      .filter((question) => question.length === 0);

    if (questions.length === 2) {
      if (emptySelection.length === 1) {
        disable = false;
      }
    } else if (questions.length === 1) {
      disable = true
    } else if (
      emptySelection.length < 3 &&
      questions[questions.length - 1].options.filter(
        (option) => option.selected
      ).length > 0
    ) {
      disable = false
    }

    return disable
  };

  const closeHandle = () => {
    setOpen(false);
  };

  // const buttonContents = (
  //   <React.Fragment>
  //     Send Request{" "}
  //     <img
  //       className={classes.sendIcon}
  //       alt="airplane send icon"
  //       src={AirplaneSend}
  //     />
  //   </React.Fragment>
  // );

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
        )[0][0];

      setUsers(userCost.title);
      cost -= userCost.cost;
      cost *= userCost.cost;
    }
    setTotal(cost);
    console.log(cost);
  };

  const getPlatforms = () => {
    let newPlatforms = [];

    if (questions.length > 2) {
      questions
        .filter(
          (question) =>
            question.title ===
            "What kind of Application are you looking to create?"
        )
        .map((question) =>
          question.options.filter((options) => options.selected)
        )[0]
        .map((option) => newPlatforms.push(option.title));

      setPlatforms(newPlatforms);
    }
  };

  const getFeature = () => {
    let newFeatures = [];

    if (questions.length > 2) {
      questions
        .filter(
          (question) =>
            question.title === "Which features do you expect to use?"
        )
        .map((question) => question.options.filter((option) => option.selected))
        .map((option) =>
          option.map((newFeature) => newFeatures.push(newFeature.title))
        );

      setFeatures(newFeatures);
    }
  };

  const getCustomFeature = () => {
    if (questions.length > 2) {
      const newCustomFeatures = questions
        .filter(
          (question) =>
            question.title ===
            "What type of custom features do you expect to need?"
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        )[0][0].title;

      setCustomFeatures(newCustomFeatures);
    }
  };

  const getCategory = () => {
    if (questions.length === 2) {
      const newCategory = questions
        .filter(
          (question) =>
            question.title === "Which type of website are you wanting?"
        )[0]
        .options.filter((option) => option.selected)[0].title;

      setCategory(newCategory);
    }
  };

  const softwareSelection = (
    <Grid
      className={classes.softwareSelection}
      item
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid
        className={classes.softwareSelectionFirstCheck}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <img
            alt="icon of a check mark"
            src={CheckMark}
            className={classes.softwareFirstCheckIcon}
          />
        </Grid>

        <Grid item className={classes.softwareFirstCheckContent}>
          You want a {services}
          {platforms.length > 0
            ? ` about the following ${
                //if only web application is selected...
                platforms.indexOf("Web Application") > -1 &&
                platforms.length === 1
                  ? //then finish sentence here
                    "that consist of the following Custom Application."
                  : //otherwise, if web application and another s is selected...
                  platforms.indexOf("Custom Application, ") > -1 &&
                    platforms.length === 2
                  ? //then finish the sentence here
                    `Custom Application, and a ${platforms[1]}.`
                  : //otherwise, if only one platform is selected which isn't web application...
                  platforms.length === 1
                  ? //then finish the sentence here
                    `${platforms[0]}`
                  : //otherwise, if other two options are selected...
                  platforms.length === 2
                  ? //then finish the sentence here
                    "Project Management, and a Blog Application."
                  : //otherwise if all three are selected...
                  platforms.length === 3
                  ? //then finish the sentence here
                    "Custom Applicaiton, Project Management, and a Blog Application."
                  : null
              }`
            : null}
        </Grid>
      </Grid>

      <Grid
        className={classes.softwareSelectionsecondCheck}
        item
        container
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <img
            alt="icon of a check mark"
            src={CheckMark}
            className={classes.softwareSecondCheckIcon}
          />
        </Grid>
        <Grid item className={classes.softwareSecondCheckContent}>
          {"with "}
          {/* if we have features... */}
          {features.length > 0
            ? //...and there's only 1...
              features.length === 1
              ? //then end the sentence here
                `${features[0]}.`
              : //otherwise, if there are two features...
              features.length === 2
              ? //...then end the sentence here
                `${features[0]} and ${features[1]}.`
              : //otherwise, if there are three or more features...
                features
                  //filter out the very last feature...
                  .filter((feature, index) => index !== features.length - 1)
                  //and for those features return their name...
                  .map((feature, index) => (
                    <span key={index}>{`${feature}, `}</span>
                  ))
            : null}
          {features.length > 0 && features.length !== 1 && features.length !== 2
            ? //...and then finally add the last feature with 'and' in front of it
              ` and ${features[features.length - 1]}.`
            : null}
        </Grid>
      </Grid>

      <Grid
        className={classes.softwareSelectionThirdCheck}
        container
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <img
            alt="icon of a check mark"
            src={CheckMark}
            className={classes.softwareThirdCheckIcon}
          />
        </Grid>
        <Grid className={classes.softwareThirdCheckContent} item>
          the custome feature will be of {customFeatures}
          {`, and the project will be use by about ${users} users. `}
        </Grid>
      </Grid>
    </Grid>
  );

  const websiteSelection = (
    <Grid
      item
      container
      direction={mobileXS ? "column" : "row"}
      justify="center"
      alignItems="center"
      className={classes.webSelectionContainer}
    >
      <Grid className={classes.webSelectioniconContainer} item>
        <img
          alt="icon of a check mark"
          src={CheckMark}
          className={classes.webSelectionIcon}
        />
      </Grid>

      <Grid className={classes.webSelectionContentContainer} item>
        You want{" "}
        {category === "Online Portfolio"
          ? "a Porfolio Website"
          : `an ${category} Website.`}
      </Grid>
    </Grid>
  );

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
        setServices(newSelected.title);
        setPlatforms([]);
        setFeatures([]);
        setCustomFeatures("");
        setCategory("");
        setUsers("");
        break;
      case "Front-End Application":
        setQuestions(softwareQuestions);
        setServices(newSelected.title);
        setPlatforms([]);
        setFeatures([]);
        setCustomFeatures("");
        setCategory("");
        setUsers("");
        break;
      case "Responsive Design":
        setQuestions(websiteQuestions);
        setServices(newSelected.title);
        setPlatforms([]);
        setFeatures([]);
        setCustomFeatures("");
        setCategory("");
        setUsers("");
        break;
      default:
        setQuestions(newQuestions);
    }
  };

  const handleCancel = () => {
    setOpen(false)
    setMessage('')
    setName('')
    setMessage('')
    setEmail('')
    setPhone('')
  }

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
            <div>Let's get started</div>
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
                  <div className={classes.mainQuestion}>{question.title}</div>
                  <div style={{ marginBottom: "3em", fontFamily:'Lustria serif' }}>{question.subtitle}</div>
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
                        <div>{item.title}</div>
                        <div>{item.subtitle}</div>
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
                disabled={estimateDisable()}
                variant="contained"
                onClick={() => {
                  setOpen(true);
                  getTotal();
                  getPlatforms();
                  getFeature();
                  getCustomFeature();
                  getCategory();
                }}
                className={classes.getEstimateButton}
              >
                Get Estimate
              </Button>
              <Dialog
                style={{ marginTop: "5em", fontFamily:'Lustria serif' }}
                open={open}
                onClose={closeHandle}
              >
                <DialogTitle>
                  <Grid container justify="center" alignItems="center">
                    <Grid item>
                      <div style={{ fontSize: "0.65em", textAlign: "center", fontFamily:'Lustria serif' }}>
                        Below is your estimate for your digital product. Please
                        review before sending a request!
                      </div>
                    </Grid>
                  </Grid>
                </DialogTitle>

                <DialogContent>
                  <Grid container item direction="column">
                    <Grid
                      style={{
                        width: "100%",
                        color: theme.palette.common.lightBrown,
                        background: theme.palette.common.black,
                        padding: "0.55em",
                        borderRadius: "0.35em",
                      }}
                      container
                      item
                      direction="row"
                      justify="space-evenly"
                      alignItems="center"
                    >
                      <Grid container item style={{ width: "35%" }}>
                        <Grid
                          item
                          container
                          direction="column"
                          justify="center"
                          alignItems="center"
                          className={classes.total}
                        >
                          <Grid item className={classes.solutionContainer}>
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

                      <Grid item style={{ width: "65%" }}>
                        {questions.length > 2
                          ? softwareSelection
                          : websiteSelection}
                      </Grid>
                    </Grid>
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
                          inputProps={{
                            style:{
                              fontFamily:'Lustria serif'
                            }
                          }}
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
                          inputProps={{
                            style:{
                              fontFamily:'Lustria serif'
                            }
                          }}
                          
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
                          inputProps={{
                            style:{
                              fontFamily:'Lustria serif'
                            }
                          }}
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
                          placeholder="Tell me more about your project"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          inputProps={{
                            style:{
                              fontFamily:'Lustria serif'
                            }
                          }}
                        />
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

                  <Grid
                    className={classes.sendEstimateButtonContainer}
                    item
                    style={{ marginBottom: "0.55em" }}
                  >
                    <Button
                      className={classes.sendEstimateButton}
                      variant="contained"
                      onClick={SendEstimate}
                      disabled={
                        name.length === 0 ||
                        message.length === 0 ||
                        phoneHelper.length !== 0 ||
                        emailHelper.length !== 0
                      }
                    >
                      {loading ? (
                        <CircularProgress />
                      ) : (
                        <React.Fragment>
                          Send Request
                          <img
                            className={classes.sendIcon}
                            alt="airplane send icon"
                            src={AirplaneSend}
                          />
                        </React.Fragment>
                      )}
                    </Button>
                  </Grid>
                  <Grid item className={classes.goBackButton}>
                    <Button onClick={handleCancel}>Cancel</Button>
                  </Grid>
                  <Grid justify="center" container item>
                    <div style={{ fontSize: "0.60em", fontFamily:'Lustria serif' }}>
                      {" "}
                      &copy; 2020 Dapnologies
                    </div>
                  </Grid>
                </DialogContent>
              </Dialog>
              <Snackbar
                open={alert.open}
                message={alert.message}
                ContentProps={{
                  style: {
                    background: alert.background,
                    marginBottom: "2em",
                    fontSize: "0.97em",
                    textAlign: "center",
                    fontFamily:'Lustria serif'
                  },
                }}
                anchorOrigin={{ vertical: "bottom", horizontal: "center", fontFamily:'Lustria serif' }}
                onClose={() => setAlert({ ...alert, open: false })}
                autoHideDuration={4000}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default GetStartedPage;
