import React from 'react';
import useDarkMode from '../hooks/useDarkMode';
import { Switch, ThemeProvider, CssBaseline, Grid } from '@material-ui/core';

import Details from './Details/Details';
import Navbar from './Navbar/Navbar';

import '../App.css'

const App = () => {
    const [theme, darkMode, toggleDarkMode] = useDarkMode();


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <>
                    <Navbar />
                    <Switch
                        checked={darkMode}
                        onChange={toggleDarkMode}
                        name="toggleDark"
                    />
                    <Grid constainer spacing={0} justify="center" alignItems="center" style={{ height: '100vh' }}>
                        <Grid item xs={12} sm={4}>
                            <Details />
                        </Grid>
                    </Grid>
                </>
            </CssBaseline>
        </ThemeProvider>
    )
}

export default App;
