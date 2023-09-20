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

console.log(projects[0].getTasks())
console.log('Heyyy, I\'m here')