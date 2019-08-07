import lessonsMock from '../mocks/moduleLessons.mock.json';

const fetchQuestions = ({ lessonId, moduleId }) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const module = lessonsMock.filter(
        module => module.id === parseInt(moduleId)
      );

      const questions = module[0].lessons.filter(
        lesson => lesson.id === parseInt(lessonId)
      )[0].questions;

      resolve(questions);
    }, 10);
  });
};

export default fetchQuestions;
