import './style.css'
import './toDoCreation'
import {createProject} from './toDoCreation'
import { createFullSideBar, createFullProjectDisplay, detachElement, updateSidebarList, updateTodoList } from './DOM-manipulation';
import { createAddProjectCard, createAddTodoCard, createDeleteCard, showFullTodoDetails } from './pop-up-DOM';


const projects = [];
 
const addProject = (name, description) =>{
  projects.push(createProject(name, description));
}

//Projects created just for testing

addProject('Default project', 'This is just a random description to get things working and so on. Typing more rubbish to get a longer description. So let\' keep typing abit more just because, I don\'t want to have a small description. Lalalalala, lalalalala.');
addProject('Extra Test', 'From the moment I understood the weakness of my flesh it disgusted me. I craved the strenght and certainty of steel. Aspired to the purity of the blessed machine. ')
addProject('Third project', 'your kind cling to your flesh as though it will not decay and wither. One day the crude biomass you call the temple will fail you. And you will beg my kind to save you, but I\'m already saved. For the blessed machine is inmortal. Even im death I serve the great omnisia');

projects[0].addTask('Do laundry', "Wash my drawers and socks ASAP", '2023-10-19', 'high');
projects[0].addTask('Do the cooking', "Cook an ommelet", '2023-10-19', 'high')
projects[1].addTask('Clean my room', 'Fold my clothes, clean pc, take out trash', '2024-04-21', 'low');
projects[2].addTask('Third stuff to do', 'Fold my clothes, clean pc, take out trash', '24-4-21', 'low');


createFullSideBar(projects);
createFullProjectDisplay(projects[0]);


let projectShown = 0;
//This event listener makes the side bar options work and the variable keeps track of the project displayed
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
});

let popUpDisplayed;

//These event listeners make the add buttons work and the variable avoids more than one pop up to be displayed at once.

document.querySelector('#add-project').addEventListener('click', ()=>{
  if (popUpDisplayed) {
    return
  }
  createAddProjectCard()
  popUpDisplayed = 1;  
});

document.getElementsByTagName('body')[0].addEventListener('click', (e)=> {
  if(e.target.id === 'task-img-btt'){
    if(popUpDisplayed) {
      return
    }
    createAddTodoCard();
    popUpDisplayed = 1;
  }

});

document.querySelector('.general-content').addEventListener('click', (e)=> {
  if (e.target.id === 'project-del-img'){
    if(popUpDisplayed) {
      return
    }
    createDeleteCard();
    popUpDisplayed = 1;
  }
});


//This event listener controls the functioning of the delete card

document.getElementsByTagName('body')[0].addEventListener('click', (e)=> {
  if (e.target.id === 'cancel-button'){
    detachElement('#test', '.delete-card-container')
    popUpDisplayed = 0;
  } else if (e.target.id === 'continue-button'){
    detachElement('.general-content','.project-container')
    projects.splice(projectShown, 1);
    createFullProjectDisplay(projects[0]);
    projectShown = 0;
    updateSidebarList(projects);
    detachElement('#test', '.delete-card-container')
    popUpDisplayed = 0;
  }
});

//This event listener controls the functioning of the add pop up for both projects and tasks.

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
    let todoPriority = document.querySelector('#dropdown');
    if (todoName.value && todoDx.value && todoDate.value && todoPriority.value){
      const previousTodoNumber = projects[projectShown].getTasks().length;
      projects[projectShown].addTask(todoName.value, todoDx.value, todoDate.value, todoPriority.value);
      detachElement('#test', '.collecter-container');
      popUpDisplayed = 0;
      updateTodoList(previousTodoNumber, projects[projectShown].getTasks());
    } else {
      alert('All the fields should be filled for a todo to be added.')
    }
  }
});

//This event triggers the expand buttons

let todoIndex;

document.querySelector('.general-content').addEventListener('click', (e)=> {
  if (popUpDisplayed){
    return
  } else if (e.target.className === 'expand-button'){
    todoIndex = e.target.id.slice(-1);
    showFullTodoDetails(projects[projectShown].getTasks()[todoIndex]);
    popUpDisplayed= 1;
  }
});

document.getElementsByTagName('body')[0].addEventListener('click', (e)=>{
  if (e.target.id === 'exit-details'){
    detachElement('#test', '.details-container');
    popUpDisplayed = 0;
  } else if (e.target.id === 'delete-todo') {
    const previousTodoNumber = projects[projectShown].getTasks().length;
    projects[projectShown].tasks.splice(todoIndex, 1);
    detachElement('#test', '.details-container');
    popUpDisplayed = 0;
    updateTodoList(previousTodoNumber, projects[projectShown].getTasks())
  } else if (e.target.id === 'edit-todo'){
    const previousTodoNumber = projects[projectShown].getTasks().length;
    let todoName = document.querySelector('#new-task-title');
    let todoDx = document.querySelector('#new-task-description');
    let todoDate = document.querySelector('#new-task-date');
    let todoPriority = document.querySelector('#dropdown');
    projects[projectShown].tasks[todoIndex].title = todoName.value;
    projects[projectShown].tasks[todoIndex].description = todoDx.value;
    projects[projectShown].tasks[todoIndex].dueDate = todoDate.value;
    projects[projectShown].tasks[todoIndex].priority = todoPriority.value;
    detachElement('#test', '.details-container');
    popUpDisplayed = 0;
    updateTodoList(previousTodoNumber, projects[projectShown].getTasks());
  }
});


