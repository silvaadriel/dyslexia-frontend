import modulesMock from '../mocks/userModules.mock.json';

const fetchModules = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(modulesMock);
    }, 10);
  });
};

export default fetchModules;
