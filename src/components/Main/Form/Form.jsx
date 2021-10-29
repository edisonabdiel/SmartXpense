import React, {useState, useContext} from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

import { incomeCategories, expenseCategories } from '../../../constants/categories';
import formatDate from '../../../utilities/formatDate';
import { ExpenseTrackerContext } from '../../../context/context';

import useStyles from '../styles';

const initialState = {
    amount: '',
    category: '',
    type: '',
    date: formatDate(new Date()),
}

const Form = () => {
    const classes = useStyles();
    const [formData, setFormData] = useState(initialState);
    const { addTransaction } = useContext(ExpenseTrackerContext);

    const createTransaction = (e) => {
        e.preventDefault();
        const transaction = {...formData, amount: Number(formData.amount), id: uuidv4()};
        addTransaction(transaction);
        setFormData(initialState);
    }

    const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories;
    

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography align="center" variant="subtitle2"  gutterBottom>
                        Основные данные
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Type</InputLabel>
                            <Select value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}>
                                <MenuItem value="Income">Income</MenuItem>
                                <MenuItem value="Expense">Expense</MenuItem>
                            </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Category</InputLabel>
                        <Select vlaue={formData.categpry} onChange={e => setFormData({...formData, category: e.target.value})}>
                            {selectedCategories.map(category => 
                                 <MenuItem key={category.type} value={category.type}>{category.type}</MenuItem>
                        )}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <TextField type="number" label="Amount" value={formData.amount} onChange={e => setFormData({...formData, amount: e.target.value})} fullWidth/>
                </Grid>
                <Grid item xs={6}>
                    <TextField type="date" label="Date" value={formData.date} onChange={e => setFormData({...formData, date: formatDate(e.target.value)})} fullWidth/>
                </Grid>
                <Button variant="contained" color="secondary" className={classes.button} onClick={createTransaction} fullWidth>Create</Button>
            </Grid>
        </>
    )
}

export default Form;
