import Icon from './menu.png';
import Option from './more.png';
import Add from './add.png';

function createSidebar () {
  const generalContent = document.querySelector('.general-content');

  const sideBar = document.createElement('div');
  sideBar.setAttribute('class', 'sidebar');

  generalContent.appendChild(sideBar);

  const sectionName = document.createElement('h2')
  sectionName.textContent = 'Projects';
  
  sideBar.appendChild(sectionName);

  const separationBar = document.createElement('hr');
  sideBar.appendChild(separationBar);

  const listedProjects = document.createElement('ul');
  listedProjects.setAttribute('id', 'projects-list');

  sideBar.appendChild(listedProjects);
}

function displayProjects (projectsArray) {
  const list = document.querySelector('#projects-list');  
  
  for (let i=0; i<projectsArray.length; i++) {
    let project = document.createElement('li');
    project.setAttribute('class', 'list-project')
    
    const myProjIcon = new Image();
    myProjIcon.setAttribute('class', 'sdbar-icon')
    myProjIcon.src = Icon;

    let projectTitle = document.createElement('span');
    projectTitle.setAttribute('class', 'project-name');
    projectTitle.textContent = projectsArray[i].projectName;

    const myOptIcon = new Image();
    myOptIcon.setAttribute('class', 'options-icon');
    myOptIcon.src = Option;

    project.appendChild(myProjIcon)
    project.appendChild(projectTitle);
    project.appendChild(myOptIcon);
    list.appendChild(project);
  }
}

function createAddButton (area) {
  const buttonContainer = document.createElement('div');
  buttonContainer.setAttribute('class', 'button-container');
  
  const addImg = new Image();
  addImg.setAttribute('class', 'add-img');
  addImg.src = Add;

  buttonContainer.appendChild(addImg);

  if (area === 'sidebar'){
    let sideBar = document.querySelector('.sidebar');
    sideBar.appendChild(buttonContainer)
  } else {
    let project = document.querySelector('.project-container');
    project.appendChild(buttonContainer)
  }
  

}

function createFullSideBar (projectsArray) {
  createSidebar();
  displayProjects(projectsArray);
  createAddButton('sidebar');
}


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
  projectTitle.textContent = projectObject.projectName;

  projectInformation.appendChild(projectTitle);
  
  const projectDescription = document.createElement('p');
  projectDescription.setAttribute('class', 'description');
  projectDescription.innerText = projectObject.description;

  projectInformation.appendChild(projectDescription);

  const toDoListContainer = document.createElement('div');
  toDoListContainer.setAttribute('class', 'list-display');
  projectContainer.appendChild(toDoListContainer);

  const listName = document.createElement('h2');
  listName.setAttribute('clas', 'list-name');
  listName.innerText = 'Tasks';

  toDoListContainer.appendChild(listName);
}

function createTodoDisplay (tasksArray) {
  let toDoList = document.querySelector('.list-display');
  for (let i=0; i<tasksArray.length; i++) {
    let taskContainer = document.createElement('div');
    taskContainer.setAttribute('class', 'todo-container');

    let todoTitle = document.createElement('h3');
    todoTitle.setAttribute('class', 'todo-title');
    todoTitle.innerText = tasksArray[i].title;

    taskContainer.appendChild(todoTitle);

    let todoDescription = document.createElement('p');
    todoDescription.setAttribute('class', 'todo-description');
    todoDescription.innerText = tasksArray[i].description;

    taskContainer.appendChild(todoDescription);

    let todoDueDate = document.createElement('p');
    todoDueDate.setAttribute('class', 'todo-duedate');
    todoDueDate.innerText = tasksArray[i].dueDate;

    taskContainer.appendChild(todoDueDate);

    toDoList.appendChild(taskContainer);
    
  }
}

function createFullProjectDisplay (projectObject) {
  createProjectContainer(projectObject);
  createTodoDisplay(projectObject.getTasks());
  createAddButton('project')
}

function findProjectDisplayed (projectsArray) {
  for (let i = 0; i <projectsArray.length; i++) {
    if (projectsArray[i].displayed === 1) {
      return (i);
    }
  }
}

function detachCurrentProject () {
  const generalWrapper = document.querySelector('.general-content');
  const projectContainer = document.querySelector('.project-container');

  generalWrapper.removeChild(projectContainer);

}


export { createFullSideBar, createFullProjectDisplay, detachCurrentProject };