import React from "react";
import { useStyles } from "./landingPage_Styles";
import {
  Card,
  Grid,
  Button,
  CardContent,
  Hidden
} from "@material-ui/core";

const LandingPage = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.landingPage}>
      <Hidden xsDown smDown>
      <Card className={classes.introCard}>
      
        <Grid container direction='column'>
          <Grid item>
           
            <CardContent>
              Front-End Developer with a passion for creativity and
              solution-seeking. My mission is to develop and design a robust,
              user-friendly, handicap accessible, and easy to use user interface
              for all. Your vision for your business/organization is very
              important not only to me but to the user as well. Let’s chat about
              your vision and turn it into a reality because that’s what I do.
            </CardContent>
          </Grid>
          <Grid item>
              <div>
                  <Grid container direction='row' justify='space-evenly'>
                      <Grid item>
                          <Button className={classes.headerButton} variant='outlined'>Get Stared</Button>
                      </Grid>
                      <Grid item>
                          <Button className={classes.headerButton}  variant='outlined'>Learn More</Button>
                      </Grid>
                  </Grid>
              </div>
          </Grid>
        </Grid>
      

     
      </Card>
      </Hidden>
    </div>
  );
};

export default LandingPage;
