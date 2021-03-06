import React, { useState } from 'react';
import useGlobal from '../store';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, MobileStepper, Fab } from '@material-ui/core';
import { Help, KeyboardArrowRight } from '@material-ui/icons/';
import QuestionCard from './QuestionCard';
import Score from './Score';
import HelpDialog from './HelpDialog';
import SwipeableViews from 'react-swipeable-views';

const useStyles = makeStyles(theme => ({
  card: {
    minHeight: '100vh',
    paddingBottom: '50px',
  },
  mobileStepperRoot: {
    justifyContent: 'center',
    background: 'transparent',
    padding: '20px',
  },
  mobileStepperProgress: {
    width: '35%',
    height: '10px',
    borderRadius: '10px',
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(10),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: '4px',
      margin: '0',
      position: 'absolute',
      bottom: '0px',
      borderRadius: '0px',
    },
  },
  rightFab: {
    '&.MuiFab-sizeMedium': {
      boxShadow: 'none',
      width: '125px',
      [theme.breakpoints.down('xs')]: {
        width: '40%',
        borderRadius: '0px 20px 20px 0px',
      },
    },
  },
  leftFab: {
    '&.MuiFab-sizeMedium': {
      boxShadow: 'none',
      width: '125px',
      [theme.breakpoints.down('xs')]: {
        width: '40%',
        borderRadius: '20px 0px 0px 20px',
      },
    },
  },
  rightIconMargin: {
    marginRight: theme.spacing(1),
  },
}));

const SwipeableQuestions = ({ questions }) => {
  const classes = useStyles();
  const maxSteps = questions.length + 1;
  const [activeStep, setActiveStep] = useState(0);
  const [globalState, globalActions] = useGlobal();

  const handleNext = () => {
    if (globalState.isVerified) {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
      globalActions.answer.setIsVerified(false);
      globalActions.answer.setIsAnswered(false);
    } else {
      globalActions.answer.verifyAnswer(activeStep);
    }
  };

  const handleStepChange = step => setActiveStep(step);

  return (
    <Grid>
      <SwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        disabled
      >
        {questions.map((question, index) => (
          <QuestionCard step={question} key={index} />
        ))}
        <Score />
      </SwipeableViews>
      <MobileStepper
        variant="progress"
        classes={{
          root: classes.mobileStepperRoot,
          progress: classes.mobileStepperProgress,
        }}
        steps={maxSteps}
        activeStep={activeStep}
        nextButton={
          <Fab
            variant="extended"
            size="medium"
            classes={{ extended: classes.rightFab }}
            onClick={handleNext}
            disabled={!globalState.isAnswered}
            aria-label={globalState.isVerified ? 'Continuar' : 'Verificar'}
          >
            {globalState.isVerified ? 'Continuar' : 'Verificar'}
            <KeyboardArrowRight />
          </Fab>
        }
        backButton={
          <HelpDialog
            helpText={
              activeStep === maxSteps - 1
                ? ''
                : globalState.questions[activeStep].helpText
            }
          >
            <Fab
              variant="extended"
              size="medium"
              classes={{ extended: classes.leftFab }}
              disabled={activeStep === maxSteps - 1}
              aria-label="Ajuda"
            >
              <Help className={classes.rightIconMargin} />
              Ajuda
            </Fab>
          </HelpDialog>
        }
      />
    </Grid>
  );
};

export default SwipeableQuestions;
