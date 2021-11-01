import React, {useContext} from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';

import { ExpenseTrackerContext } from '../../context/context';

import useStyles from './styles';

import Form from './Form/Form';
import BudgetList from './BudgetList/BudgetList';
import {InfoCard} from '../InfoCard/InfoCard';

const Main = () => {
    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext);

    return (
        <>
            <Card className={classes.root}>
                <CardHeader title="Expense Tracker" subheader="Powered by Speechly ®" />
                <Divider />
                <CardContent>
                    <Typography align="center" variant="h5" >Total Balance € {balance}</Typography>
                    <Typography variant="subtitle1" style={{ lineHeight: '1.5rem', marginTop: '20px' }}>

                    </Typography>
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
