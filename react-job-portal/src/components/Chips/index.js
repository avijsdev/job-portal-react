import React from "React";
import { withStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import classes from "./style";

class Dashboard extends React.Component {

    render() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={6}>
                            <
                        </Grid>
                        <Grid item xs={6}></Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyle(classes)(Dashboard);
