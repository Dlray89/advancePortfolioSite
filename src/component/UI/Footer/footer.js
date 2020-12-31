import React from 'react'
import { useStyles } from './footer_styles'
import {Link } from "react-router-dom"
import {Grid, Typography,useTheme, useMediaQuery, Hidden } from '@material-ui/core'
// import Logo from '../../asset/images/David.png'
//Social media imports
import Facebook from '../../../asset/Social Media Logos/icons8-facebook.svg'
import Github from '../../../asset/Social Media Logos/icons8-github.svg'
import Instagram from '../../../asset/Social Media Logos/icons8-instagram.svg'
import LinkedIn from '../../../asset/Social Media Logos/icons8-linkedin.svg'

const Footer = () => {
    const classes = useStyles()
    const theme = useTheme()
    const mobileMatchSM = useMediaQuery(theme.breakpoints.down('sm'))
    return(
        <div>
        <Grid container className={classes.footer}>
            <Hidden smDown>
            <Grid container direction='row' justify='space-evenly' item style={{marginTop:'1.5em'}} >
           <Grid item container justify='center' alignItems='center' className={classes.home}>
               <Grid item>
                    <Typography style={{textDecoration:'none', color:theme.palette.common.lightBrown}} component={Link} to='/' variant='h3'>
                        Home
                    </Typography>
               </Grid>
           </Grid>

           <Grid container direction='column' justify='center' alignItems='center' item  className={classes.services} >
               <Grid item>
                   <Typography  variant='h3'>
                       Services
                   </Typography>
               </Grid>

               <Grid item>
                   <Typography style={{textDecoration:'none', color:theme.palette.common.lightBrown}}  component={Link} to='/services' variant='subtitle1'>
                   Website Development
                   </Typography>
               </Grid>

               <Grid item>
                   <Typography style={{textDecoration:'none', color:theme.palette.common.lightBrown}}  component={Link} to='/'services variant='subtitle1'>
                   Web Application Development
                   </Typography>
               </Grid>

               <Grid item>
                   <Typography style={{textDecoration:'none', color:theme.palette.common.lightBrown}}  component={Link} to='/services' variant='subtitle1'>
                   Website Development
                   </Typography>
               </Grid>
           </Grid>

           <Grid container item direction='column' justify='center' alignItems='center' className={classes.information}>
               <Grid item>
                   <Typography variant='h3'>
                        Information
                   </Typography>
               </Grid>

               <Grid item >
                   <Typography style={{textDecoration:'none', color:theme.palette.common.lightBrown}}  component={Link} to='/about' variant='subtitle1'>
                       About Me
                   </Typography>
               </Grid>

               <Grid item>
                   <Typography style={{textDecoration:'none', color:theme.palette.common.lightBrown}}  component={Link} to='/projects' variant='subtitle1'>
                       Portfolio
                   </Typography>
               </Grid>
           </Grid>
        </Grid>

        </Hidden>

      
            <Grid container  justify='space-between' alignItems='center' >

            <Grid item container justify='center' alignItems='center' className={classes.logoContainer}>
               <Grid item>
               <Typography variant='subtitle2' className={classes.footerText}>
                    &copy; Dapnologies 2020 Design
                </Typography>
               </Grid>
             </Grid>

             <Grid container item alignItems='center' justify={mobileMatchSM ? "center" : null} direction={mobileMatchSM ? "row" : null} className={classes.socialMediaContainer}>
                 <Grid item>
                     <img className={classes.icons}  src={Facebook} alt='facebook icon' />
                 </Grid>

                 <Grid item>
                     <img className={classes.icons} src={Instagram} alt='instagram icon' />
                 </Grid>

                 <Grid item>
                     <img className={classes.icons} src={LinkedIn} alt='LinkedIn icon' />
                 </Grid>

                 <Grid item>
                     <img className={classes.icons} src={Github} alt='Github icon' />
                 </Grid>
             </Grid>

             

            </Grid>
   
        
       </Grid>
        </div>
    )
}

export default Footer