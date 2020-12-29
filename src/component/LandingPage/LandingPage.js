import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./landingPage_Styles";
import {
  Card,
  Grid,
  Button,
  CardContent,
  Hidden,
  Typography,
} from "@material-ui/core";

import Arrow from "../../asset/Social Media Logos/icons8-right-arrow-100.png";
import Aboutme from "../../asset/Social Media Logos/icons8-account-100.png";
import Webdesign from '../../asset/images/webdesign.jpg'
import WebApp from '../../asset/images/webApplicationDesign.jpg'
import ResponsiveDesign from '../../asset/images/responsiveDesign.jpg'




//tech icons

// import HTML from "../../asset/technologiesIcons/icons8-html-filetype-64.png";
// import CSS from "../../asset/technologiesIcons/icons8-css-filetype-64.png";
// import Javascript from "../../asset/technologiesIcons/icons8-javascript-64.png";
// import react from "../../asset/technologiesIcons/icons8-react-native-64.png";
// import MaterialUI from "../../asset/technologiesIcons/icons8-material-ui-48.png";
// import Figma from "../../asset/technologiesIcons/icons8-figma-32.png";

const LandingPage = (props) => {
  const classes = useStyles();

  // const technologies = [
  //   {
  //     id: 1,
  //     name: "HTML",
  //     img: HTML,
  //     details:
  //       "HTML(Hypertext Markup Language) is the standard markup language for documents designed to be displayed in a web browser. ",
  //   },
  //   {
  //     id: 2,
  //     name: "CSS",
  //     img: CSS,
  //     details:
  //       "CSS (Cascading Style Sheets) describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work. It can control the layout of multiple web pages all at once.",
  //   },
  //   {
  //     id: 3,
  //     name: "Javascript",
  //     img: Javascript,
  //     details:
  //       "JavaScript is a client-side scripting language, which means the source code is processed by the client's web browser rather than on the web server. This means JavaScript functions can run after a webpage has loaded without communicating with the serve ",
  //   },
  //   {
  //     id: 4,
  //     name: "React",
  //     img: react,
  //     details:
  //       "React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time. ",
  //   },
  //   {
  //     id: 5,
  //     name: "Material-UI",
  //     img: MaterialUI,
  //     details:
  //       "Material-UI is a design system to give user a fantastic feel in there websites or application it is backed by open-source code and developed by Google.  ",
  //   },
  //   {
  //     id: 6,
  //     name: "Figma",
  //     img: Figma,
  //     details:
  //       "Figma is a browser-based UI and UX design application, with excellent design, prototyping, and code-generation tools.",
  //   },
  // ];

  return (
    <div>
      <div className={classes.landingPage}>
        <Hidden xsDown smDown>
          <Card className={classes.introCard}>
            <Grid container direction="column">
              <Grid item>
                <CardContent>
                  <Grid item container>
                    <Grid item className={classes.titlleContainer}>
                      <Typography style={{ textAlign: "center" }} variant="h2">
                        Dreams into reality
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">
                        Create, support and change the lives of your customers
                        using the latest and greatest technology
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Grid>
              <Grid item>
                <div>
                  <Grid
                    className={classes.buttonContainer}
                    container
                    direction="row"
                    justify="space-evenly"
                  >
                    <Grid item>
                      <Button
                        className={classes.headerButton}
                        variant="contained"
                      >
                        Get Started{" "}
                        <img
                          className={classes.buttonIcon}
                          src={Arrow}
                          alt="arrow pointing right"
                        />
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        className={classes.headerButton}
                        component={Link}
                        to="/aboutme"
                      >
                        About me{" "}
                        <img
                          className={classes.aboutButtonIcon}
                          src={Aboutme}
                          alt="character icon afircan american male"
                        />
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Card>
        </Hidden>
      </div>
      <Grid item container direction='column' justify='center' alignItems='center' className={classes.myMissionContainer}>
        <Grid item>
          <Typography className={classes.myMissionTitle}>My mission</Typography>
          <Grid item>
           <Typography className={classes.myMissionText}>
           Dapnologies is dedicated to the highest quality of custom design
            work delivered with imagination, originality and ingenuity
           </Typography>
          </Grid>
        </Grid>
      </Grid>


      <Grid item container style={{border:'solid 2px'}}>
         {/*website container */}
        <Grid item container className={classes.websiteContainer}>

          <Grid item className={classes.websiteContentContainer}>
            <Typography className={classes.websiteTitle}>
              Website Development
            </Typography>
            <Typography className={classes.websiteSubtitle}>
              Connect, Build, and increase engagement. <br />
              Your own custom site build for users to interact with you vision
            </Typography>
            <Button className={classes.websiteButton} variant='contained'>Learn More</Button>
          </Grid>

          <Grid className={classes.webdesignImgContainer} item>
            <img className={classes.webdesignImg} src={Webdesign} alt='pic of desktop displaying website design'  />
          </Grid>
        </Grid>



        <Grid item container  className={classes.webAppContainer}>
         
          <Grid item className={classes.webAppContentContainer}>
            <Typography className={classes.webAppTitle}>
              Web Application Development
            </Typography>
            <Typography className={classes.webAppSubtitle}>
              Extend Functionality, Access, and Longevity <br />
              Integrate your users web experience by creating a web application <br />for all your loyal users
            </Typography>
            <Button className={classes.webAppButton} variant='contained'>Learn More</Button>
          </Grid>

          <Grid className={classes.webAppImgContainer} item>
            <img className={classes.webAppImg} src={WebApp} alt='pic of plannig board. wireframing'  />
          </Grid>
        </Grid>


         {/*website container */}
        <Grid item container className={classes.responsiveContainer}>

          <Grid item className={classes.responsiveContentContainer}>
            <Typography className={classes.responsiveTitle}>
              Responsive Design
            </Typography>
            <Typography className={classes.responsiveSubtitle}>
              Mobile Phone's, Tablets, Desktop's <br />
              Your own custom site will be avaliable for all screens sizes <br /> so your customer can continue to enjoy what you have <br />
              have to offer.
            </Typography>
            <Button className={classes.responsiveButton} variant='contained'>Learn More</Button>
          </Grid>

          <Grid className={classes.responsiveImgContainer} item>
            <img className={classes.responsiveImg} src={ResponsiveDesign} alt='pic of laptop, phone and tablet'  />
          </Grid>
        </Grid>



        
      </Grid>
    </div>
  );
};

export default LandingPage;
