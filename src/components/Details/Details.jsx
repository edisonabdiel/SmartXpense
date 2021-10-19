import React from 'react';
import { Card, CardHeader, CardContent, Typography, Divider } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

import useStyles from './styles';

const Details = ({title}) => {
    const classes = useStyles();

    return (
        <>
            <Card className={title === 'Income' ? classes.income : classes.expense} >
                <CardHeader title={title} />
                <Divider />
                <CardContent>
                    <Typography variant="h5">$0</Typography>
                    <Doughnut data="data" />
                </CardContent>
            </Card>
        </>
    )
}

export default Details;
