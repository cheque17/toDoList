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
};

const createButton = function(buttonText, id, containerSelector = '.collecter-container') {
  const container = document.querySelector(containerSelector);
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

function showFullTodoDetails (projectTodoObject) {
  createPopUpFrame('details');
  createButton('x', 'exit-details', '.details-container')
  createInfoRetriever('Title:','new-task-title', '.details-container');
  createInfoRetriever('Description:', 'new-task-description', '.details-container');
  createInfoRetriever('Due Date:', 'new-task-date', '.details-container', 'date');
  createPrioritySelector('.details-container');

  const buttonsDiv = document.createElement('div');
  buttonsDiv.setAttribute('class', 'buttons-div-container');

  document.querySelector('.details-container').appendChild(buttonsDiv);

  createButton('Delete', 'delete-todo', '.buttons-div-container');
  createButton('Edit', 'edit-todo', '.buttons-div-container');

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

  
};

export {createAddProjectCard, createAddTodoCard, createDeleteCard, showFullTodoDetails}