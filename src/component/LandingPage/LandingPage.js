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
  useTheme,
  useMediaQuery,
  CardHeader
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
  const theme = useTheme()
  const mobileMD = useMediaQuery(theme.breakpoints.down('md'))

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


      <Grid item container alignItems={mobileMD ? null : 'center'} justify={mobileMD ? 'center' : null} className={classes.servicesContainer}>
         {/*website container */}
        <Grid item container className={classes.websiteContainer}>

          <Grid item className={classes.websiteContentContainer}>
            <Typography className={classes.websiteTitle}>
              Website Development
            </Typography>
            <Typography className={classes.websiteSubtitle}>
            <span style={{color: '#558c8c', fontWeight: 900}}>Connect, Build, and increase engagement. <br /></span>
              Your own custom site build for users to interact with you vision
            </Typography>
            <Button className={classes.websiteButton} variant='contained'>Get Started</Button>
          </Grid>

          <Grid className={classes.webdesignImgContainer} item>
            <img className={classes.webdesignImg} src={Webdesign} alt='pic of desktop displaying website design'  />
          </Grid>
        </Grid>



        <Grid item container  className={classes.webAppContainer}>
         
          <Grid item className={classes.webAppContentContainer}>
            <Typography className={classes.webAppTitle}>
              Front-End Applications
            </Typography>
            <Typography className={classes.webAppSubtitle}>
            <span style={{color: '#558c8c', fontWeight: 900}}>Extend Functionality, Access, and Longevity <br /></span>
              Integrate your users web experience by creating a web application <br />for all your loyal users
            </Typography>
            <Button className={classes.webAppButton} variant='contained'> Get Started</Button>
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
              <span style={{color: '#558c8c', fontWeight: 900}}>Mobile Phone's, Tablets, Desktop's </span><br />
              Your own custom site will be avaliable for all screens sizes <br /> so your customer can continue to enjoy what you have <br />
              have to offer.
            </Typography>
            <Button  className={classes.responsiveButton} variant='contained'>Get Started</Button>
          </Grid>

          <Grid className={classes.responsiveImgContainer} item>
            <img className={classes.responsiveImg} src={ResponsiveDesign} alt='pic of laptop, phone and tablet'  />
          </Grid>
        </Grid>



        
      </Grid>

      <Grid item container className={classes.callToAction}>
        <Grid item container justify='center' alignItems='center' className={classes.callToActionLayer}>
        <Card className={classes.callToActionCard}>
          <CardHeader title='Let get started today. ' />
          <Grid alignItems='center' justify='center' container item>
           
            
           

            <Grid item className={classes.cardCTAContent}>
              <ul>
                <li>Website Development</li>
              </ul>

              <ul>
                <li>Front-End Applications</li>
              </ul>
              
              <ul>
                <li>Responsive Design</li>
              </ul>
            </Grid>
            
          </Grid>
          
          <Grid container justify='center' item>
            <Button variant='contained' className={classes.cardCTAButton}>Start Service</Button>
          </Grid>
        </Card>
        </Grid>

      </Grid>
    </div>
  );
};

export default LandingPage;
