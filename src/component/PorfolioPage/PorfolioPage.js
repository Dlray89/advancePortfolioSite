import React, { useState, useEffect } from "react";
import { useStyle } from "./PortfolioPageStying";
import {
  Card,
  CardContent,
  Grid,
  CardHeader,
  Button,
  useTheme,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import { Link } from 'react-router-dom'

import SearchIcon from "@material-ui/icons/Search";
import Sauti from "../../asset/images/sauti.PNG";
import archStudio from "../../asset/images/archStudios.PNG";
import Insure from "../../asset/images/insure.png";
import Furniture_shoot from "../../asset/images/tcShoot.PNG";
import EasyBank from "../../asset/images/easybank.PNG";
import DapPM from "../../asset/images/projectManagement.PNG";

const projects = [
  {
    id: 1,
    name: "Arch Studios",
    details:
      "This project is still in development! Coming Soon | Arch Studios is an architect firm that creates stunning building designs and brings them to real life.", 
      link: "https://arch-studio.dlrayjr89.vercel.app/",
    githublink: "https://github.com/Dlray89/archStudio",
    tech_stack: "React | Javascript | Material-UI",
    img: archStudio ,
    alt: "Picture of archStudios Landing page",
  },
  {
    id: 2,
    name: "EasyBank",
    details:
      "Easybank is a conventional way to save money with easy without any hassle. Need a bank with easy access to your money without problems. Easybank is the way to go ",
    link: "https://easy-banking-lilac.vercel.app/",
    githublink: "https://github.com/Dlray89/EasyBanking",
    tech_stack: "JavaScript | React | material-UI",
    img: EasyBank,
    alt: "Picture of EasyBank Landing page",
  },
  {
    id: 3,
    name: "Dap Management",
    details:
      "A Project-based application to manage all of your upcoming digital projects. From website, web applications, android, and Ios projects. Keep track of what your working on and complete each task and crush your goals.",
    link: "https://project-manager-seven.vercel.app/",
    githublink: "https://github.com/Dlray89/ProjectManager",
    tech_stack: "JavaScript | Material-UI | NextJS",
    img: DapPM,
    alt: "Picture of dapnology project management",
  },

  {
    id: 4,
    name: "JSFurniture",
    details:
      "A Project creating a landing page for a furniture store called JSFurniture. Shop for the latest, most modern design in home decor all while keeping you budget intact This was a front end challenge provided buy frontend mentors.",
    link: "https://js-furnitures.vercel.app/",
    githublink: "https://github.com/Dlray89/JS_Furnitures",
    tech_stack: "HTML | CSS | React | Material-UI | Javascript",
    img: Furniture_shoot,
    alt: "Picture of Sauti Landing page",
  },
  {
    id: 5 ,
    name: "Insure Insurance",
    details: "Insure Insurance Landing Page project. Insure is a life insurance company that ensures you and your loved one's are fully protected. User friendly process, great prices and they put their people first.",
    link: "https://insure-insurance.vercel.app/",
    githublink: "https://github.com/Dlray89/insure_insurance",
    img: Insure,
    tech_stack: "HTML | React | Material-UI",
    alt: "Picture of Sauti Landing page",
  },
  {
    id: 6,
    name: "Sauti",
    details:
      "Sauti is a Mobile-based trade and market information platform to trade legally and safely across borders. Empowering East Africa's women to make a better life for themselves and their families. Sauti provides many resources to trade all across the wrold.",
    link: "https://dlray89.github.io/SautiAfrica/",
    githublink: "https://github.com/Dlray89/SautiAfrica",
    tech_stack: "HTML | LESS",
    img: Sauti,
    alt: "Picture of Sauti Landing page",
  },

];

const PortfolioPage = () => {
  const classes = useStyle();
  const theme = useTheme();
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(projects);

 
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const results = projects.filter((techProject) =>
      techProject.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(results);
  }, [search]);

  return (
    <div>
      <div className={classes.Portfolio}></div>

      <div className={classes.searchContainer}>
       
        <TextField
        variant='filled'
          className={classes.searchBar}
          placeholder="Search Portfolio"
          onChange={handleSearch}
          value={search}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="large" className={classes.searchIcon} />
              </InputAdornment>
            ),
          }}
          inputProps={{
            style: {
              color: "black",
              fontSize: "1.5em",
              fontFamily:'Lustria serif'
            },
          }}
        />
      </div>

      <div className={classes.cardContainer}>
        {searchResult.map((project) => (
          <Card variant='outlined' key={project.id}  className={classes.card}>
            <CardHeader
              className={classes.cardHeader}
              title={project.name}
              subheader={project.tech_stack}
              titleTypographyProps={{
                style: {
                  fontSize: "2em",
                  fontFamily:'Lustria serif'
                },
              }}
              subheaderTypographyProps={{
                style: {
                  color: theme.palette.common.lightBrown,
                  fontSize: "0.95em",
                  fontFamily:'Lustria serif'
                },
              }}
            />
            <div className={classes.imgContainer}>
              <img
                className={classes.projectImages}
                src={project.img}
                alt={project.alt}
              />
            </div>
            <CardContent className={classes.contentContainer}>
              <Grid
                justify="center"
                className={classes.contentGridContainer}
                container
                item
              >
                <Grid item className={classes.contentDetails}>
                  {project.details}
                </Grid>

                <Grid
                  item
                  container
                  direction="column"
                  justify="space-between"
                  alignItems="center"
                  className={classes.buttonMainContainer}
                >
                  <Grid item className={classes.buttonContainers}>
                    <Button
                      href={project.link}
                      className={classes.buttons}
                      variant="contained"
                    >
                      View Website
                    </Button>
                  </Grid>

                  <Grid item className={classes.buttonContainers}>
                    <Button
                      href={project.githublink}
                      className={classes.buttons}
                      variant="contained"
                    >
                      Veiw Source
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))}
      </div>

      <Grid item container className={classes.callToAction}>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          className={classes.callToActionLayer}
        >
          <Card className={classes.callToActionCard}>
            <CardHeader title="Let's get started today! " style={{fontSize:'0.85em'}} />
            <Grid alignItems="center" justify="center" container item>
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

            <Grid container justify="center" item>
              <Button component={Link} to='/gettingstarted' variant="contained" className={classes.cardCTAButton}>
                Start Service
              </Button>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
export default PortfolioPage;
