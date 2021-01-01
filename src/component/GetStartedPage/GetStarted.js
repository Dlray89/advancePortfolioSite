import React, { useState } from "react";
import {
  Grid,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@material-ui/core";
import { cloneDeep } from 'lodash'
import { useStyles } from "./GetStartedStyling";
import GettingStarted from "../../asset/images/callToAction.jpg";

import WebDesignIcon from "../../asset/Social Media Logos/icons8-web-64 (1).png";
import WebApp from "../../asset/Social Media Logos/icons8-apps-tab-48.png";
import Responsive from "../../asset/Social Media Logos/icons8-responsive-16.png";

import Ecommerce from "../../asset/Social Media Logos/icons8-e-commerce-64.png";
import ProjectManagement from "../../asset/Social Media Logos/icons8-project-management-48.png";
import Blog from "../../asset/Social Media Logos/icons8-blog-100.png";
import Feedback from '../../asset/Social Media Logos/icons8-feedback-64.png'
import Contact from '../../asset/Social Media Logos/icons8-phone-64.png'
import Search from '../../asset/Social Media Logos/icons8-search-more-100.png'
import SocialIntegration from '../../asset/Social Media Logos/icons8-social-network-64.png'
import PushNotification from '../../asset/Social Media Logos/icons8-topic-push-notification-48.png'
import Validation from '../../asset/Social Media Logos/icons8-validation-64.png'
import Information from '../../asset/Social Media Logos/icons8-information-50.png'
import Toggle from '../../asset/Social Media Logos/icons8-toggle-on-64.png'
import Graph from '../../asset/Social Media Logos/icons8-graph-report-64.png'
import SinglePerson from '../../asset/Social Media Logos/icons8-account-100.png'
import TwoPerson from '../../asset/Social Media Logos/icons8-tall-person-100.png'
import ThreePerson from '../../asset/Social Media Logos/icons8-people-working-together-100.png'

import LeftArrow from "../../asset/technologiesIcons/icons8-left-arrow-100.png";
import RightArrow from "../../asset/technologiesIcons/icons8-right-arrow-100 (1).png";
import disableArrowLeft from '../../asset/Social Media Logos/icons8-arrow-disable-left-100.png'
import disableArrowRight from '../../asset/Social Media Logos/icons8-arrow-disable-right-100.png'
const Questions = [
  {
    id: 1,
    title: "Which service are you looking for?",
    active: true,
    options: [
      {
        id: 2,
        title: "Website Development",
        subtitle: null,
        icon: WebDesignIcon,
        iconAlt: "Icon of a desktop with layout",
        selected: false,
        cost: 0,
      },
      {
        id: 3,
        title: "Front-End Application",
        subtitle: null,
        icon: WebApp,
        iconAlt: "icon of mobile app tabs",
        selected: false,
        cost: 0,
      },
      {
        id: 4,
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
          cost: 100
        },
        {
          id: 2,
          title: "Project Management Application",
          subtitle: null,
          icon: ProjectManagement,
          iconAlt: "outline of iphone",
          selected: false,
          cost: 100
        },
        {
          id: 3,
          title: "Blog Application",
          subtitle: null,
          icon: Blog,
          iconAlt: "outlines of android phone",
          selected: false,
          cost: 100
        }
      ],
      active: true
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
          cost: 25
        },
        {
          id: 2,
          title: "Searching Options",
          subtitle: null,
          icon: Search,
          iconAlt: "gps pin",
          selected: false,
          cost: 25
        },
        {
          id: 3,
          title: "One Click Contacting",
          subtitle: null,
          icon: Contact,
          iconAlt: "outline of cloud with arrow pointing up",
          selected: false,
          cost: 25
        }
      ],
      active: false
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
          cost: 25
        },
        {
          id: 2,
          title: "Social Intergration",
          subtitle: null,
          icon: SocialIntegration,
          iconAlt: "fingerprint",
          selected: false,
          cost: 25
        },
        {
          id: 3,
          title: "Push Notifications",
          subtitle: null,
          icon: PushNotification,
          iconAlt: "outline of a bell",
          selected: false,
          cost: 25
        }
      ],
      active: false
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
          cost: 25
        },
        {
          id: 2,
          title: "Medium Complexity",
          subtitle: "(Interactive, Customizable, Realtime)",
          icon: Toggle,
          iconAlt: "two toggle switches",
          selected: false,
          cost: 50
        },
        {
          id: 3,
          title: "High Complexity",
          subtitle: "(Data Modeling and Computation)",
          icon: Graph
          ,
          iconAlt: "outline of line graph",
          selected: false,
          cost: 100
        }
      ],
      active: false
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
          cost: 1
        },
        {
          id: 2,
          title: "10-100",
          subtitle: null,
          icon: TwoPerson,
          iconAlt: "outline of two people",
          selected: false,
          cost: 1.25
        },
        {
          id: 3,
          title: "100+",
          subtitle: null,
          icon: ThreePerson,
          iconAlt: "outline of three people",
          selected: false,
          cost: 1.5
        }
      ],
      active: false
    }
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
          title: "Basic",
          subtitle: "(Informational)",
          icon: null,
          iconAlt: "person outline",
          selected: false,
          cost: 100
        },
        {
          id: 2,
          title: "Interactive",
          subtitle: "(Users, API's, Messaging)",
          icon: null,
          iconAlt: "outline of two people",
          selected: false,
          cost: 200
        },
        {
          id: 3,
          title: "E-Commerce",
          subtitle: "(Sales)",
          icon: null,
          iconAlt: "outline of three people",
          selected: false,
          cost: 250
        }
      ],
      active: true
    }
  ];
  
  
const GetStartedPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mobileMd = useMediaQuery(theme.breakpoints.down("md"));
  const [questions, setQuestions] = useState(softwareQuestions)


  const nextQuestion = () => {
    const newQuestions = cloneDeep(questions)
    const currentlyActive = newQuestions.filter(question => question.active)
    const activeIndex = currentlyActive[0].id - 1

    const nextIndex = activeIndex + 1

    newQuestions[activeIndex] = {...currentlyActive[0], active: false}
    newQuestions[nextIndex] = {...newQuestions[nextIndex], active: true}

    setQuestions(newQuestions)
}


const prevQuestion = () => {
    const newQuestions = cloneDeep(questions)
    const currentlyActive = newQuestions.filter(question => question.active)
    const activeIndex = currentlyActive[0].id - 1

    const nextIndex = activeIndex - 1

    newQuestions[activeIndex] = {...currentlyActive[0], active: false}
    newQuestions[nextIndex] = {...newQuestions[nextIndex], active: true}

    setQuestions(newQuestions)
}

const navigationPrevDisable = () => {
    const currentlyActive = questions.filter(question => question.active)

    if (currentlyActive[0].id === 1){
        return true;

    } else {
        return false
    }

}

const navigationNextDisable = () => {
    const currentlyActive = questions.filter(question => question.active)

    if (currentlyActive[0].id === questions[questions.length - 1].id){
        return true;

    } else {
        return false
    }

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
            <Typography>Let's get started</Typography>
          </Grid>

          <Grid className={classes.imgContainer} item>
            <img className={classes.img} alt="" src={GettingStarted} />
          </Grid>
        </Grid>

        <Grid className={classes.questionContainer} container item>
          {questions.filter((question) => question.active).map((question) => (
            <Grid
              key={question.id}
              container
              justify="center"
              alignItems="center"
              item
            >
              <Grid item>
                <Typography className={classes.mainQuestion}>
                  {question.title} <br />
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
                  >
                    <Grid className={classes.services}>{item.title}</Grid>
                    <Grid item component={Button} >
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
                <IconButton disabled={navigationPrevDisable()} onClick={prevQuestion}>
                  <img
                  
                    className={classes.arrows}
                    src={navigationPrevDisable() ? disableArrowLeft : LeftArrow}
                    alt="icon of a left arrow"
                  />
                </IconButton>
              </Grid>

              <Grid item>
                <IconButton onClick={nextQuestion} disabled={navigationNextDisable()}>
                  <img
                    className={classes.arrows}
                    src={navigationNextDisable() ? disableArrowRight : RightArrow}
                    alt="icon of a right arrow"
                  />
                </IconButton>
              </Grid>
            </Grid>

            <Grid item style={{ marginTop: "2em" }}>
              <Button variant="contained">Get Estimate</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default GetStartedPage;
