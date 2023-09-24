const createProject = (function(projectName, description) {

  const creationDate = new Date();

  const _tasks = []

  const addTask = (title, description, dueDate, priority)=> {
    _tasks.push(createToDo(title, description, dueDate, priority))
  }

  const getTasks = () => _tasks;

  let displayed;

  return {projectName, description, creationDate, addTask, getTasks, displayed}
});



const createToDo = (function (title, description, dueDate, priority) {

  return { title, description, dueDate, priority}
});

export {createProject, createToDo}