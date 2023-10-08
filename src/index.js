import './style.css'
import './toDoCreation'
import {createProject} from './toDoCreation'
import { createFullSideBar, createFullProjectDisplay, detachElement, updateSidebarList, updateTodoList } from './DOM-manipulation';
import { createAddProjectCard, createAddTodoCard, createDeleteCard, showFullTodoDetails } from './pop-up-DOM';

let projects = [];

const addProject = (name, description) =>{
  projects.push(createProject(name, description));
}

if (!localStorage.getItem('localProjectsStorage')){
  addProject('Personal Tasks', 'This is a space where you can save all your personal and most important todo\'s. It can be practicing a new language, working out, organizing a party, fixing your motorcycle, anything. This is a good place to start if you don\'t have a "Big Project" currently but you still want to hold yourself accountable for certain tasks or just keep this as a reminder. It\'s your choice.');
  addProject('Tasks assigned', 'This space is for tasks that have been assigned to you by other people. It can be for something related to work, school, a favour that someone ask you to do and you accepted. Any task that you wouldn\'t do if someone else hadn\'t asked you to do.')

  projects[0].addTask('Call my grandma', "Check on the old lady and ask how is she doing.", '2023-10-19', 'high');
  projects[0].addTask('Go to the gym and try getting 15 pull-ups', "Make sure to warm up properly to avoid injuries and get some chalk to help with the grip", '2023-10-19', 'high')
  projects[0].addTask('Clean the mess in my room.', 'Fold my clothes, clean pc, take out trash', '2024-04-21', 'medium');

  localStorage.setItem('localProjectsStorage', JSON.stringify(projects))
} else {
  let projectsFromStorage = JSON.parse(localStorage.getItem('localProjectsStorage'));
  for (let i = 0; i < projectsFromStorage.length; i++) {
    addProject(projectsFromStorage[i].projectName, projectsFromStorage[i].description)
    for(let j=0; j<projectsFromStorage[i].tasks.length; j++){
      projects[i].addTask(
        projectsFromStorage[i].tasks[j].title,
        projectsFromStorage[i].tasks[j].description,
        projectsFromStorage[i].tasks[j].dueDate,
        projectsFromStorage[i].tasks[j].priority
        )
    }
  }
}

function updateLocallyStoredProjects () {
  localStorage.setItem('localProjectsStorage', JSON.stringify(projects));
};



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
    updateLocallyStoredProjects();
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
      updateLocallyStoredProjects();      
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
      updateLocallyStoredProjects();
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
    updateLocallyStoredProjects();
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
    updateLocallyStoredProjects();
  }
});


