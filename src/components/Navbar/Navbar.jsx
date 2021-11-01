import { AppBar, Toolbar, Typography } from '@material-ui/core';
import {FcMoneyTransfer} from 'react-icons/fc';

import useStyles from './styles';

const ButtonAppBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit">
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        <span bold style={{ color: 'red' }}>Smart</span>Xpense
                    </Typography>
                    <FcMoneyTransfer className={classes.icon} />
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default ButtonAppBar;