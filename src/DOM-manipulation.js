import Icon from './menu.png';


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
    
    const myIcon = new Image();
    myIcon.setAttribute('class', 'sdbar-icon')
    myIcon.src = Icon;

    let projectTitle = document.createElement('span');
    projectTitle.setAttribute('class', 'project-name');
    console.log(projectsArray[i]);
    projectTitle.textContent = projectsArray[i].projectName;

    project.appendChild(myIcon)
    project.appendChild(projectTitle);
    list.appendChild(project);
  }
}

export { createSidebar }