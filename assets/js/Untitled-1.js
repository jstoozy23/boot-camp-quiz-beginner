var startBtn = document.getElementById("start");
var button = document.querySelectorAll(".btn")

var question = document.getElementById("question");
var answerA = document.getElementById("answera");
var answerB = document.getElementById("answerb");
var answerC = document.getElementById("answerc");
var answerD = document.getElementById("answerd");

var currentTime = document.getElementById("timer");
var secondsLeft ;

var startScreen = document.getElementById("startquestion")
var questionWindow = document.getElementById("questionwindow");

var questionsList = [
    {
        question: "Test 1",
        answera: "yes",
        answerb: "no",
        answerc: "no",
        answerd: "no",
        correct: "a",
    },
      {
        question: "Test 2",
        answera: "no",
        answerb: "yes",
        answerc: "no",
        answerd: "no",
        correct: "b",
    },
    {
        question: "Test 3",
        answera: "no",
        answerb: "no",
        answerc: "yes",
        answerd: "no",
        correct: "c",
    },
    {
        question: "Test 4",
        answera: "no",
        answerb: "yes",
        answerc: "no",
        answerd: "no",
        correct: "b",
    },
];


function startQuiz () {
    secondsLeft = 100;
    setInterval(function() {
        secondsLeft --;
        startScreen.setAttribute("style", "display:none");
        currentTime.textContent = secondsLeft;
        container.setAttribute("style", "display:block");
        question1()
        
    }, 1000);   
};

function question1(){
  
    var questionlist1 = questionsList[0];
   question.innerHTML = questionlist1.question;
    answerA.innerHTML = questionlist1.answera;
    answerB.innerHTML = questionlist1.answerb;
    answerC.innerHTML = questionlist1.answerc;
    answerD.innerHTML = questionlist1.answerd;
    answerA.addEventListener("click" , question2);   
    answerB.addEventListener("click" , question2); 
    answerC.addEventListener("click" , question2);    
    answerD.addEventListener("click" , question2);    
}; 

function question2() {
  
    var questionlist2 = questionsList[1];
    question.innerHTML = questionlist2.question;
    answerA.innerHTML = questionlist2.answera;
    answerB.innerHTML = questionlist2.answerb;
    answerC.innerHTML = questionlist2.answerc;
    answerD.innerHTML = questionlist2.answerd;
    answerA.addEventListener("click" , question3);   
    answerB.addEventListener("click" , question3); 
    answerC.addEventListener("click" , question3);    
    answerD.addEventListener("click" , question3);
};

function question3() {
  
    var questionlist3 = questionsList[2];
    question.innerHTML = questionlist3.question;
    answerA.innerHTML = questionlist3.answera;
    answerB.innerHTML = questionlist3.answerb;
    answerC.innerHTML = questionlist3.answerc;
    answerD.innerHTML = questionlist3.answerd;
    answerA.addEventListener("click" , question4);   
    answerB.addEventListener("click" , question4); 
    answerC.addEventListener("click" , question4);    
    answerD.addEventListener("click" , question4);

};

function question3() {
  
    var questionlist3 = questionsList[3];
    question.innerHTML = questionlist4.question;
    answerA.innerHTML = questionlist4.answera;
    answerB.innerHTML = questionlist4.answerb;
    answerC.innerHTML = questionlist4.answerc;
    answerD.innerHTML = questionlist4.answerd;
};

startBtn.addEventListener("click", startQuiz);