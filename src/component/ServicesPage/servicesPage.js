import React from "react";
import {
  Grid,
  Button,
  useTheme,
  useMediaQuery,
  Hidden,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "./servicesStyling";

import HTML from "../../asset/technologiesIcons/icons8-html-filetype-64.png";
import CSS from "../../asset/technologiesIcons/icons8-css-filetype-64.png";
import Javascript from "../../asset/technologiesIcons/icons8-javascript-64.png";
import react from "../../asset/technologiesIcons/icons8-react-native-64.png";
import MaterialUI from "../../asset/technologiesIcons/icons8-material-ui-48.png";
import Figma from "../../asset/technologiesIcons/figmaSmall.svg";

const techStackIcons = [
  {
    id: 1,
    icon: Figma,
    alt: "icons of Figma",
    title: "Figma",
    details:
      "Figma is a User-Interface and UX design application with an excellent design tool to help create robust web designs before going into coding development",
  },
  {
    id: 2,
    icon: HTML,
    alt: "icons of HTML",
    title: "HTML",
    details:
      "HTML stands for HyperText Mark-up Language. This is the coding language used for structuring a webpage and all of its content.",
  },
  {
    id: 3,
    icon: CSS,
    alt: "icons of css",
    title: "CSS",
    details:
      "CSS stands for Cascading Style Sheets. CSS adds styling to the structure of your web page. Essentially added a great presentation for the web page using colors, layouts, font, etc.",
  },
  {
    id: 4,
    icon: MaterialUI,
    alt: "icons of Material-ui",
    title: "Material-UI",
    details:
      "Material-UI is used and developed by Google. If you want your user interface to have a great look and feel this library will get it down.",
  },
  {
    id: 5,
    icon: Javascript,
    alt: "icons of javascript",
    title: "JavaScript",
    details:
      "JavaScript is a programming language commonly used in web development. JS was developed by Netscape as a means to add dynamic and interactive elements to a website.",
  },
  {
    id: 6,
    icon: react,
    alt: "icons of React",
    title: "React",
    details:
      " React is a JavaScript framework used for building a user interface for single-page applications and websites. It also handles view layers for web and mobile apps",
  },
];

const ServicesPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mobileMD = useMediaQuery(theme.breakpoints.down("md"));
  const MatchSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Grid item container className={classes.Services}>
        <Hidden smDown>
          <Grid
            item
            direction="column"
            container
            className={classes.heroDetails}
          >
            <Grid item className={classes.heroTitle}>
              Services
            </Grid>

            <Grid item className={classes.heroSubtitle}>
              Services I specialized in are a website development and web
              applications that are built responsively across all mobile
              platforms. These services are handicap accessible and fully
              interactive
            </Grid>
          </Grid>
        </Hidden>
      </Grid>

      <Grid item>
        <Hidden mdUp>
          <Grid
            item
            direction="column"
            container
            className={classes.heroDetails}
          >
            <Grid item className={classes.heroTitle}>
              Services
            </Grid>

            <Grid item className={classes.heroSubtitle}>
              Services I specialized in are a website development and web
              applications that are built responsively across all mobile
              platforms. These services are handicap accessible and fully
              interactive
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        alignItems={mobileMD ? null : "center"}
        justify={mobileMD ? "center" : null}
        className={classes.servicesContainer}
      >
        {/*website container */}
        <Grid
          direction="row"
          justify="center"
          alignItems="center"
          item
          container
          className={classes.websiteContainer}
        >
          <Hidden smDown>
            <Grid
              item
              container
              direction="column"
              className={classes.websiteDetails}
            >
              <Grid item className={classes.websiteTitle}>
                Website Development
              </Grid>

              <Grid item className={classes.websiteSubtitle}>
                <span style={{ color: "#558c8c", fontWeight: 900 }}>
                  Increase profits and engagement. <br /> <br />
                </span>
                Do you need a website for your business or organization? No
                worries I got you cover on building your custom digital
                product, with my creativity, innovation, and imagination I'll do
                what it takes to get the job done.
              </Grid>

              <Grid item className={classes.websiteButtonContainer}>
                <Button
                  component={Link}
                  to="/gettingstarted"
                  className={classes.websiteButton}
                  variant="contained"
                >
                  Get Started
                </Button>
              </Grid>
            </Grid>
          </Hidden>
        </Grid>

        <Grid item>
          <Hidden mdUp>
            <Grid
              item
              container
              direction="column"
              className={classes.websiteDetails}
            >
              <Grid item className={classes.websiteTitle}>
                Website Development
              </Grid>

              <Grid item className={classes.websiteSubtitle}>
                <span style={{ color: "#558c8c", fontWeight: 900 }}>
                  Increase profits and engagement. <br /> <br />
                </span>
                Do you need a website for your business or organization? No
                worries I got you cover on building your custom digital
                product, with my creativity, innovation, and imagination I'll do
                what it takes to get the job done..
              </Grid>

              <Grid item className={classes.websiteButtonContainer}>
                <Button
                  component={Link}
                  to="/gettingstarted"
                  className={classes.websiteButton}
                  variant="contained"
                >
                  Get Started
                </Button>
              </Grid>
            </Grid>
          </Hidden>
        </Grid>

        <Grid
          direction="row"
          justify="flex-end"
          alignItems="center"
          item
          container
          className={classes.webAppContainer}
        >
          <Hidden smDown>
            <Grid
              item
              container
              direction="column"
              className={classes.webAppDetails}
            >
              <Grid item className={classes.webAppTitle}>
                Front-End Applications
              </Grid>

              <Grid item className={classes.webAppSubtitle}>
                <span style={{ color: "#558c8c", fontWeight: 900 }}>
                  Extend Value, Connection, and Longevity
                </span>{" "}
                <br /> <br />
                It's the 21st century and most of your customers are on their mobile devices such as phones and tablets. Adding a front-end to
                the application will increase value, give your company a stronger
                brand and be present in the market all while adding profit.
              </Grid>

              <Grid item className={classes.websiteAppButtonContainer}  component={Link}
                  to="/gettingstarted">
                <Button className={classes.webAppButton}>Get Started</Button>
              </Grid>
            </Grid>
          </Hidden>
        </Grid>

        <Grid item>
          <Hidden mdUp>
            <Grid
              item
              container
              direction="column"
              className={classes.webAppDetails}
            >
              <Grid item className={classes.webAppTitle}>
                Front-End Applications
              </Grid>

              <Grid item className={classes.webAppSubtitle}>
                <span style={{ color: "#558c8c", fontWeight: 900 }}>
                  Extend Value, Connection, and Longevity
                </span>{" "}
                <br /> <br />
                It's the 21st century and most of your customers are on their mobile devices such as phones and tablets. Adding a front-end to
                the application will increase value, give your company a stronger
                brand and be present in the market all while adding profit.
              </Grid>

              <Grid item className={classes.websiteAppButtonContainer}  component={Link}
                  to="/gettingstarted">
                <Button className={classes.webAppButton}>Get Started</Button>
              </Grid>
            </Grid>
          </Hidden>
        </Grid>

        {/*website container */}
      </Grid>

      <Grid
        item
        container
        direction="column"
        alignItems="center"
        className={classes.techStackContainer}
      >
        <Grid item className={classes.mainTitle}>
          Technology Arsenal
        </Grid>
        <Grid
          className={classes.techStack}
          item
          direction={MatchSM ? "column" : "row"}
          justify="space-evenly"
          alignItems="center"
          container
        >
          {techStackIcons.map((icon) => (
            <Grid
              item
              container
              direction="column"
              alignItems="center"
              className={classes.teachStackCard}
            >
              <Grid item className={classes.techStackImgContainer}>
                <img
                  src={icon.icon}
                  alt={icon.alt}
                  className={classes.techStackImg}
                />
              </Grid>

              <Grid item className={classes.techStackTitle}>
                {icon.title}
              </Grid>

              <Grid item className={classes.techStackSubtitle}>
                {icon.details}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default ServicesPage;
