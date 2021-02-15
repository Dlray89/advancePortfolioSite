import React, { useState } from "react";
import ScrollToTop from '../../container/routerScroll'
import { useStyle } from "./PortfolioPageStying";
import {

  Grid,
  Button,
  useTheme,
  MobileStepper,
  useMediaQuery,
} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

import archStudio from "../../asset/images/archStudios.PNG";
import Insure from "../../asset/images/insure.png";
import insure1 from '../../asset/refactorImages/insure1.jpg'
import insure2 from '../../asset/refactorImages/insure2.jpg'

import Furniture_shoot from "../../asset/refactorImages/room1.PNG";
import room2 from "../../asset/refactorImages/room2.jpg";
import room3 from "../../asset/refactorImages/room3.jpg";
import EasyBank from "../../asset/images/easybank.PNG";
import { KeyboardArrowLeft, KeyboardArrowRight} from "@material-ui/icons";

import Photosnap from '../../asset/refactorImages/photosnapImg.PNG'
import Photosnap1 from '../../asset/refactorImages/photosnap1.svg'
import Photosnap2 from '../../asset/refactorImages/photpsnap2.svg'
import arch from "../../asset/refactorImages/archStudioProject.svg";
import archContact from "../../asset/refactorImages/archContect.svg";
import easybank1 from '../../asset/refactorImages/easybank1.jpg'
import easybank2 from '../../asset/refactorImages/easybank2.jpg'

const projects = [
  {id:1,
    name: "Photosnap",
    details:'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others. They provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.',
    link: "https://photosnap-seven.vercel.app/",
    tech_stack: "React | Javascript | Material-UI",
    img: Photosnap,
    alt: "Picture of archStudios Landing page",
    projectImg: Photosnap1,
    projectImg2: Photosnap2,
  },
  {
      id:2,
    name: "Arch Studios",
    details:
      "Arch Studios is an architect firm that specializes in Urban Design and has allowed them to focus on creating exceptional structures that live in harmony with their surroundings. Arch considers every detail from every surrounding element to inform their designs. The Arch team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything  do. This extends to the relationship our projects have with their surroundings.",
    link: "https://arch-studio.dlrayjr89.vercel.app/",
    tech_stack: "React | Javascript | Material-UI",
    img: archStudio,
    alt: "Picture of archStudios Landing page",
    projectImg: arch,
    projectImg2: archContact,
  },
  {
      id:3,
    name: "EasyBank",
    details:
      "Easybank is a conventional way to save money with easy without any hassle. Need a bank with easy access to your money without problems. Easybank is the way to go ",
    link: "https://easy-banking-lilac.vercel.app/",
    tech_stack: "JavaScript | React | material-UI",
    img: EasyBank,
    alt: "Picture of EasyBank Landing page",
    projectImg: easybank2,
    projectImg2: easybank1,
  },
 

  {
      id:4,
    name: "JSFurniture",
    details:
      "A Project creating a landing page for a furniture store called JSFurniture. Shop for the latest, most modern design in home decor all while keeping you budget intact This was a front end challenge provided buy frontend mentors.",
    link: "https://js-furnitures.vercel.app/",
    tech_stack: "HTML | CSS | React | Material-UI | Javascript",
    img: Furniture_shoot,
    alt: "Picture of Sauti Landing page",
    projectImg: room2,
    projectImg2: room3,
    
  },
  {
      id:5,
    name: "Insure Insurance",
    details:
      "Insure Insurance Landing Page project. Insure is a life insurance company that ensures you and your loved one's are fully protected. User friendly process, great prices and they put their people first.",
    link: "https://insure-insurance.vercel.app/",
    githublink: "https://github.com/Dlray89/insure_insurance",
    img: Insure,
    tech_stack: "HTML | React | Material-UI",
    alt: "Picture of Sauti Landing page",
    projectImg: insure1,
    projectImg2: insure2,
  },
  
];


const PortfolioPage = (props) => {
  const classes = useStyle();
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down('sm'))
  // const [search, setSearch] = useState("");
  // const [searchResult, setSearchResult] = useState(projects);
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = projects.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleSearch = (e) => {
  //   setSearch(e.target.value);
  // };

 

  return (
    <div key={projects[activeStep].id}>
      <ScrollToTop />
      <Grid item container direction="column"  className={classes.project} key={projects[activeStep].id}>
        <Grid item className={classes.projectContainer} >
          <img
            className={classes.projectImg}
            alt={projects[activeStep].alt}
            src={projects[activeStep].img}
          />
        </Grid>

        <Grid item container direction={matchSM ?"column-reverse" : "row"} className={classes.projectDetails}>
          <Grid
            item
            container
            direction="column"
            className={classes.bookmarkContainer}
          >
            <Grid item className={classes.bookMark}>
              {projects[activeStep].name}
            </Grid>

            <Grid item className={classes.bookMArkTitle}>
              {projects[activeStep].details}
            </Grid>

            <Grid item className={classes.bookmarkSubtitle}>
              Interactive Desgin/Front-End Development
            </Grid>

            <Grid item className={classes.bookMarkTechStatck}>
              {projects[activeStep].tech_stack}
            </Grid>

            <Grid item className={classes.bookMarkButtonContainer}>
              <Button className={classes.bookMarkButton} variant="outlined" >
                <a style={{textDecoration:'none', color:'black'}} href={projects[activeStep].link}>Visit Website</a>
              </Button>
            </Grid>
          </Grid>

          <Grid
            item
            container
            direction="column"
            className={classes.backgroundDetails}
          >
            <Grid item className={classes.background}>
              Project Snippets
            </Grid>

           

            <Grid
              item
              container
              direction="row"
              style={{ textAlign: "center", width: "87%", margin: "2em auto" }}
            >
              <Grid item style={{ width: "50%" }}>
                <img
                  className={classes.backgroundImg}
                  style={{ border: "solid 3px #dfdfdf" }}
                  width="90%"
                  src={projects[activeStep].projectImg}
                  alt={projects[activeStep].alt}
                />
              </Grid>
              <Grid item style={{ width: "50%" }}>
                {" "}
                <img
                alt={projects[activeStep].alt}
                  style={{ border: "solid 3px #dfdfdf" }}
                  width="90%"
                  src={projects[activeStep].projectImg2}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      '
      <Grid
        item
        container
        className={classes.mobileStepperContainer}
      
      >
        <MobileStepper
                className={classes.mobileStepper}

          style={{ border: "solid 3px #dfdfdf", width: "100%" }}
          steps={maxSteps}
          position="static"
          variant="dots"
          activeStep={activeStep}
          nextButton={
            <Button disabled={activeStep === maxSteps - 1}  onTimeUpdate={window.scrollTo(0, 0)} onClick={handleNext}>
              Next Project{" "}{console.log(activeStep)}
              {theme.direction === "rlt" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button disabled={activeStep === 0} onClick={handleBack}>
              {" "}
              {theme.direction === "rlt" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Previous Project{" "}
            </Button>
          }
        />
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
    </div>
  );
};
export default PortfolioPage;
