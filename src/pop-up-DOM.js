const createPopUpFrame = ()=>{
  const body = document.getElementsByTagName('body')[0];
  
  const popUpContainer = document.createElement('div')
  popUpContainer.setAttribute('class', 'collecter-container');

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
  createPopUpFrame();
  createButton('x', 'exit-button')
  createInfoRetriever('Name:', 'new-pr-name');
  createInfoRetriever('Description:', 'new-pr-description')
  createButton('Submit', 'submit-project')
}

function createAddTodoCard () {
  createPopUpFrame();
  createButton('x', 'exit-button')
  createInfoRetriever('Title:','new-task-title');
  createInfoRetriever('Description', 'new-task-description');
  createInfoRetriever('Due Date', 'new-task-date', 'date');
  createInfoRetriever('Priority', 'new-task-priority')
  createButton('Submit', 'submit-todo')
}

export {createAddProjectCard, createAddTodoCard}