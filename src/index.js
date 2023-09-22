import './style.css'
import './toDoCreation'
import {createProject} from './toDoCreation'
import { createSidebar, createProjectDisplay } from './DOM-manipulation'


const projects = [];
 
const addProject = (name) =>{
  projects.push(createProject(name));
}



addProject('Default project');
addProject('Extra Test')
addProject('Third project');

projects[0].addTask('Do laundry', "Wash my drawers and socks ASAP", '19/10/2023', 'high');
projects[0].addTask('Do the cooking', "Cook an ommelet", '19/10/2023', 'high')
projects[1].addTask('Clean my room', 'Fold my clothes, clean pc, take out trash', '21/4/24', 'low');
projects[2].addTask('Third stuff to do', 'Fold my clothes, clean pc, take out trash', '21/4/24', 'low');


createSidebar(projects);
createProjectDisplay();

const sideBarOptions = document.querySelectorAll('.list-project');
sideBarOptions.forEach ((sideBarOption) => {
  sideBarOption.addEventListener('click', (e) => {
    let projTitl = e.target.innerText;
    for (let i=0; i<projects.length; i++){
      if (projects[i].projectName == projTitl) {
        console.log(projects[i]);
      }
    }

  })
})

console.log(projects[0].getTasks())
console.log('Heyyy, I\'m here')