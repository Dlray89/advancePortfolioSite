import React from "react";
import {
  Grid,
  Button,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "./servicesStyling";

import Webdesign from "../../asset/images/webdesign.jpg";
import WebApp from "../../asset/images/webApplicationDesign.jpg";
import ResponsiveDesign from "../../asset/images/responsiveDesign.jpg";

const ServicesPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mobileMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <div className={classes.Services}></div>
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
          <Grid item className={classes.websiteContentContainer}>
            <div className={classes.websiteTitle}>
              Website Development
            </div>
            <div className={classes.websiteSubtitle}>
              <span style={{ color: "#558c8c", fontWeight: 900 }}>
                Increase profits and engagement. <br /> <br />
              </span>
              Do you need a website for your business or organization? No
              worries I got you cover on building your own custom digital
              product, with my creativity, innovation and imagination I'll do
              what it takes to get the job done.
            </div>
            <Button
              component={Link}
              to="/gettingstarted"
              className={classes.websiteButton}
              variant="contained"
            >
              Get Started
            </Button>
          </Grid>

          <Grid className={classes.webdesignImgContainer} item>
            <img
              className={classes.webdesignImg}
              src={Webdesign}
              alt="pic of desktop displaying website design"
            />
          </Grid>
        </Grid>

        <Grid
          direction="row"
          justify="flex-end"
          alignItems="center"
          item
          container
          className={classes.webAppContainer}
        >
          <Grid item className={classes.webAppContentContainer}>
            <div className={classes.webAppTitle}>
              Front-End Applications
            </div>
            <div className={classes.webAppSubtitle}>
              <span style={{ color: "#558c8c", fontWeight: 900 }}>
                Extend Value, Connection, and Longevity
              </span>{" "}
              <br /> <br />
              It's the 21st century and most of your customers are on there
              mobile devices such as phones and tablets. Adding a front-end
              application will increase value, give your company a stronger
              brand and be present in the market all while adding profit.
            </div>
            <Button
              component={Link}
              to="/gettingstarted"
              className={classes.webAppButton}
              variant="contained"
            >
              {" "}
              Get Started
            </Button>
          </Grid>

          <Grid className={classes.webAppImgContainer} item>
            <img
              className={classes.webAppImg}
              src={WebApp}
              alt="pic of plannig board. wireframing"
            />
          </Grid>
        </Grid>

        {/*website container */}
        <Grid
          direction="row"
          justify="center"
          alignItems="center"
          item
          container
          className={classes.responsiveContainer}
        >
          <Grid item className={classes.responsiveContentContainer}>
            <div className={classes.responsiveTitle}>
              Responsive Design
            </div>
            <div className={classes.responsiveSubtitle}>
              <span style={{ color: "#558c8c", fontWeight: 900 }}>
                Mobile Phone's, Tablets, Desktop's{" "}
              </span>
              <br /> <br />
              Do you already have a website or application but it's not
              responsive across all platforms? No worries i'm here to assist
              with the responsive expertise I provide ill get your digital
              product responsive in no time. Having your digital product
              responsive will add a lot of value to your brand and will be very
              beneficial to your customers.
            </div>
            <Button
              component={Link}
              to="/gettingstarted"
              className={classes.responsiveButton}
              variant="contained"
            >
              Get Started
            </Button>
          </Grid>

          <Grid className={classes.responsiveImgContainer} item>
            <img
              className={classes.responsiveImg}
              src={ResponsiveDesign}
              alt="pic of laptop, phone and tablet"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ServicesPage;
