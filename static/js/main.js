//importere les ids 
const questionInput = document.getElementById('questionInput');
const answerInput = document.getElementById('answeInput');
const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');
const countQuestionSpan = document.getElementById('countQuestionSpan');
const questionsDiv = document.getElementById('questionsDiv');
function addQuestionToDiv(data) {
    const containerDiv = document.createElement('div');
    const span = document.createElement('span');
    const div = document.createElement('div');
    const btnSwitch = document.createElement('button');
    const btnDelete = document.createElement('button');

    // Append elements to containerDiv
    containerDiv.appendChild(span);
    containerDiv.appendChild(div);
    containerDiv.appendChild(btnSwitch);
    containerDiv.appendChild(btnDelete);

    // Add classes to elements
    containerDiv.classList.add('question', data.answer.toString());
    span.classList.add('idQuestion');
    div.classList.add('content');
    btnDelete.classList.add('delete');
    btnSwitch.classList.add('switch');

    // Set content of elements
    span.innerText = questionsDiv.children.length;
    div.innerText = data.question;
    btnSwitch.jsswitch = false;

    // Append containerDiv to questionsDiv
    questionsDiv.appendChild(containerDiv);
}

addQuestionToDiv({ id : 1 , question: 'question1', answer: 'false'});