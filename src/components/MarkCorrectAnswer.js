import React, { useState } from 'react';
import useGlobal from '../store';
import { makeStyles } from '@material-ui/core/styles';
import { VolumeUp } from '@material-ui/icons';
import {
  CardMedia,
  Typography,
  Grid,
  IconButton,
  Box,
} from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

const useStyles = makeStyles({
  img: {
    maxWidth: '400px',
    borderRadius: '10px',
  },
  toggleButtonRoot: {
    color: '#4F4F4F',
    border: '1px solid rgba(0, 0, 0, 0.25)',
    borderRadius: '2px',
    backgroundColor: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    textTransform: 'none',
    marginBottom: '10px',
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
    justifyContent: 'flex-start',
    height: '200px',
    width: '350px',
    backgroundColor: 'transparent',
  },
});

const MarkCorrectAnswer = ({ step }) => {
  const classes = useStyles();

  const [globalState, globalActions] = useGlobal();
  const [alternative, setAlternative] = useState('');

  const handleChange = (event, newAlternative) => {
    setAlternative(newAlternative);

    if (newAlternative) {
      globalActions.answer.setIsAnswered(true);
      globalActions.answer.setCurrentAnswer(newAlternative);
    } else {
      globalActions.answer.setIsAnswered(false);
    }
  };

  return (
    <Grid
      container
      spacing={4}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item container spacing={4} justify="center" alignItems="center">
        <Grid item>
          <Typography align="center" component="h1" variant="h5">
            <Box fontWeight="700">{step.question}</Box>
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
        value={alternative}
        onChange={handleChange}
        classes={{ root: classes.toggleButtonGroupRoot }}
        exclusive
      >
        {step.alternatives.map((alternative, index) => (
          <ToggleButton
            key={index}
            classes={{ root: classes.toggleButtonRoot }}
            value={alternative}
            disabled={globalState.isVerified}
          >
            {alternative}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Grid>
  );
};

export default MarkCorrectAnswer;
