import React from 'react'
import { useStyles } from './footer_styles'
import {Link } from "react-router-dom"
import {Grid, Typography,useTheme, useMediaQuery, Hidden, Button } from '@material-ui/core'
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
               <Grid item component={Link} to='/' >
                    <div style={{textDecoration:'none', color:theme.palette.common.lightBrown}} >
                        Home
                    </div>
               </Grid>
           </Grid>

           <Grid container direction='column' justify='center' alignItems='center' item  className={classes.services} >
               <Grid item>
                   <div>
                       Services
                   </div>
               </Grid>

               <Grid item component={Link} to='/services' >
                   <div style={{textDecoration:'none', color:theme.palette.common.lightBrown}}>
                   Website Development
                   </div>
               </Grid>

               <Grid item component={Link} to='/'services>
                   <div style={{textDecoration:'none', color:theme.palette.common.lightBrown}}>
                   Web Application Development
                   </div>
               </Grid>

               <Grid item component={Link} to='/services' >
                   <div style={{textDecoration:'none', color:theme.palette.common.lightBrown}} >
                   Website Development
                   </div>
               </Grid>
           </Grid>

           <Grid container item direction='column' justify='center' alignItems='center' className={classes.information}>
               <Grid item>
                   <div>
                        Information
                   </div>
               </Grid>

               <Grid item component={Link} to='/about' >
                   <div style={{textDecoration:'none', color:theme.palette.common.lightBrown}}  >
                       About Me
                   </div>
               </Grid>

               <Grid item component={Link} to='/projects'>
                   <div style={{textDecoration:'none', color:theme.palette.common.lightBrown}}   variant='subtitle1'>
                       Portfolio
                   </div>
               </Grid>
           </Grid>
        </Grid>

        </Hidden>

      
            <Grid container  justify='space-between' alignItems='center' >

            <Grid item container justify='center' alignItems='center' className={classes.logoContainer}>
               <Grid item>
               <div variant='subtitle2' className={classes.footerText}>
                    &copy; Dapnologies 2020 Design
                </div>
               </Grid>
             </Grid>

             <Grid container item alignItems='center' justify={mobileMatchSM ? "center" : null} direction={mobileMatchSM ? "row" : null} className={classes.socialMediaContainer}>
                 <Grid item component={Button} href='http://www.facebook.com'>
                     <img className={classes.icons}  src={Facebook} alt='facebook icon' />
                 </Grid>

                 <Grid item component={Button} href='http://www.instagram.com/tapthedap'>
                     <img className={classes.icons} src={Instagram} alt='instagram icon' />
                 </Grid>

                 <Grid item component={Button} href='https://www.linkedin.com/in/dapperdave1914/'>
                     <img className={classes.icons} src={LinkedIn} alt='LinkedIn icon' />
                 </Grid>

                 <Grid item component={Button} href='https://github.com/Dlray89'>
                     <img className={classes.icons} src={Github} alt='Github icon' />
                 </Grid>
             </Grid>

             

            </Grid>
   
        
       </Grid>
        </div>
    )
}

export default Footer