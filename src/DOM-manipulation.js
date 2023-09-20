import Icon from './project.png';


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
  const myIcon = new Image();
  myIcon.src = Icon;

  
  for (let i=0; i<projectsArray.length; i++) {
    let project = document.createElement('li');
    let projectDiv = document.createElement('div');
    projectDiv.setAttribute('class', 'project-name');
    

    project.appendChild(projectDiv);
    //projectDiv.appendChild(myIcon);

    let projectTitle = document.createElement('span');
    console.log(projectsArray[i]);
    projectTitle.textContent = projectsArray[i].projectName;

    projectDiv.appendChild(projectTitle);
    list.appendChild(project);
  }
}

export { createSidebar }