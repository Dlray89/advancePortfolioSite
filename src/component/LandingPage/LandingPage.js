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


import Webdesign from '../../asset/images/webdesign.svg'
import WebApp from '../../asset/images/webApplicationDesign.svg'
import ResponsiveDesign from '../../asset/images/responsiveDesign.svg'




//tech icons

import HTML from "../../asset/technologiesIcons/icons8-html-filetype-64.png";
import CSS from "../../asset/technologiesIcons/icons8-css-filetype-64.png";
import Javascript from "../../asset/technologiesIcons/icons8-javascript-64.png";
import react from "../../asset/technologiesIcons/icons8-react-native-64.png";
import MaterialUI from "../../asset/technologiesIcons/icons8-material-ui-48.png";
import Figma from "../../asset/technologiesIcons/icons8-figma-32.png";


const techStackIcons = [
  {id: 1, icon: HTML, alt: 'icons of HTML'},
  {id: 2, icon: CSS, alt: 'icons of css'},
  {id: 3, icon: Javascript, alt: 'icons of javascript'},
  {id: 4, icon: react, alt: 'icons of React'},
  {id: 5, icon: MaterialUI, alt: 'icons of Material-ui'},
  {id: 6, icon: Figma, alt: 'icons of Figma'},
]

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
                  <Grid  direction='column' justify='center' alignItems='center' item container>
                    <Grid item className={classes.titlleContainer}>
                      <Typography style={{ textAlign: "center", fontSize:'1.4em' }} variant="h2">
                        Turning dreams into reality
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography style={{fontSize:'0.68em'}} variant="subtitle1">
                      Create, support, and change the lives of your customers using the latest and greatest technology
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
                   
                    
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Card>
        </Hidden>
      </div>


      <Grid item container direction='column' justify='center' alignItems='center' className={classes.myMissionContainer}>
        <Grid item>
          <Typography className={classes.myMissionTitle}>Personal Tech Stack</Typography>
          </Grid>

            <Grid className={classes.techStackIconContainer} container direction='row' justify='space-between' alignItems='center' item>
             {techStackIcons.map(icon => (
               <Grid item key={icon.id}>
                 <img className={classes.techStackIcon} alt={icon.alt} src={icon.icon}  />
               </Grid>
             ))}
            </Grid>

      </Grid>


      <Grid item container alignItems={mobileMD ? null : 'center'} justify={mobileMD ? 'center' : null} className={classes.servicesContainer}>
         {/*website container */}
        <Grid justify='center' direction='row' alignItems='center' item container className={classes.websiteContainer}>

          <Grid item className={classes.websiteContentContainer}>
            <Typography className={classes.websiteTitle}>
              Website Development
            </Typography>
            <Typography className={classes.websiteSubtitle}>
            <span style={{color: '#558c8c', fontWeight: 900}}>Connect, Build, and increase engagement. <br /></span>
            Your custom site build for users to interact with your vision and brand
            </Typography>
            <Button className={classes.websiteButton} component={Link} to='/services' variant='contained'>View Service</Button>
          </Grid>

          <Grid className={classes.webdesignImgContainer} item>
            <img className={classes.webdesignImg} src={Webdesign} alt='pic of desktop displaying website design'  />
          </Grid>
        </Grid>



        <Grid justify='center' alignItems='center' item container  className={classes.webAppContainer}>
         
          <Grid item className={classes.webAppContentContainer}>
            <Typography className={classes.webAppTitle}>
              Front-End Applications
            </Typography>
            <Typography className={classes.webAppSubtitle}>
            <span style={{color: '#558c8c', fontWeight: 900}}>Extend Functionality, Access, and Longevity <br /></span>
              Integrate your user's web experience by creating a web application for all your loyal users
            </Typography>
            <Button component={Link} to='/services' className={classes.webAppButton} variant='contained'> View Service</Button>
          </Grid>

          <Grid className={classes.webAppImgContainer} item>
            <img className={classes.webAppImg} src={WebApp} alt='pic of plannig board. wireframing'  />
          </Grid>
        </Grid>


         {/*website container */}
        <Grid justify='center' alignItems='center' direction='row' item container className={classes.responsiveContainer}>

          <Grid item className={classes.responsiveContentContainer}>
            <Typography className={classes.responsiveTitle}>
              Responsive Design
            </Typography>
            <Typography className={classes.responsiveSubtitle}>
              <span style={{color: '#558c8c', fontWeight: 900}}>Mobile Phone's, Tablets, Desktop's </span><br />
              Your custom site will be available for all screens sizes so your customer can continue to enjoy what you have
              have to offer.
            </Typography>
            <Button component={Link} to='/services'  className={classes.responsiveButton} variant='contained'>View Service</Button>
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
            <Button component={Link} to='/gettingstarted' variant='contained' className={classes.cardCTAButton}>Start Service</Button>
          </Grid>
        </Card>
        </Grid>

      </Grid>
    </div>
  );
};

export default LandingPage;
