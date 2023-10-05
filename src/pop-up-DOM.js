const createPopUpFrame = (use)=>{
  const body = document.getElementsByTagName('body')[0];
  
  const popUpContainer = document.createElement('div');
  if(use === 'collecter'){
    popUpContainer.setAttribute('class', 'collecter-container');
  } else if (use === 'delete-confirmation') {
    popUpContainer.setAttribute('class', 'delete-card-container');
  } else {
    popUpContainer.setAttribute('class','details-container');
  }

  body.appendChild(popUpContainer)
};


const createInfoRetriever = (infoRequested, inputId, mainContainerSelector ='.collecter-container', inputType = 'text')=>{
  const container = document.querySelector(mainContainerSelector);

  const questionContainer = document.createElement('div');

  const question = document.createElement('label');
  question.innerText = infoRequested;
  question.setAttribute('class', 'question');

  const answerInput = document.createElement('input');
  answerInput.setAttribute('class', 'answer');
  answerInput.setAttribute('id', `${inputId}`)

  if (inputType !== 'text') {
    answerInput.setAttribute('type', `${inputType}`)
  }

  questionContainer.appendChild(question);
  questionContainer.appendChild(answerInput)
  container.appendChild(questionContainer)
};

const createPrioritySelector = (mainContainerSelector = '.collecter-container')=>{
  const container = document.querySelector(mainContainerSelector);

  const selectDiv = document.createElement('div');

  const selectLabel = document.createElement('label');
  selectLabel.innerText = 'Priority';

  const selectMenu = document.createElement('select');
  selectMenu.setAttribute('id', 'dropdown');

  selectDiv.appendChild(selectLabel);
  selectDiv.appendChild(selectMenu);

  container.appendChild(selectDiv);

  const option1 = document.createElement('option');
  option1.innerText = 'Low';
  option1.setAttribute('value', 'low');

  const option2 = document.createElement('option');
  option2.innerText = 'Medium';
  option2.setAttribute('value', 'medium');

  const option3 = document.createElement('option');
  option3.innerText = 'High';
  option3.setAttribute('value', 'high');

  selectMenu.appendChild(option1);
  selectMenu.appendChild(option2);
  selectMenu.appendChild(option3);

  /*const fieldset = document.createElement('fieldset');
  const genericDiv = document.createElement('div');
  const legend = document.createElement('legend');
  legend.innerText = 'Priority:'

  fieldset.appendChild(legend);
  fieldset.appendChild(genericDiv);
  container.appendChild(fieldset);

  const inputOne = document.createElement('input');
  inputOne.setAttribute('type', 'radio');
  inputOne.setAttribute('id', 'low-priority');
  inputOne.setAttribute('value','low');
  inputOne.setAttribute('name', 'priority-level');

  const labelOne = document.createElement('label');
  labelOne.setAttribute('for', 'low-priority');
  labelOne.innerText = 'Low';

  const inputTwo = document.createElement('input')
  inputTwo.setAttribute('type', 'radio');
  inputTwo.setAttribute('id', 'high-priority');
  inputTwo.setAttribute('value','high');
  inputTwo.setAttribute('name', 'priority-level');

  const labelTwo = document.createElement('label');
  labelTwo.setAttribute('for', 'high-priority');
  labelTwo.innerText = 'High'; 

  genericDiv.appendChild(inputOne);
  genericDiv.appendChild(labelOne);
  genericDiv.appendChild(inputTwo);
  genericDiv.appendChild(labelTwo);*/

};

const createButton = function(buttonText, id) {
  const container = document.querySelector('.collecter-container');
  const buttonDiv = document.createElement('div');

  const neededButton = document.createElement('button');
  neededButton.setAttribute('type', 'button');
  neededButton.setAttribute('id', `${id}`)
  neededButton.innerText = buttonText; 

  buttonDiv.appendChild(neededButton);
  container.appendChild(buttonDiv);

};


function createAddProjectCard () {
  createPopUpFrame('collecter');
  createButton('x', 'exit-button')
  createInfoRetriever('Name:', 'new-pr-name');
  createInfoRetriever('Description:', 'new-pr-description')
  createButton('Submit', 'submit-project')
};

function createAddTodoCard () {
  createPopUpFrame('collecter');
  createButton('x', 'exit-button')
  createInfoRetriever('Title:','new-task-title');
  createInfoRetriever('Description:', 'new-task-description');
  createInfoRetriever('Due Date:', 'new-task-date', '.collecter-container', 'date');
  createPrioritySelector();
  createButton('Submit', 'submit-todo')
};

