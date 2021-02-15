import React, { forwardRef, useState } from "react";
import { Link } from 'react-router-dom'
import { useStyles } from "./landingPage_Styles";
import {
  Grid,
  Button,
  useTheme,
  useMediaQuery,
  Hidden,
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Card,
  CardHeader,
  CardContent
} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
//tech icons

// import HTML from "../../asset/technologiesIcons/icons8-html-filetype-64.png";
// import CSS from "../../asset/technologiesIcons/icons8-css-filetype-64.png";
// import Javascript from "../../asset/technologiesIcons/icons8-javascript-64.png";
// import react from "../../asset/technologiesIcons/icons8-react-native-64.png";
// import MaterialUI from "../../asset/technologiesIcons/icons8-material-ui-48.png";
// import Figma from "../../asset/technologiesIcons/icons8-figma-32.png";

import Photosnap from "../../asset/refactorImages/photosnapLogo.svg";
import ArchStudio from "../../asset/refactorImages/archLogo.svg";
import EasyBank from "../../asset/refactorImages/easybankLogo.svg.svg";
import PhotoSnapHero from "../../asset/refactorImages/world-tour.jpg";
import Federal from "../../asset/refactorImages/image-federal.jpg";
import Mockups from "../../asset/refactorImages/image-mockups.png";
import David from "../../asset/refactorImages/david.jpg";

