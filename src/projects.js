import { storageLogic } from "./storage.js";

const projectsList = [];

const createNewProject = (title, color) => ({
  title,
  color,
  customTodos: [],
});

const projectLogic = (() => {
  const addProject = (project) => {
    projectsList.push(project);
    storageLogic.saveProjectsList(projectsList);
  };

  const removeProject = (index) => {
    projectsList.splice(index, 1);
    storageLogic.saveProjectsList(projectsList);
  };

  const removeTaskFromProject = (projectIndex, taskIndex) => {
    projectsList[projectIndex].customTodos.splice(taskIndex, 1);
    storageLogic.saveProjectsList(projectsList);
  };

  return { addProject, removeProject, removeTaskFromProject };
})();

export { projectsList, createNewProject, projectLogic };
