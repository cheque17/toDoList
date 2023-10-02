import './style.css'
import './toDoCreation'
import {createProject} from './toDoCreation'
import { createFullSideBar, createFullProjectDisplay, detachElement, updateSidebarList, updateTodoList } from './DOM-manipulation';
import { createAddProjectCard, createAddTodoCard, createDeleteCard } from './pop-up-DOM';


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

document.querySelector('#projects-list').addEventListener('click', (e)=>{
  if(e.target.className === 'project-name'){
    let projTitl = e.target.innerText;
    for (let i=0; i<projects.length; i++){
      if (projects[i].projectName == projTitl) {
        detachElement('.general-content', '.project-container');
        createFullProjectDisplay(projects[i]);
        projectShown = i;
      }
    }
  }
})

let popUpDisplayed;

document.querySelector('#add-project').addEventListener('click', ()=>{
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

document.querySelector('.general-content').addEventListener('click', (e)=> {
  if (e.target.id === 'project-del-img'){
    if(popUpDisplayed) {
      return
    }
    createDeleteCard();
    popUpDisplayed = 1;
  }
});

document.getElementsByTagName('body')[0].addEventListener('click', (e)=> {
  console.log(e.target.id);
  if (e.target.id === 'cancel-button'){
    detachElement('#test', '.delete-card-container')
    popUpDisplayed = 0;
  } else if (e.target.id === 'continue-button'){
    detachElement('.general-content','.project-container')
    projects.splice(projectShown, 1);
    createFullProjectDisplay(projects[0]);
    projectShown = 0;
    detachElement('#test', '.delete-card-container')
    console.log(projects)
  }
})



document.getElementsByTagName('body')[0].addEventListener('click', (e)=> {
  if(e.target.id === 'exit-button'){
    detachElement('#test', '.collecter-container')
    popUpDisplayed = 0
  } else if (e.target.id === 'submit-project'){
    if (document.querySelector('#new-pr-name').value && document.querySelector('#new-pr-description').value ) {
      addProject(document.querySelector('#new-pr-name').value, document.querySelector('#new-pr-description').value);
    detachElement('#test', '.collecter-container');
    updateSidebarList(projects)
    popUpDisplayed = 0;
    } else {
      alert('All the fields should be filled for a project to be created.')
    }    
  } else if (e.target.id === 'submit-todo'){
    let todoName = document.querySelector('#new-task-title');
    let todoDx = document.querySelector('#new-task-description');
    let todoDate = document.querySelector('#new-task-date');
    let todoPriority = document.querySelector('#new-task-priority');
    if (todoName.value && todoDx.value && todoDate.value){
      const previousTodoNumber = projects[projectShown].getTasks().length;
      projects[projectShown].addTask(todoName.value, todoDx.value, todoDate.value, todoPriority.value);
      detachElement('#test', '.collecter-container');
      popUpDisplayed = 0;
      updateTodoList(previousTodoNumber, projects[projectShown].getTasks())
    } else {
      alert('Title, description and date should be filled for a todo to be added.')
    }
  }
})

