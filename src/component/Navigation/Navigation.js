import React, { useEffect, useState } from "react";
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
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  // const iOS = process.browser && /iPad|iPhone| iPod/.test(navigator.userAgent);
  const theme = useTheme();
  const mobileMatch = useMediaQuery(theme.breakpoints.down("sm"));

  const changeHandler = (e, newValue) => {
    setValue(newValue);
  };

  const handleMobileNav = () => {
    setOpen(true);
  };

  // const closeMobileNav = () => {
  //   setOpen(false);
  // };

  const navigationLinks = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Projects", link: "/projects" },
    { id: 3, name: "Blogs", link: "/blogs" },
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
      case "/blogs":
        if (value !== 2) {
          setValue(2);
        }
        break;
      case "/contact":
        if (value !== 3) {
          setValue(3);
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
            key={link.id}
            className={classes.tabs}
            component={Link}
            to={link.link}
            label={link.name}
          />
        ))}
      </Tabs>
      <ContactButton variant='outlined' className={classes.navButton}>Contact Me</ContactButton>
    </React.Fragment>
  );

  const mobileNav = (
    <React.Fragment>
      <SwipeableDrawer
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        classes={{paper: classes.mobileDrawer}}
      >
        <div className={classes.toolbarMargin}  />
        <List>
          <ListItem button divider className={classes.linksContainer} component={Link} to='/' >
            <ListItemText className={classes.mobileLinks}>Home</ListItemText>
          </ListItem>

          <ListItem button divider component={Link} to='/projects'>
            <ListItemText  className={classes.mobileLinks}>Projects</ListItemText>
          </ListItem>

          <ListItem button divider component={Link} to='/blogs'>
            <ListItemText className={classes.mobileLinks}>Blogs</ListItemText>
          </ListItem>

          <ListItem button style={{background: theme.palette.common.black}} divider component={Link} to='/contact'>
            <ListItemText style={{color:theme.palette.common.lightBrown, fontWeight:500}} className={classes.mobileLinks}>Contact</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>

      <IconButton style={{ marginLeft: "auto" }} onClick={handleMobileNav}>
        <MenuIcon className={classes.menuButton} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div className={classes.mainContainer}>
      <ElevationScroll>
        <AppBar color="primary" position="fixed" className={classes.appbar}>
          <Toolbar disableGutters>
            <div className={classes.logoContainer}>
              <img
                className={classes.logo}
                alt="logo for David Ray website"
                src={Logo}
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
