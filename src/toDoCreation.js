const createProject = (function(projectName) {

  const creationDate = new Date();

  const _tasks = []

  const addTask = (title, description, dueDate, priority)=> {
    _tasks.push(createToDo(title, description, dueDate, priority))
  }

  const getTasks = () => _tasks;

  return {projectName, creationDate, addTask, getTasks}
});



const createToDo = (function (title, description, dueDate, priority) {

  return { title, description, dueDate, priority}
});

export {createProject, createToDo}