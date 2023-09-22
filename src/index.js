import './style.css'
import './toDoCreation'
import {createProject} from './toDoCreation'
import { createSidebar, createProjectDisplay, createTodoDisplay } from './DOM-manipulation'


const projects = [];
 
const addProject = (name, description) =>{
  projects.push(createProject(name, description));
}



addProject('Default project', 'This is just a random description to get things working and so on. Typing more rubbish to get a longer description');
addProject('Extra Test', 'From the moment I understood the weakness of my flesh it disgusted me. I craved the strenght and certainty of steel. Aspired to the purity of the blessed machine. ')
addProject('Third project', 'your kind cling to your flesh as though it will not decay and wither. One day the crude biomass you call the temple will fail you. And you will beg my kind to save you, but I\'m already saved. For the blessed machine is inmortal. Even im death I serve the great omnisia');

projects[0].addTask('Do laundry', "Wash my drawers and socks ASAP", '19/10/2023', 'high');
projects[0].addTask('Do the cooking', "Cook an ommelet", '19/10/2023', 'high')
projects[1].addTask('Clean my room', 'Fold my clothes, clean pc, take out trash', '21/4/24', 'low');
projects[2].addTask('Third stuff to do', 'Fold my clothes, clean pc, take out trash', '21/4/24', 'low');


createSidebar(projects);
createProjectDisplay(projects[0]);

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