import React from 'react'
import { useStyles } from './footer_styles'
import {Divider, Grid, Typography, IconButton, useTheme, useMediaQuery, Hidden } from '@material-ui/core'
import Logo from '../../asset/images/David.png'
//Social media imports
import Facebook from '../../asset/Social Media Logos/icons8-facebook.svg'
import Github from '../../asset/Social Media Logos/icons8-github.svg'
import Instagram from '../../asset/Social Media Logos/icons8-instagram.svg'
import LinkedIn from '../../asset/Social Media Logos/icons8-linkedin.svg'


const Footer = () => {
    const classes = useStyles()
    const theme = useTheme()
    const mobileMatch = useMediaQuery(theme.breakpoints.down('sm'))
    return(
        <Grid container direction={mobileMatch ? 'column': 'row'} justify='space-evenly' className={classes.footer}>
            <Hidden smDown>
      
                <Grid item>
                    <Typography>
                        Home
                    </Typography>
                </Grid>

                <Grid item direction='column' justify='space-between' className={classes.servicesContainter}>
                    <Grid container className={classes.TitleLink} >
                        Services
                    </Grid>
                    <Grid container direction='column' justify='space-between'>
                    <Grid item className={classes.links}>
                        Website Development
                    </Grid>
                    <Grid item className={classes.links}>
                        Web Application Development
                    </Grid>

                    <Grid item className={classes.links}>
                        Responsive Design
                    </Grid>
                    </Grid>
                    
                </Grid>

                <Grid item direction='column' >
                    <Grid container className={classes.TitleLink}>
                        <Typography>
                            About
                        </Typography>
                    </Grid>

                    <Grid item className={classes.links}>
                        About Me
                    </Grid>

                    <Grid item className={classes.links}>
                        Contact Me
                    </Grid>
                    

                    
                </Grid>

                </Hidden>
                <Grid container direction={mobileMatch ? 'column': 'row'} justify='space-between' className={classes.logoandSocialContainer} >
                <Grid item className={classes.logoContainer}>
                <img alt='logo for David Ray Jr website' src={Logo} className={classes.footerLogo}  />
                </Grid>

                <Grid className={classes.socialMediaContainer}  direction='row' alignItems='center' justify='space-evenly' container >
                    <Grid item ><img className={classes.icons} alt='Facebook icon' src={Facebook} /></Grid>
                    <Grid item><img className={classes.icons} alt='Facebook icon' src={Instagram} /></Grid>
                    <Grid item> <img className={classes.icons} alt='Facebook icon' src={Github} /></Grid>
                    <Grid item> <img className={classes.icons} alt='Facebook icon' src={LinkedIn} /></Grid>
                       
                </Grid>
                
            </Grid>
        </Grid>
    )
}

export default Footer