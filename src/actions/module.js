import fetch from '../services/modulesService';

export const fetchModules = store => {
  fetch().then(modules => store.setState({ modules }));
};
