import React from 'react';
import useDarkMode from '../hooks/useDarkMode';
import { Switch, ThemeProvider, CssBaseline, Grid } from '@material-ui/core';

import { Navbar, Details, Main } from '../components';

import '../App.css'
import useStyles from './styles';

const App = () => {
    const [theme, darkMode, toggleDarkMode] = useDarkMode();
    const classes = useStyles();


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline >
                <>
                    <Navbar />
                    <Switch
                        checked={darkMode}
                        onChange={toggleDarkMode}
                        name="toggleDark"
                    />
                    <Grid className={classes.grid} container spacing={0} justify="center" alignItems="center" style={{ height: '100vh' }}>
                        <Grid item xs={12} sm={4}>
                            <Details title="Income"/>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Main />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Details title="Expense" />
                        </Grid>
                    </Grid>
                </>
            </CssBaseline>
        </ThemeProvider>
    )
}

export default App;
