import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';
import MarkCorrectAnswer from './MarkCorrectAnswer';

const useStyles = makeStyles({
  card: {
    width: '100vw',
    height: '100vh',
    overflowY: 'auto',
  },
});

const QuestionCard = ({ step }) => {
  const classes = useStyles();

  return (
    <Card square className={classes.card}>
      <CardContent>
        <MarkCorrectAnswer step={step} />
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
