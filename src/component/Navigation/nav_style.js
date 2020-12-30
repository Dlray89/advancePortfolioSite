import {makeStyles} from '@material-ui/core'




export const useStyles = makeStyles((theme) => ({
    
    mainContainer:{
    },
    appbar:{
        zIndex: theme.zIndex.modal + 1,
    },
    tabContainer:{
        marginLeft: 'auto'
    },
    tabs:{
        fontFamily: 'Lustria, serif',
        color: '#a27035',
        fontSize:'1.1em'
    },
    logoContainer:{
        height: '6em'
    },
    logo:{
        height: '6em'
    },
    toolbarMargin:{
        ...theme.mixins.toolbar,
        marginBottom: '1.80em'
    },
    careerTitle:{
        fontSize: '0.65em'
    },
    menuButton:{
        color: theme.palette.common.lightBrown,
        height:'1.5em',
        width: '1.5em'
    },
    mobileDrawer:{
        background:'#eae9bb',
        color: theme.palette.common.lightBrownn,
        width:'28.52%',
        [theme.breakpoints.down('sm')]:{
            width:'23.2%'
        },
        [theme.breakpoints.down('xs')]:{
            width:'43.8%'
        },
        
    },
    linksContainer:{
        textDecoration: 'none'
    },  
    mobileLinks:{
        color: theme.palette.common.black,
        fontSize:'1.7em',
        textAlign:'center'
    },
    
}))