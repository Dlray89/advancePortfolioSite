import React from "react";
import { Grid, Button, Typography, useTheme, useMediaQuery } from "@material-ui/core";
import { useStyles } from "./GetStartedStyling";
import GettingStarted from "../../asset/images/callToAction.jpg";

import WebDesignIcon from "../../asset/Social Media Logos/icons8-web-64 (1).png";
import WebApp from "../../asset/Social Media Logos/icons8-apps-tab-48.png";
import Responsive from "../../asset/Social Media Logos/icons8-responsive-16.png";

const Questions = [
  {
    id: 1,
    question: "Which service are you looking for?",
    active: true,
    options: [
      {
        id: 2,
        service: "Website Development",
        subtitle: null,
        icon: WebDesignIcon,
        iconAlt: "Icon of a desktop with layout",
        selected: false,
        cost: 0,
      },
      {
        id: 3,
        service: "Front-End Application",
        subtitle: null,
        icon: WebApp,
        iconAlt: "icon of mobile app tabs",
        selected: false,
        cost: 0,
      },
      {
        id: 4,
        service: "Responsive Design",
        subtitle: null,
        icon: Responsive,
        iconAlt: "icon of deaktop displaying mobile responsiness",
        selected: false,
        cost: 0,
      },
    ],
  },
];

const GetStartedPage = () => {
  const classes = useStyles();
  const theme = useTheme()
  const mobileMd = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <div className={classes.getEstimate}>
      <Grid  className={classes.mainGridContainer} direction={mobileMd ? "column" : 'row'} justify='space-between' alignItems='center' item container>
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
          {Questions.map((question) => (
            <Grid key={question.id} container justify='center' alignItems='center' item>
              <Grid item >
              <Typography className={classes.mainQuestion}>{question.question}</Typography>
              </Grid>

              <Grid container direction='row' justify='center' alignItems='center' item> 
              {question.options.map(item => (
                  <Grid key={item.id}  className={classes.servicesContainer} container direction='column' justify='center' alignItems='center' item>
                      <Grid  className={classes.services}>{item.service}</Grid>
                      <Grid   ><img  className={classes.servicesIcons} alt={item.iconAlt} src={item.icon}   /></Grid>
                  
                  </Grid>
              ))}
              
              </Grid>


            </Grid>
          ))}
          <Grid justify='center' alignItems='center' item container>
            <Button  variant='contained'>Get Estimate</Button>
        </Grid>
        </Grid>

        
      </Grid>
    </div>
  );
};

export default GetStartedPage;
