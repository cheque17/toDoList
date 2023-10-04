const createProject = (function(projectName, description) {

  const creationDate = new Date();

  const tasks = []

  const addTask = (title, description, dueDate, priority)=> {
    tasks.push(createToDo(title, description, dueDate, priority))
  }

  const getTasks = () => tasks;


  return {projectName, description, creationDate, addTask, getTasks, tasks}
});



const createToDo = (function (title, description, dueDate, priority) {

  return { title, description, dueDate, priority}
});

export {createProject, createToDo}