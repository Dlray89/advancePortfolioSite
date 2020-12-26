import {makeStyles} from '@material-ui/core'



export const useStyles = makeStyles((theme) => ({
    mainContainer:{
    },
    appbar:{
        zIndex: theme.zIndex.modal + 1,
        [theme.breakpoints.down('sm')]:{
            zIndex: theme.zIndex.modal + 1,


        }
    },
    tabContainer:{
        marginLeft: 'auto'
    },
    tabs:{
        ...theme.typography.links
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
        zIndex: 0,
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
        color: theme.palette.common.black
    },
    
}))