var readlineSync = require('readline-sync');
var score = 0;
var username = readlineSync.question("What is Your Name ?")
console.log("welcome " + username + " to HOW WELL U KNOW ABOUT SAI TEJAS ?");

function play(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer){
    console.log("correct answer!");
    score = score + 1;
  } else {
    console.log("wrong answer!");
  }
console.log("current score: ", score);
console.log("-------------")
}

var questions = [{
  question:"where do I live ? ",
  answer:"kolar"
},{
  question:"my favorite superhero would be ? ",
  answer:"thor" 
},{
  question:"where do I Study ? ",
  answer:"garden city university"
},{
  question:"what do I Study ? ",
  answer:"bca"
},{
  question:"what's my age ? ",
  answer:"19"
}
];

for (var i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

var topscores = [{
  name: "Sai Tejas",
  score: "5"
  
},{
  name : "Tejas",
  score: "4"
  
}];



console.log("Yay! You scored: ", score);
console.log("------------")
console.log("High Scores");
topscores.map(score => console.log(score.name, " : ", score.score))

console.log("-----------")

console.log("If u Scored higher than the highscorers, screenshot n ping me up ;)");

console.log("------------")

console.log("Thank You for playing HOW WELL YOU KNOW SAI TEJAS?")
