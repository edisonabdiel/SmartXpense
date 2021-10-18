import React from 'react';
import useDarkMode from '../hooks/useDarkMode';
import { Switch, ThemeProvider, CssBaseline, Grid } from '@material-ui/core';

import Details from './Details/Details';

import '../App.css'

const App = () => {
    const [theme, darkMode, toggleDarkMode] = useDarkMode();


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <div>
                    <Grid constainer spacing={0} justify="center" alignItems="center" style={{ height: '100vh' }}>
                        <Grid item xs={12} sm={4}>
                            <Switch
                                checked={darkMode}
                                onChange={toggleDarkMode}
                                name="toggleDark"
                            />
                            <Details />
                        </Grid>
                    </Grid>
                </div>
            </CssBaseline>
        </ThemeProvider>
    )
}

export default App;
