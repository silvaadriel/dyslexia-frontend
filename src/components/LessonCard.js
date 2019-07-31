import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
  CardActionArea,
  Grid,
} from '@material-ui/core';
import { Star, PlayCircleFilledWhite } from '@material-ui/icons/';

const useStyles = makeStyles(theme => ({
  card: {
    maxHeight: 300,
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  description: {
    height: 120,
  },
  star: {
    color: '#112233',
  },
}));

const LessonCard = props => {
  const classes = useStyles();

  const stars = (starsEarned, jsx = []) => {
    if (starsEarned === 0) {
      return jsx;
    } else {
      jsx.push(<Star key={starsEarned} />);
      return stars(starsEarned - 1, jsx);
    }
  };

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Grid
            container
            spacing={2}
            direction="column"
            justify="space-around"
            alignItems="stretch"
          >
            <Grid container justify="space-between" alignItems="center" item>
              <Grid item>
                <Typography component="h2" variant="h4">
                  {props.lesson.title}
                </Typography>
              </Grid>
              <Grid item>{stars(props.lesson.stars)}</Grid>
            </Grid>
            <Grid item>
              <Typography
                className={classes.description}
                variant="body1"
                component="p"
              >
                {props.lesson.description}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          aria-label="Começar"
          component={Link}
          to={`/lesson/${props.lesson.moduleId}/${props.lesson.lessonId}`}
        >
          Começar
          <PlayCircleFilledWhite className={classes.rightIcon} />
        </Button>
      </CardActions>
    </Card>
  );
};

export default LessonCard;
