import Icon from './menu.png';
import Option from './more.png';


function createSidebar (projectsArray) {
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

  displayProjects(projectsArray);

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


function createProjectDisplay () {
  const generalWrapper = document.querySelector('.general-content');

  const projectContainer = document.createElement('div')
  projectContainer.setAttribute('class', 'project-container');

  generalWrapper.appendChild(projectContainer);

  const projectTitle = document.createElement('h2');
  projectTitle.setAttribute('class', 'project-title');
  projectTitle.textContent = "Project Title";

  projectContainer.appendChild(projectTitle);

}

function displayProjectInfoReceiver () {
  
}



export { createSidebar, createProjectDisplay }