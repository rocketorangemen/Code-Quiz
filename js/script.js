var timeLeft = 90;
var interval;
var questionTitle = document.getElementById("questionTitle");
var questionChoices1 = document.getElementById("questionChoices1");
var questionChoices2 = document.getElementById("questionChoices2");
var questionChoices3 = document.getElementById("questionChoices3");

var questions = [
  {
    title: "How many images can a page contain?",
    choices: [1,2,3],
    answer: 1
  },
    {
    title: "How many images can a page contain?",
    choices: [1,2,3],
    answer: 1
  },
    {
    title: "How many images can a page contain?",
    choices: [1,2,3],
    answer: 1
  },
    {
    title: "How many images can a page contain?",
    choices: [1,2,3],
    answer: 1
  },
]


function startQuiz() {

questionTitle.textContent = questions[0].title;
questionChoices1.textContent = questions[0].choices[0];
questionChoices2.textContent = questions[0].choices[1];
questionChoices3.textContent = questions[0].choices[2];

   interval = setInterval(timer, 1000);

}

function timer (){

  if(timeLeft == 0){
    clearInterval(interval);
    document.getElementById("timer").innerText = "Time's Up!";
    console.log(timeLeft);
  }
  else {
    document.getElementById("timer").innerText = `${timeLeft} seconds remaining`;
  }
  
  timeLeft--;

};