const createDeletePopUpContent = (deleteTarget)=> {
  const container = document.querySelector('.delete-card-container');
  
  const bigAttentionSeeker = document.createElement('p');
  bigAttentionSeeker.innerText = 'Hey, are you sure you want to continue?';

  container.appendChild(bigAttentionSeeker);

  const confirmationQuestion = document.createElement('p');
  confirmationQuestion.setAttribute('class', 'confirmation-question');

  if (deleteTarget === 'project'){
    confirmationQuestion.innerText = 'If you press confirm, this project and all its tasks will be deleted. Are you sure you want to continue?'
  } else {
    confirmationQuestion.innerText = 'If you press confirm, this task and all its details will be deleted. Are you sure you want to continue?'
  }

  container.appendChild(confirmationQuestion);

  const decisionButtonsContainer = document.createElement('div');
  decisionButtonsContainer.setAttribute('class', 'cancel-continue-container');

  container.appendChild(decisionButtonsContainer);

  const cancelButton = document.createElement('button');
  cancelButton.setAttribute('type', 'button');
  cancelButton.setAttribute('class', 'delete-decision');
  cancelButton.setAttribute('id', 'cancel-button');
  cancelButton.innerText = 'Cancel'

  decisionButtonsContainer.appendChild(cancelButton);
  
  const continueButton = document.createElement('button');
  continueButton.setAttribute('type','button');
  continueButton.setAttribute('class','delete-decision');
  continueButton.setAttribute('id', 'continue-button');
  continueButton.innerText = 'Continue';

  decisionButtonsContainer.appendChild(continueButton);
};

function createDeleteCard () {
  createPopUpFrame('delete-confirmation');
  createDeletePopUpContent('project');
};

const createDetailsCard = (projectTodoObject)=>{
  const popUpContainer = document.querySelector('.details-container');

  const exitDiv = document.createElement('div');
  const exitButton = document.createElement('button');
  exitButton.setAttribute('type', 'button');
  exitButton.setAttribute('id', 'exit-details');
  exitButton.innerText = 'x';

  popUpContainer.appendChild(exitButton);

  const titleDiv = document.createElement('div');
  
  popUpContainer.appendChild(titleDiv);

  const todoTitle = document.createElement('h3');
  todoTitle.innerText = projectTodoObject.title;

  titleDiv.appendChild(todoTitle);

  const descriptionDiv = document.createElement('div');

  popUpContainer.appendChild(descriptionDiv);

  const description = document.createElement('p');
  description.innerText = projectTodoObject.description;

  descriptionDiv.appendChild(description);

  const dueDateDiv = document.createElement('div');

  popUpContainer.appendChild(dueDateDiv);

  const todoDueDate = document.createElement('p');
  todoDueDate.innerText = projectTodoObject.dueDate;

  dueDateDiv.appendChild(todoDueDate);

  const priorityDiv = document.createElement('div');
  
  popUpContainer.appendChild(priorityDiv);

  const todoPriority = document.createElement('p');
  todoPriority.innerText = projectTodoObject.priority;

  priorityDiv.appendChild(todoPriority)

  console.log(projectTodoObject.dueDate)

};

function showFullTodoDetails (projectTodoObject) {
  createPopUpFrame('details');
  createInfoRetriever('Title:','new-task-title', '.details-container');
  createInfoRetriever('Description:', 'new-task-description', '.details-container');
  createInfoRetriever('Due Date:', 'new-task-date', '.details-container', 'date');
  createPrioritySelector('.details-container');

  const nameValue = document.querySelector('#new-task-title');
  nameValue.value = projectTodoObject.title;

  const descriptionValue = document.querySelector('#new-task-description');
  descriptionValue.value = projectTodoObject.description;

  const dueDateValue = document.querySelector('#new-task-date');
  dueDateValue.value = projectTodoObject.dueDate;

  const priorityOptions = document.querySelector('#dropdown');
  
  for (let i = 0; i <priorityOptions.options.length; i++){
    if (priorityOptions.options[i].value == projectTodoObject.priority){
      priorityOptions.options[i].selected = true;
      return
    }
  }

  
  console.log(priorityOptions);
  console.log(projectTodoObject)

  //createDetailsCard(projectTodoObject);
};

export {createAddProjectCard, createAddTodoCard, createDeleteCard, showFullTodoDetails}