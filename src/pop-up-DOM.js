const createPopUpFrame = (use)=>{
  const body = document.getElementsByTagName('body')[0];
  
  const popUpContainer = document.createElement('div');
  if(use === 'collecter'){
    popUpContainer.setAttribute('class', 'collecter-container');
  } else {
    popUpContainer.setAttribute('class', 'delete-card-container');
  }  

  body.appendChild(popUpContainer)
}



const createInfoRetriever = (infoRequested, inputId, inputType = 'text')=>{
  const container = document.querySelector('.collecter-container');

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
}

const createButton = function(buttonText, id) {
  const container = document.querySelector('.collecter-container');
  const buttonDiv = document.createElement('div');

  const neededButton = document.createElement('button');
  neededButton.setAttribute('type', 'button');
  neededButton.setAttribute('id', `${id}`)
  neededButton.innerText = buttonText; 

  buttonDiv.appendChild(neededButton);
  container.appendChild(buttonDiv);

}


function createAddProjectCard () {
  createPopUpFrame('collecter');
  createButton('x', 'exit-button')
  createInfoRetriever('Name:', 'new-pr-name');
  createInfoRetriever('Description:', 'new-pr-description')
  createButton('Submit', 'submit-project')
}

function createAddTodoCard () {
  createPopUpFrame('collecter');
  createButton('x', 'exit-button')
  createInfoRetriever('Title:','new-task-title');
  createInfoRetriever('Description', 'new-task-description');
  createInfoRetriever('Due Date', 'new-task-date', 'date');
  createInfoRetriever('Priority', 'new-task-priority')
  createButton('Submit', 'submit-todo')
}

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
}

function createDeleteCard () {
  createPopUpFrame('delete confirmation');
  createDeletePopUpContent('project');
};

export {createAddProjectCard, createAddTodoCard, createDeleteCard}