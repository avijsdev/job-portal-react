import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { useHistory } from 'react-router-dom';

import classes from "./style";
import LoginForm from '../../components/login';
import { login } from '../../utils';

function Dashboard({ classes }) {
    const history = useHistory();
    const handleSubmit = (type,{ userName, password }) => {
        login(userName,password,history);
    }
    return (
        <Grid container spacing={2} className={classes.container}>
            <Paper className={classes.section}>
                <Grid item xs={12} >
                    <Grid container>
                        <Grid item xs={6} className={classes.item + ' ' + classes.left}>
                            <LoginForm title="Freelancer" submit={handleSubmit} />
                        </Grid>
                        <Grid item xs={6} className={classes.item}>
                            <LoginForm title="Employer" submit={handleSubmit} />
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default withStyles(classes)(Dashboard);
