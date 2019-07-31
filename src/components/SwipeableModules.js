import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  MobileStepper,
  Fab,
} from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons/';
import SwipeableViews from 'react-swipeable-views';
import LessonCard from './LessonCard';
import colors from '../utils/backgroundColors';

const useStyles = makeStyles({
  card: {
    minHeight: '100vh',
  },
  mobileStepper: {
    justifyContent: 'space-around',
    background: 'transparent',
  },
});

const SwipeableModules = ({ modules }) => {
  const classes = useStyles();
  const maxSteps = modules.length;
  const [activeStep, setActiveStep] = useState(0);

  const handleBack = () => setActiveStep(prevActiveStep => prevActiveStep - 1);

  const handleNext = () => setActiveStep(prevActiveStep => prevActiveStep + 1);

  const handleStepChange = step => setActiveStep(step);

  return (
    <Grid>
      <SwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {modules.map((module, index) => (
          <Card
            square
            style={{ background: colors[index] }}
            className={classes.card}
            key={module.title}
          >
            <CardContent>
              <Grid
                container
                spacing={4}
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <Typography align="center" component="h1" variant="h2">
                    {module.title}
                  </Typography>
                </Grid>
                {module.lessons.map((lesson, index) => (
                  <Grid item md sm={12} xs={12} key={index}>
                    <LessonCard lesson={lesson} />
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        ))}
      </SwipeableViews>
      <MobileStepper
        className={classes.mobileStepper}
        steps={maxSteps}
        activeStep={activeStep}
        nextButton={
          <Fab
            variant="extended"
            size="medium"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            aria-label="Próximo"
          >
            Próximo
            <KeyboardArrowRight />
          </Fab>
        }
        backButton={
          <Fab
            variant="extended"
            size="medium"
            onClick={handleBack}
            disabled={activeStep === 0}
            aria-label="Anterior"
          >
            <KeyboardArrowLeft />
            Anterior
          </Fab>
        }
      />
    </Grid>
  );
};

export default SwipeableModules;
