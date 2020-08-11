import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuBox from './MenuBox';
import { purple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    palette: {
        primary: {
          // Purple and green play nicely together.
          main: purple[500],
        },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
            // dark: será calculada com base palette.secondary.main,
            contrastText: '#ffcc00',
        },
      },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function NavigationBar() {

    const classes = useStyles();

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const openMenuBox = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <div className={classes.root}>
            <AppBar color='green' position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon color='secondary'  onClick={openMenuBox('left', true)} />
                    </IconButton>
                  
                </Toolbar>
            </AppBar>
            <MenuBox openMenuBox={openMenuBox} state={state} />
        </div>
    )
}
