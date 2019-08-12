import React from 'react';
import {
  Card,
  Typography,
  Grid,
  CardContent,
  Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    width: '100vw',
    height: '100vh',
    overflowY: 'auto',
  },
});

const Score = props => {
  const classes = useStyles();

  return (
    <Card square className={classes.card}>
      <CardContent>
        <Grid
          container
          spacing={4}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Typography align="center" component="h1" variant="h4">
              <Box fontWeight="600">Lição concluída!</Box>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Score;
