import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { VolumeUp } from '@material-ui/icons';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  IconButton,
} from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

const useStyles = makeStyles({
  card: {
    width: '100vw',
    height: '100vh',
    overflowY: 'auto',
  },
  img: {
    maxWidth: '400px',
    borderRadius: '10px',
  },
  toggleButtonRoot: {
    color: '#4F4F4F',
    border: '1px solid rgba(0, 0, 0, 0.25)',
    borderRadius: '2px',
    backgroundColor: '#FFFFFF',
    '&:not(:first-child)': {
      borderLeft: '1px solid rgba(0, 0, 0, 0.25)',
      marginLeft: '0',
    },
    '&.Mui-selected': {
      color: '#000000',
      borderColor: 'rgba(0, 0, 0, 0.5)',
    },
    '&.Mui-disabled': {
      color: '#AAAAAA',
      borderColor: 'rgba(0, 0, 0, 0.1)',
    },
  },
  toggleButtonGroupRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '200px',
    width: '350px',
    backgroundColor: 'transparent',
  },
});

const QuestionCard = ({ step }) => {
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
          <Grid item container spacing={4} justify="center" alignItems="center">
            <Grid item>
              <Typography align="center" component="h1" variant="h4">
                {step.question}
              </Typography>
            </Grid>
            <Grid item>
              <IconButton title="Ouvir" aria-label="Escutar">
                <VolumeUp />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item>
            <CardMedia
              className={classes.img}
              component="img"
              alt={step.img.alt}
              image={step.img.url}
              title={step.img.title}
            />
          </Grid>
          <ToggleButtonGroup
            // value={}
            // onChange={}
            classes={{ root: classes.toggleButtonGroupRoot }}
            exclusive
          >
            {step.alternatives.map((alternative, index) => (
              <ToggleButton
                key={index}
                classes={{ root: classes.toggleButtonRoot }}
                value={alternative}
                // disabled={}
              >
                {alternative}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