// const techStackIcons = [
//   {
//     id: 1,
//     icon: Figma,
//     alt: "icons of Figma",
//     title: "Figma",
//     details:
//       "Figma is a User-Interface and UX design applcation with excellent design tool to help create robust web designs before going into coding development",
//   },
//   {
//     id: 2,
//     icon: HTML,
//     alt: "icons of HTML",
//     title: "HTML",
//     details:
//       "HTML stands for HyperText Mark-up Language. This is the coding language used for structuring a webpage and all of its content.",
//   },
//   {
//     id: 3,
//     icon: CSS,
//     alt: "icons of css",
//     title: "CSS",
//     details:
//       "CSS stands for Cascading Style Sheets. CSS adds styling to the structure of your web page. Essentially added a great presentaion for the web page usinf colors, layouts, font, etc.",
//   },
//   {
//     id: 4,
//     icon: MaterialUI,
//     alt: "icons of Material-ui",
//     title: "Material-UI",
//     details:
//       "Material-UI is used and developed by Google. IIf youwant your user interface to have a great look and feel this library will get it down.",
//   },
//   {
//     id: 5,
//     icon: Javascript,
//     alt: "icons of javascript",
//     title: "JavaScript",
//     details:
//       "JavaScript is a programming language commonly used in web development. JS was developed by NetScape as a means to add dynamic and interactive elements to a website.",
//   },
//   {
//     id: 6,
//     icon: react,
//     alt: "icons of React",
//     title: "React",
//     details:
//       " React is a JavaScript Framework used for building user interface for single page applications and websites. It also handles view layers for web and mobile apps",
//   },
// ];

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const LandingPage = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchSm = useMediaQuery(theme.breakpoints.down("sm"));
  const [onHoverPhotosnap, setOnHoverPhotosnap] = useState(false);
  const [archStudio, setArchStudio] = useState(false);
  const [easyBank, setEasyBank] = useState(false);

  const hoverOver = () => {
    setOnHoverPhotosnap(true);
  };

  const hoverOut = () => {
    setOnHoverPhotosnap(false);
  };

  const HandleArchOpen = () => {
    setArchStudio(true);
  };

  const HandleArchClose = () => {
    setArchStudio(false);
  };

  const HandleEasyBankOpen = () => {
    setEasyBank(true);
  };

  const HandleEasyBankClose = () => {
    setEasyBank(false);
  };

  // const handleScroll = () => {
  //   window.scrollTo(0, 0)
  // }

  return (
    <Grid container>
      <Grid item container className={classes.landingPage}>
        <Hidden smDown>
          <Grid
            item
            container
            direction="column"
            className={classes.heroCardDetails}
          >
            <Grid item className={classes.heroCardTitle}>
              Hi, I'm Dave
            </Grid>
            <Grid item className={classes.heroCardSubtitle}>
              I'm a passionate Front-End developer who loves to create, design,
              and develop beautiful websites and web applications. Making these
              digital products user friendly and hanicap accessiable while
              providing a overall great experience is my goal.
            </Grid>

            <Grid item className={classes.heroButtonContainer} onTimeUpdate={window.scrollTo(0, 0)} component={Link} to='/projects'>
              <Button variant="contained" className={classes.heroButton} >
                See Portfolio
              </Button>
            </Grid>
          </Grid>
        </Hidden>
      </Grid>

      <Hidden mdUp>
        <Grid
          item
          container
          direction="column"
          className={classes.heroCardDetails}
        >
          <Grid item className={classes.heroCardTitle}>
            Hi, I'm Dave
          </Grid>
          <Grid item className={classes.heroCardSubtitle}>
            I'm a passionate Front-End developer who loves to create, design,
            and develop beautiful websites and web applications. Making these
            digital products user friendly and hanicap accessiable while
            providing a overall great experience is my goal.
          </Grid>

          <Grid item className={classes.heroButtonContainer} onTimeUpdate={window.scrollTo(0, 0)} component={Link} to='/projects'>
            <Button variant="contained" className={classes.heroButton}>
              See Portfolio
            </Button>
          </Grid>
        </Grid>
      </Hidden>

      <Card className={classes.newestProject}>
       <CardHeader title='Recent Projects' titleTypographyProps={{
         style:{
           fontSize: matchSm ? "1.5em" :null
         }
       }}    />
       <CardContent>

        <Grid
          item
          container
          direction={matchSm ? "column":"row"}
          justify="space-evenly"
          alignItems='center'
          className={classes.projectContainer}
        >
          <Grid item component={Button} className={classes.project}  onClick={hoverOver}>
            <img src={Photosnap} alt='' style={{marginRight:'auto'}} />
          </Grid>
          <Dialog
          fullScreen={matchSm}
            open={onHoverPhotosnap}
            TransitionComponent={Transition}
            onClose={hoverOut}
            style={{ zIndex: theme.zIndex.modal + 1, }}
            PaperProps={{
              style:{
                background: "#242331",
              }
            }}
          >
            <DialogTitle>
              <img src={Photosnap}  alt=''  />
            </DialogTitle>
            <DialogContent className={classes.projectContainer}>
              <Grid
                container
                direction="row"
                alignItems="center"
                justify="space-between"
                className={classes.project}
              >
                <Grid item className={classes.projectImgContainer}>
                  <img  alt='' className={classes.projectImg} src={PhotoSnapHero} />
                </Grid>

                <Grid
                  item
                  container
                  direction="column"
                  alignItems="center"
                  className={classes.projectDetails}
                >
                  <Grid item className={classes.projectDate}>
                    Feb 2020
                  </Grid>
                  <Grid item className={classes.projectTitle}>
                    Photosnap
                  </Grid>

                  <Grid item className={classes.projectSubtitle}>
                    Photosnap is a platform for photographers and visual
                    storytellers. We make it easy to share photos, tell stories
                    and connect with others.
                  </Grid>
                  <Grid
                    item
                    container
                    direction="row"
                    justify="space-evenly"
                  ></Grid>

                  <Grid
                    className={classes.projectButtonContainer}
                    item
                    container
                    direction="row"
                    justify="space-between"
                  >
                    <Grid item className={classes.buttonContainer}>
                      <Button
                        className={classes.projectButton}
                        variant="container"
                      >
                        View Project
                      </Button>
                    </Grid>

                    <Grid item className={classes.buttonContainer}>
                      <Button
                        className={classes.projectButton}
                        variant="contained"
                        onClick={hoverOut}
                      >
                        Close Project
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </DialogContent>
          </Dialog>

          <Grid item onClick={HandleArchOpen} component={Button}>
            <img src={ArchStudio}  alt=''/>
          </Grid>
          <Dialog
           fullScreen={matchSm}
            open={archStudio}
            TransitionComponent={Transition}
            onClose={HandleArchClose}
            style={{ zIndex: theme.zIndex.modal + 1 }}
            PaperProps={{
              style:{
                background: "#242331",
              }
            }}
            
          >
            <DialogTitle>
              <img src={ArchStudio}  alt='' />
            </DialogTitle>
            <DialogContent className={classes.projectContainer}>
              <Grid
                container
                direction="row"
                alignItems="center"
                justify="space-between"
                className={classes.project}
              >
                <Grid item className={classes.projectImgContainer}>
                  <img className={classes.projectImg}  alt='' src={Federal} />
                </Grid>

                <Grid
                  item
                  container
                  direction="column"
                  alignItems="center"
                  className={classes.projectDetails}
                >
                  <Grid item className={classes.projectDate}>
                    Jan 2020
                  </Grid>
                  <Grid item className={classes.projectTitle}>
                    Arch Studio
                  </Grid>

                  <Grid item className={classes.projectSubtitle}>
                    Arch Studios is an architect firm that speciliaze in Urban
                    Design that allowe Arch to focus on creating exceptional
                    structures that live in harmony with their surroundings.
                  </Grid>

                  <Grid
                    className={classes.projectButtonContainer}
                    item
                    container
                    direction="row"
                    justify="space-between"
                  >
                    <Grid item className={classes.buttonContainer}>
                      <Button
                        className={classes.projectButton}
                        variant="contained"
                      >
                        View Project
                      </Button>
                    </Grid>

                    <Grid item className={classes.buttonContainer}>
                      <Button
                        className={classes.projectButton}
                        variant="contained"
                        onClick={HandleArchClose}
                      >
                        Close Project
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </DialogContent>
          </Dialog>

          <Grid item onClick={HandleEasyBankOpen} component={Button}>
            <img src={EasyBank}  alt='' />
          </Grid>
          <Dialog
           fullScreen={matchSm}
            open={easyBank}
            TransitionComponent={Transition}
            onClose={HandleEasyBankClose}
            style={{ zIndex: theme.zIndex.modal + 1 }}
            PaperProps={{
              style:{
                background: "#242331",
              }
            }}
          >
            <DialogTitle>
              <img src={EasyBank}   alt=''/>
            </DialogTitle>
            <DialogContent className={classes.projectContainer}>
              <Grid
                container
                direction="row"
                alignItems="center"
                justify="space-between"
                className={classes.project}
              >
                <Grid item className={classes.projectImgContainer}>
                  <img className={classes.projectImg}  alt='' src={Mockups} />
                </Grid>

                <Grid
                  item
                  container
                  direction="column"
                  alignItems="center"
                  className={classes.projectDetails}
                >
                  <Grid item className={classes.projectDate}>
                    Feb 2020
                  </Grid>
                  <Grid item className={classes.projectTitle}>
                    EasyBank
                  </Grid>

                  <Grid item className={classes.projectSubtitle}>
                    EasyBank isthe next generation digital banking so you can
                    take your financial life online. Your Easybank account will
                    be a one-stop-shop for spending, saving, budgeting,
                    investing, and much more.
                  </Grid>
                  <Grid
                    item
                    container
                    direction="row"
                    justify="space-evenly"
                  ></Grid>

                  <Grid
                    className={classes.projectButtonContainer}
                    item
                    container
                    direction="row"
                    justify="space-between"
                  >
                    <Grid item className={classes.buttonContainer}>
                      <Button
                        className={classes.projectButton}
                        variant="contained"
                      >
                        View Project
                      </Button>
                    </Grid>

                    <Grid item className={classes.buttonContainer}>
                      <Button
                        className={classes.projectButton}
                        variant="contained"
                        onClick={HandleEasyBankClose}
                      >
                        Close Project
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </DialogContent>
          </Dialog>
        </Grid>
        </CardContent>
      </Card>

      <Grid item container className={classes.aboutContainer}>
        <Grid item container direction={matchSm ? 'column':'row'}  className={classes.about}>
          <Grid item className={classes.aboutImgContainer}>
            <img  className={classes.aboutImg}   alt='' src={David} />
          </Grid>
          <Grid className={classes.aboutText} item container direction='column' style={{color:'black'}}>
            <Grid item className={classes.aboutTextTitle}>About me</Grid>
            <Grid item className={classes.aboutTextDetails}>
              Im a Junior Front-End Developer that focuses on writing accessibale HTML, using modern CSS practices and writing clean JavaScript.
              When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. Im based in Knoxville, TN but im happy working
              remotely and have experience working in remote teams. When i don't have my face buried in the computer screen, I'm enjoying the ourdoor scenery, 
              playing video games, catching up on all of my TV shows, and enjoy eating at different resturants. I believe in pursuiting your dreams until you have 
              turn them into reality. I've made many scarafices to get where i am in life and i intend to go even futher beyond my capability.

            </Grid>

            <Grid item className={classes.aboutTextButtonContainer}>
              <Button onTimeUpdate={window.scrollTo(0, 0)} className={classes.aboutTextButton} variant='outlined' component={Link} to='/projects' >Go to portfolio</Button>
            </Grid>
            
            </Grid>
        </Grid>
      </Grid>

      <Grid item container className={classes.calltoaction}>
        <Grid
          item
          container
          direction="column"
          className={classes.calltoactionDetails}
        >
          <Grid item className={classes.calltoactionTitle}>
            Thinking about a website?
          </Grid>
          <Grid
            item
            container
            direction="row"
            justify="space-evenly"
            className={classes.serviceContainer}
          >
            <Grid item className={classes.calltoactionServices}>
              Website Design
            </Grid>
            <Grid item>
              <FiberManualRecordIcon className={classes.dot} />
            </Grid>

            <Grid item className={classes.calltoactionServices}>
              Web Applications
            </Grid>
          </Grid>

          <Grid item className={classes.calltoactionButtonContainer}>
            <Button className={classes.calltoactionButton}>
              View Services <ArrowRightIcon />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
