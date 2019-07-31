import lessonsMock from '../mocks/moduleLessons.mock.json';

const fetchLessonQuestions = ({ lessonId, moduleId }) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const module = lessonsMock.filter(module => module.moduleId === moduleId);

      const questions = module[0].lessons.filter(
        lesson => lesson.lessonId === lessonId
      )[0].questions;

      resolve(questions);
    }, 10);
  });
};

export default fetchLessonQuestions;
