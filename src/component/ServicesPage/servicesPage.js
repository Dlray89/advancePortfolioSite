import React from "react";
import {
  Grid,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
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
        <div className={classes.Services}>
            

        </div>
      <Grid
        item
        container
        alignItems={mobileMD ? null : "center"}
        justify={mobileMD ? "center" : null}
        className={classes.servicesContainer}
      >
        {/*website container */}
        <Grid item container className={classes.websiteContainer}>
          <Grid item className={classes.websiteContentContainer}>
            <Typography className={classes.websiteTitle}>
              Website Development
            </Typography>
            <Typography className={classes.websiteSubtitle}>
              <span style={{ color: "#558c8c", fontWeight: 900 }}>
                Increase profits and engagement. <br />
              </span>
              Do you need a website for your business or organization?  <br />
              Have no fear I got you cover, with my crativity and <br /> innovation imagination you and I 
              will collaborate on your <br /> vision and plan to increase revenue and 
              engagement of your <br />  business. 
            </Typography>
            <Button className={classes.websiteButton} variant="contained">
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

        <Grid item container className={classes.webAppContainer}>
          <Grid item className={classes.webAppContentContainer}>
            <Typography className={classes.webAppTitle}>
              Front-End Applications
            </Typography>
            <Typography className={classes.webAppSubtitle}>
              <span style={{ color: "#558c8c", fontWeight: 900 }}>
                Extend Value, Connection, and Longevity <br />
              </span>
              It's the 21st century and most of your customer <br />  are on there mobile 
              phone. Adding a front-end<br />  application will do a few things for you  
              business.<br />  It will help your business provide value, You will <br />  also 
              build a stronger brand, the best part is that<br />  you can connect better 
              with your customers and<br />  increase profits as well.
            </Typography>
            <Button className={classes.webAppButton} variant="contained">
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
        <Grid item container className={classes.responsiveContainer}>
          <Grid item className={classes.responsiveContentContainer}>
            <Typography className={classes.responsiveTitle}>
              Responsive Design
            </Typography>
            <Typography className={classes.responsiveSubtitle}>
              <span style={{ color: "#558c8c", fontWeight: 900 }}>
                Mobile Phone's, Tablets, Desktop's{" "}
              </span>
              <br />
             Do you already have a website or application but its not <br />  responsive 
             acress all platforms? No worries im am here <br /> to assits with the  
             responsive expertist I provide for all of <br /> my clients. I can help
             turn your website or Application <br />  and make them responsive to help 
             you reach out to more <br /> customers and bring ore value to what you
             already provide.
            </Typography>
            <Button className={classes.responsiveButton} variant="contained">
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
