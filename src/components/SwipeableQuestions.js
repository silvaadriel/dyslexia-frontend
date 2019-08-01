import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, MobileStepper, Fab } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons/';
import QuestionCard from './QuestionCard';
import SwipeableViews from 'react-swipeable-views';

const useStyles = makeStyles({
  card: {
    minHeight: '100vh',
  },
  mobileStepper: {
    justifyContent: 'space-around',
    background: 'transparent',
  },
});

const SwipeableQuestions = ({ questions }) => {
  const classes = useStyles();
  const maxSteps = questions.length;
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
        {questions.map((question, index) => (
          <QuestionCard step={question} key={index} />
        ))}
      </SwipeableViews>
      <MobileStepper
        variant="progress"
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

export default SwipeableQuestions;
