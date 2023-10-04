import Icon from './menu.png';
import Option from './more.png';
import Add from './add.png';
import Delete from './delete.png';

function createSidebar () {
  const generalContent = document.querySelector('.general-content');

  const sideBar = document.createElement('div');
  sideBar.setAttribute('class', 'sidebar');

  generalContent.appendChild(sideBar);

  const sectionName = document.createElement('h2');
  sectionName.textContent = 'Projects';
  
  sideBar.appendChild(sectionName);

  const separationBar = document.createElement('hr');
  sideBar.appendChild(separationBar);

  const listedProjects = document.createElement('ul');
  listedProjects.setAttribute('id', 'projects-list');

  sideBar.appendChild(listedProjects);
};

function displayProjects (projectsArray) {
  const list = document.querySelector('#projects-list');
  
  for (let i=0; i<projectsArray.length; i++) {
    let project = document.createElement('li');
    project.setAttribute('class', 'list-project');
    
    const myProjIcon = new Image();
    myProjIcon.setAttribute('class', 'sdbar-icon')
    myProjIcon.src = Icon;

    let projectTitle = document.createElement('span');
    projectTitle.setAttribute('class', 'project-name');
    projectTitle.textContent = projectsArray[i].projectName;

    const myOptIcon = new Image();
    myOptIcon.setAttribute('class', 'options-icon');
    myOptIcon.src = Option;

    project.appendChild(myProjIcon);
    project.appendChild(projectTitle);
    project.appendChild(myOptIcon);
    list.appendChild(project);
  }
};

function createAddButton (area) {
  const buttonContainer = document.createElement('div');
  buttonContainer.setAttribute('class', 'add-button-container');
  
  const addImg = new Image();
  addImg.setAttribute('class', 'add-img');
  addImg.src = Add;

  buttonContainer.appendChild(addImg);

  if (area === 'sidebar'){
    let sideBar = document.querySelector('.sidebar');
    buttonContainer.setAttribute('id', 'add-project')
    sideBar.appendChild(buttonContainer)
  } else {
    let project = document.querySelector('.project-container');
    buttonContainer.setAttribute('id', 'add-task');
    addImg.setAttribute('id', 'task-img-btt');
    project.appendChild(buttonContainer);
  }
};

function createFullSideBar (projectsArray) {
  createSidebar();
  displayProjects(projectsArray);
  createAddButton('sidebar');
}

function updateSidebarList (projectsArray,) {
  const projectCollection = document.querySelectorAll('.list-project');
  for (let i= 0; i<projectCollection.length; i++){
    projectCollection[i].remove()
  }
  displayProjects(projectsArray)
};


function createDeleteButton (area) {
  const buttonContainer = document.createElement('div');
  buttonContainer.setAttribute('class', 'del-button-container');

  const delImg = new Image();
  delImg.setAttribute('class', 'del-img');
  delImg.src= Delete;

  buttonContainer.appendChild(delImg);

  if (area === 'project'){
    let project = document.querySelector('.project-container');
    buttonContainer.setAttribute('id','delete-project');
    delImg.setAttribute('id', 'project-del-img');
    project.appendChild(buttonContainer);
  } else {
    let taskDisplay = document.querySelector('.todo-container');
    buttonContainer.setAttribute('id', 'delete-task');
    delImg.setAttribute('id', 'task-del-img');
    taskDisplay.appendChild(buttonContainer);
    console.log(taskDisplay)
  }
};


function createProjectContainer (projectObject) {
  const generalWrapper = document.querySelector('.general-content');

  const projectContainer = document.createElement('div')
  projectContainer.setAttribute('class', 'project-container');

  generalWrapper.appendChild(projectContainer);

  const projectInformation = document.createElement('div')
  projectInformation.setAttribute('class', 'project-information');
  
  projectContainer.appendChild(projectInformation)

  const projectTitle = document.createElement('h2');
  projectTitle.setAttribute('class', 'project-title');
  projectTitle.innerText = projectObject.projectName;

  projectInformation.appendChild(projectTitle);
  
  const projectDescription = document.createElement('p');
  projectDescription.setAttribute('class', 'description');
  projectDescription.innerText = projectObject.description;

  projectInformation.appendChild(projectDescription);

  const listName = document.createElement('h2');
  listName.setAttribute('class', 'list-name');
  listName.innerText = 'Tasks';

  projectContainer.appendChild(listName);

  const toDoListContainer = document.createElement('div');
  toDoListContainer.setAttribute('class', 'list-display');
  projectContainer.appendChild(toDoListContainer);
};


function createTodoDisplay (tasksArray) {
  let toDoList = document.querySelector('.list-display');
  for (let i=0; i<tasksArray.length; i++) {
    let taskContainer = document.createElement('div');
    taskContainer.setAttribute('class', 'todo-container');

    const nameDescriptionContainer = document.createElement('div');

    taskContainer.appendChild(nameDescriptionContainer);

    let todoTitle = document.createElement('p');
    todoTitle.setAttribute('class', 'todo-title');
    todoTitle.innerText = tasksArray[i].title;

    nameDescriptionContainer.appendChild(todoTitle);

    let todoDueDate = document.createElement('p');
    todoDueDate.setAttribute('class', 'todo-duedate');
    todoDueDate.innerText = tasksArray[i].dueDate;

    nameDescriptionContainer.appendChild(todoDueDate);

    const expandButton = document.createElement('button');
    expandButton.setAttribute('id',`todo-task-${i}`);
    expandButton.setAttribute('class', 'expand-button');
    expandButton.innerText = 'Expand';

    taskContainer.appendChild(expandButton);

    toDoList.appendChild(taskContainer);
  }
};


function createFullProjectDisplay (projectObject) {
  createProjectContainer(projectObject);
  createTodoDisplay(projectObject.getTasks());
  createAddButton('project');
  createDeleteButton('project');
};


function updateTodoList (previousTodoNumber, tasksArray ) {
  let todoCollection = document.querySelectorAll('.todo-container');
  for (let i = 0; i < previousTodoNumber; i++){
    todoCollection[i].remove();
  }
  createTodoDisplay(tasksArray);
}


function detachElement (parentContainer, childElement) {
  const generalWrapper = document.querySelector(`${parentContainer}`);
  const removedElement = document.querySelector(`${childElement}`);

  generalWrapper.removeChild(removedElement);
}


export { createFullSideBar, createFullProjectDisplay, detachElement, updateSidebarList, updateTodoList };