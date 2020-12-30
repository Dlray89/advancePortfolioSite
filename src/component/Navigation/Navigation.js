import React, { useEffect, useState, createRef } from "react";
import { useStyles } from "./nav_style";
import Logo from "../../asset/images/David.png";

import {
  Tab,
  Tabs,
  useScrollTrigger,
  AppBar,
  Toolbar,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ContactButton from '../UI/contactButton/contactButton'

import { Link } from "react-router-dom";

const ElevationScroll = (props) => {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const Navigation = () => {
  const classes = useStyles();
  const ref = createRef()

  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const iOS = process.browser && /iPad|iPhone| iPod/.test(navigator.userAgent);
  const theme = useTheme();
  const mobileMatch = useMediaQuery(theme.breakpoints.down("sm"));

  const changeHandler = (e, newValue) => {
    setValue(newValue);
  };

  // const handleMobileNav = () => {
  //   setOpen(true);
  // };

  // const closeMobileNav = () => {
  //   setOpen(false);
  // };

  const navigationLinks = [
    {id: 1, name: "Home", link: "/" },
    {id: 2, name: "Portfolio", link: "/projects" },
    {id: 3, name: "Services", link: "/services" },
  ];

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0);
        }
        break;
      case "/projects":
        if (value !== 1) {
          setValue(1);
        }
        break;
      case "/services":
        if (value !== 2) {
          setValue(2);
        }
        break;
      default:
        break;
    }
  }, [value]);

  const deskTopNav = (
    <React.Fragment>
      <Tabs
        indicatorColor="secondary"
        value={value}
        onChange={changeHandler}
        className={classes.tabContainer}
        
      >
        {navigationLinks.map((link) => (
          <Tab
          style={{color:theme.palette.common.lightBrown ,}}
            component={Link}
            to={link.link}
            label={link.name}
            key={link.id}
          />
        ))}
      </Tabs>
      <ContactButton variant='outlined' className={classes.navButton}>Contact Me</ContactButton>
    </React.Fragment>
  );

  const mobileNav = (
    <React.Fragment>
      <SwipeableDrawer
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        classes={{paper: classes.mobileDrawer}}
        PaperProps={{
          style:{
            background: "#eae9bb",
          }
        }}
      >
        <div>
          <img alt='Logo for David Ray website' className={classes.mobileLogo} src={Logo}  />
        </div>
        <List>
          <ListItem button divider component={Link} to='/' >
            <ListItemText style={{color:theme.palette.common.black, fontSize: "1.7em",
    textAlign: "center"}} className={classes.mobileLinks}>Home</ListItemText>
          </ListItem>

          <ListItem style={{color:theme.palette.common.black, fontSize: "1em",
    textAlign: "center"}} button divider component={Link} to='/projects'>
            <ListItemText  className={classes.mobileLinks}>Projects</ListItemText>
          </ListItem>

          <ListItem style={{color:theme.palette.common.black, fontSize: "1em",
    textAlign: "center"}} button divider component={Link} to='/services'>
            <ListItemText className={classes.mobileLinks}>Services</ListItemText>
          </ListItem>

         </List>
         <ContactButton variant='outlined' className={classes.mobileButton}>Contact Me</ContactButton>
        
      </SwipeableDrawer>

      <IconButton style={{marginLeft: 'auto'}}  onClick={() => setOpen(!open)}>
        <MenuIcon style={{ color: theme.palette.common.lightBrown,
    height: "1.5em",
    width: "1.5em",}}  />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div className={classes.mainContainer}>
      <ElevationScroll >
        <AppBar ref={ref} color="primary" position="fixed" className={classes.appbar}>
          <Toolbar disableGutters>
            <div className={classes.logoContainer}>
              <img
                className={classes.logo}
                alt="logo for David Ray website"
                src={Logo}
                ref={ref}
              />
            </div>
            {mobileMatch ? mobileNav : deskTopNav}
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      <div className={classes.toolbarMargin} />
    </div>
  );
};

export default Navigation;
