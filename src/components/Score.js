import React from 'react';
import { Card, Typography, Grid, CardContent, Box } from '@material-ui/core';
import { Star } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import useGlobal from '../store';

const useStyles = makeStyles(theme => ({
  card: {
    width: '100vw',
    height: '100vh',
    overflowY: 'auto',
  },
  stars: {
    color: '#FFD900',
    fontSize: '150px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '100px',
    },
  },
}));

const Score = props => {
  const classes = useStyles();
  const [globalState, globalActions] = useGlobal();

  const stars = (starsEarned, classes = {}, jsx = []) => {
    if (starsEarned === 0) {
      return jsx;
    } else {
      jsx.push(<Star classes={{ root: classes }} key={starsEarned} />);
      return stars(starsEarned - 1, classes, jsx);
    }
  };

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
          <Grid item>
            <div>
              {stars(globalActions.score.getEarnedStars(), classes.stars)}
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Score;
