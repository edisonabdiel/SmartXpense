import React from 'react';
import useDarkMode from './hooks/useDarkMode';
import { motion } from 'framer-motion/dist/framer-motion';
import { Switch, ThemeProvider, CssBaseline, Grid } from '@material-ui/core';
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';

import { Navbar, Details, Main } from './components';

import './App.css'
import useStyles from './styles';

import { fadeInSlide } from './variants/variants'

const App = () => {
    const [theme, darkMode, toggleDarkMode] = useDarkMode();
    const classes = useStyles();


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline >
                <Navbar />
                <Switch
                    checked={darkMode}
                    onChange={toggleDarkMode}
                    name="toggleDark"
                />
                <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }} variants={fadeInSlide}>
                    <Grid className={classes.grid} container spacing={0} justify="center" alignItems="center" style={{ height: '100vh' }}>
                        <Grid item xs={12} sm={4} className={classes.mobile}>
                            <Details title="Income" />
                        </Grid>
                        <Grid item xs={12} sm={3} claseeName={classes.main}>
                            <Main />
                        </Grid>
                        <Grid item xs={12} sm={4} className={classes.desktop}>
                            <Details title="Income" />
                        </Grid>
                        <Grid item xs={12} sm={4} className={classes.last}>
                            <Details title="Expense" />
                        </Grid>
                    </Grid>
                    <PushToTalkButtonContainer>
                        <PushToTalkButton />
                    </PushToTalkButtonContainer>
                </motion.div>
            </CssBaseline>
        </ThemeProvider>
    );
}

export default App;
