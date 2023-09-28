import './style.css'
import './toDoCreation'
import {createProject} from './toDoCreation'
import { createFullSideBar, createFullProjectDisplay, detachElement, createAddProjectCard, createAddTodoCard } from './DOM-manipulation'


const projects = [];
 
const addProject = (name, description) =>{
  projects.push(createProject(name, description));
}

//Projects created just for testing

addProject('Default project', 'This is just a random description to get things working and so on. Typing more rubbish to get a longer description. So let\' keep typing abit more just because, I don\'t want to have a small description. Lalalalala, lalalalala.');
addProject('Extra Test', 'From the moment I understood the weakness of my flesh it disgusted me. I craved the strenght and certainty of steel. Aspired to the purity of the blessed machine. ')
addProject('Third project', 'your kind cling to your flesh as though it will not decay and wither. One day the crude biomass you call the temple will fail you. And you will beg my kind to save you, but I\'m already saved. For the blessed machine is inmortal. Even im death I serve the great omnisia');

projects[0].addTask('Do laundry', "Wash my drawers and socks ASAP", '19/10/2023', 'high');
projects[0].addTask('Do the cooking', "Cook an ommelet", '19/10/2023', 'high')
projects[1].addTask('Clean my room', 'Fold my clothes, clean pc, take out trash', '21/4/24', 'low');
projects[2].addTask('Third stuff to do', 'Fold my clothes, clean pc, take out trash', '21/4/24', 'low');


createFullSideBar(projects);
createFullProjectDisplay(projects[0]);


let projectShown = 0;

const sideBarOptions = document.querySelectorAll('.list-project');
sideBarOptions.forEach ((sideBarOption) => {
  sideBarOption.addEventListener('click', (e) => {
    let projTitl = e.target.innerText;
    for (let i=0; i<projects.length; i++){
      if (projects[i].projectName == projTitl) {
        detachElement('.general-content', '.project-container');
        createFullProjectDisplay(projects[i]);
        projectShown = i;
        console.log(projectShown)
      }
    }
  })
})

let popUpDisplayed;

const addProjectButton = document.querySelector('#add-project');
addProjectButton.addEventListener('click', ()=>{
  if (popUpDisplayed) {
    return
  }
  createAddProjectCard()
  popUpDisplayed = 1;  
})

document.getElementsByTagName('body')[0].addEventListener('click', (e)=> {
  if(e.target.id === 'task-img-btt'){
    if(popUpDisplayed) {
      return
    }
    createAddTodoCard();
    popUpDisplayed = 1;
  }

})



document.getElementsByTagName('body')[0].addEventListener('click', (e)=> {
  if(e.target.id === 'exit-button'){
    detachElement('#test', '.collecter-container')
    popUpDisplayed = 0
  } else if (e.target.id === 'submit-project'){
    addProject(document.querySelector('#new-pr-name').value, document.querySelector('#new-pr-description').value);
    detachElement('#test', '.collecter-container');
    popUpDisplayed = 0;
    console.log(projects);
  } else if (e.target.id === 'submit-todo'){

  }
})



console.log(projects[0].getTasks())
console.log('Heyyy, I\'m here')