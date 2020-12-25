import React from 'react'
import { useStyles } from './footer_styles'
import {Grid, Typography,useTheme, useMediaQuery, Hidden } from '@material-ui/core'
import Logo from '../../asset/images/David.png'
//Social media imports
import Facebook from '../../asset/Social Media Logos/icons8-facebook.svg'
import Github from '../../asset/Social Media Logos/icons8-github.svg'
import Instagram from '../../asset/Social Media Logos/icons8-instagram.svg'
import LinkedIn from '../../asset/Social Media Logos/icons8-linkedin.svg'
import ContactButton from '../UI/contactButton/contactButton'

const Footer = () => {
    const classes = useStyles()
    const theme = useTheme()
    const mobileMatchSM = useMediaQuery(theme.breakpoints.down('sm'))
    return(
        <React.Fragment>
        <Grid container item className={classes.footer}>
            <Hidden smDown>
            <Grid container direction='row' justify='space-evenly' item style={{marginTop:'1.5em'}} >
           <Grid container item className={classes.home}>
               <Grid item>
                    <Typography variant='h2'>
                        Home
                    </Typography>
               </Grid>
           </Grid>

           <Grid item conatiner className={classes.services} >
               <Grid item>
                   <Typography variant='h2'>
                       Services
                   </Typography>
               </Grid>

               <Grid item>
                   <Typography variant='subtitle1'>
                   Website Development
                   </Typography>
               </Grid>

               <Grid item>
                   <Typography variant='subtitle1'>
                   Web Application Development
                   </Typography>
               </Grid>

               <Grid item>
                   <Typography variant='subtitle1'>
                   Website Development
                   </Typography>
               </Grid>
           </Grid>

           <Grid container item direction='column' className={classes.information}>
               <Grid item>
                   <Typography variant='h2'>
                        Information
                   </Typography>
               </Grid>

               <Grid item >
                   <Typography variant='subtitle1'>
                       About Me
                   </Typography>
               </Grid>

               <Grid item>
                   <Typography variant='subtitle1'>
                       Contact Me
                   </Typography>
               </Grid>
           </Grid>
        </Grid>

        </Hidden>

      
            <Grid container direction={mobileMatchSM ? "column" : 'row'}  justify='space-between' alignItems='center' >
            <Grid item container className={classes.logoContainer}>
                <Typography variant='subtitle2' className={classes.footerText}>
                    &copy; dapthedev 2020 Design
                </Typography>
             </Grid>

             <Grid container justify={mobileMatchSM ? 'center': 'flex-end'} item className={classes.socialMediaContainer}>
                 <Grid item>
                     <img className={classes.icons} src={Facebook} alt='facebook icon' />
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
        </React.Fragment>
    )
}

export default Footer