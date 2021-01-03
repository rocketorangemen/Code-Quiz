var timeLeft = 90;
var interval;
var questionTitle = document.getElementById("questionTitle");
var questionChoices1 = document.getElementById("questionChoices1");
var questionChoices2 = document.getElementById("questionChoices2");
var questionChoices3 = document.getElementById("questionChoices3");

var questions = [
  {
    title: "How many images can a page contain?",
    choices: ["one","two","three"],
    answer: "one"
  },
    {
    title: "How many images can a page contain?",
    choices: [11,22,33],
    answer: 11
  },
    {
    title: "How many images can a page contain?",
    choices: [111,222,333],
    answer: 1
  },
    {
    title: "How many images can a page contain?",
    choices: ["run","walk","jog"],
    answer: 1
  },
];


function startQuiz() {

   interval = setInterval(timer, 1000);
  quizQuestions();
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

function quizQuestions() {
  var i;
  for (i = 0; i >= questions.length; i++) {}

questionTitle.textContent = questions[0].title;
questionChoices1.textContent = questions[i].choices[0];
questionChoices2.textContent = questions[i].choices[1];
questionChoices3.textContent = questions[i].choices[2];

}