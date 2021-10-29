import React from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';

import useStyles from './styles';
import Form from './Form/Form';
import BudgetList from './BudgetList/BudgetList';

const Main = () => {
    const classes = useStyles();

    return (
        <>
            <Card className={classes.root}>
                <CardHeader title="Expense Tracker" subheader="Powered by Speechly ®" />
                <Divider />
                <CardContent>
                    <Typography align="center" variant="h5" >Total Balance</Typography>
                    <Typography variant="subtitle1" style={{ lineHeight: '1.5rem', marginTop: '20px' }}>$0.00</Typography>
                    <Divider />
                    <Form />
                </CardContent>
                <CardContent className={classes.cardContent}>
                    <Grid container spacing={2}>
                        <BudgetList />
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default Main;
