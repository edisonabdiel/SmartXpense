import { AppBar, Switch, Toolbar, Typography, ThemeProvider } from '@material-ui/core';
import  useDarkMode  from '../../hooks/useDarkMode';

import useStyles from './styles';

const ButtonAppBar = () => {
    const classes = useStyles();
    const [theme, darkMode, toggleDarkMode] = useDarkMode();
      
    return (
        <ThemeProvider theme={theme}>
        <div className={classes.root}>
            <AppBar position="static" color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        
                    </Typography>
                    <Switch
                        checked={darkMode}
                        onChange={toggleDarkMode}
                        name="toggleDark"
                    />
                </Toolbar>
            </AppBar>
            </div>
            </ThemeProvider>
    );
}
export default ButtonAppBar;