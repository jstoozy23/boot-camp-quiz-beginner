var startBtn = document.getElementById("start");
var submitBtn = document.getElementById("submit");
var userName = document.getElementById("username");

var question = document.getElementById("question");
var answerA = document.getElementById("answera");
var answerB = document.getElementById("answerb");
var answerC = document.getElementById("answerc");
var answerD = document.getElementById("answerd");

var currentTime = document.getElementById("timer");
var highScore = document.getElementById("highscore")
var secondsLeft ;

var startScreen = document.getElementById("startquestion");
var questionWindow = document.getElementById("questionwindow");
var scoreScreen = document.getElementById("scorescreen");

var questionsList = [
    {
        question: "In which city is the University of Arizona located?",
        answera: "Tucson",
        answerb: "Prescot",
        answerc: "Tempe",
        answerd: "Bisbee",
    },
      {
        question: "In which state is the Grand Canyon located?",
        answera: "Colorado",
        answerb: "Arizona",
        answerc: "Michigan",
        answerd: "California",
    },
    {
        question: "What is the mascot of the University of Arizona",
        answera: "Lions",
        answerb: "Tigers",
        answerc: "Wildcats",
        answerd: "Bears",
    },
    {
        question: "What is the first name of our TA?",
        answera: "Jim",
        answerb: "Curt",
        answerc: "Darren",
        answerd: "Chris",
    },
];

function startQuiz(time) {
    startBtn.removeEventListener("click", startQuiz);
    secondsLeft = 100;
    startScreen.setAttribute("style", "display:none");
    container.setAttribute("style", "display:block");

    var time = setInterval(function() {
       currentTime.textContent = secondsLeft;
       secondsLeft --;
        if (secondsLeft <= 0 ){
            clearInterval(time);
            endQuiz();
        }
        }, 1000);
            
}  

question1();

function minus10(){
    secondsLeft = secondsLeft - 10;
}


function question1(){
    var questionlist1 = questionsList[0];

        question.innerHTML = questionlist1.question;
        answerA.innerHTML = questionlist1.answera;
        answerB.innerHTML = questionlist1.answerb;
        answerC.innerHTML = questionlist1.answerc;
        answerD.innerHTML = questionlist1.answerd;
        questionWindow.addEventListener("click", answer1);
}

function answer1 (click){ 
    var target = click.target       
     if (target != answerA) { 
           minus10(); 
        }
    question2();
    questionWindow.removeEventListener("click", answer1);
}

    

function question2() {
  
    var questionlist2 = questionsList[1];

    question.innerHTML = questionlist2.question;
    answerA.innerHTML = questionlist2.answera;
    answerB.innerHTML = questionlist2.answerb;
    answerC.innerHTML = questionlist2.answerc;
    answerD.innerHTML = questionlist2.answerd;
    questionWindow.addEventListener("click", answer2);
}

function answer2 (click){
    var target = click.target    
        if (target != answerB) { 
            minus10();   
        }
     question3();  
    questionWindow.removeEventListener("click", answer2);   
 }

function question3() {
    
    var questionlist3 = questionsList[2];

    question.innerHTML = questionlist3.question;
    answerA.innerHTML = questionlist3.answera;
    answerB.innerHTML = questionlist3.answerb;
    answerC.innerHTML = questionlist3.answerc;
    answerD.innerHTML = questionlist3.answerd;
    questionWindow.addEventListener("click", answer3);
} 

function answer3(click){
    var target = click.target
     if (target != answerC) {  
        minus10();  
    }
     question4();   
    questionWindow.removeEventListener("click", answer3);    
}

function question4() {
    
    var questionlist4 = questionsList[3];
    
    question.innerHTML = questionlist4.question;
    answerA.innerHTML = questionlist4.answera;
    answerB.innerHTML = questionlist4.answerb;
    answerC.innerHTML = questionlist4.answerc;
    answerD.innerHTML = questionlist4.answerd; 
    questionWindow.addEventListener("click" , answer4);
}

function answer4(click){
    var target = click.target
  if (target != answerD) { 
            minus10();   
        }
    endQuiz();
    questionWindow.removeEventListener("click", answer4);
} 

function endQuiz(time){
    clearInterval(time);
    
    questionWindow.setAttribute("style", "display:none");
    scoreScreen.setAttribute("style", "display:block");
    
    highScore.textContent = userName.input;
    currentTime.textContent = secondsLeft;
}

startBtn.addEventListener("click", startQuiz);

// function event2(event){
//    var target = event.target.textContent;
//         if (target != answerB.textContent) { 
//             minus10();

//     questionWindow.removeEventListener("click", event2);       
//     questionWindow.addEventListener("click", question3);       
// }   
  
    

 
//     questionWindow.addEventListener("click" , function(event){
        
//         var target = event.target.textContent;
        
//         if (target == questionlist3.answerc){
//             clickEvent4();
//             questionWindow.removeEventListener("click", event);
//     }   else if (target != questionlist3.answerc) {    
//             questionWindow.removeEventListener("click" , event);
//             minus10();
//             clickEvent4();
            
//     }
// })}

// function clickEvent4() {
//     var questionlist4 = questionsList[3];

//     question.innerHTML = questionlist4.question;
//     answerA.innerHTML = questionlist4.answera;
//     answerB.innerHTML = questionlist4.answerb;
//     answerC.innerHTML = questionlist4.answerc;
//     answerD.innerHTML = questionlist4.answerd; 

//     questionWindow.addEventListener("click" , function(event){
       
//         var target = event.target.textContent;
       
//         if (target == questionlist4.answerd){
//             clearInterval(timer);
//             questionWindow.removeEventListener("click" , event);
//     }   else if (target != questionlist4.answerd) {
//             questionWindow.removeEventListener("click" , event);
//             minus10();
//             clearInterval(timer);
            
//     }
// })}; 





// function question2() {
  
//     var questionlist2 = questionsList[1];

//     question.innerHTML = questionlist2.question;
//     answerA.innerHTML = questionlist2.answera;
//     answerB.innerHTML = questionlist2.answerb;
//     answerC.innerHTML = questionlist2.answerc;
//     answerD.innerHTML = questionlist2.answerd;

//     answerB.addEventListener("click" , question3);

//     answerA.addEventListener("click" , question3);
//     answerA.addEventListener("click" )//, secondsLeft = secondsLeft - 10); 
//     answerC.addEventListener("click" , question3);
//     answerD.addEventListener("click" , question3);   
// };

// function question3() {
  
//     var questionlist3 = questionsList[2];

//     question.innerHTML = questionlist3.question;
//     answerA.innerHTML = questionlist3.answera;
//     answerB.innerHTML = questionlist3.answerb;
//     answerC.innerHTML = questionlist3.answerc;
//     answerD.innerHTML = questionlist3.answerd;

//     answerC.addEventListener("click" , question4);
//     answerA.addEventListener("click" , question4);
//     answerB.addEventListener("click" , question4);
//     answerD.addEventListener("click" , question4);
// };

// function question4() {
  
//     var questionlist4 = questionsList[3];

//     question.innerHTML = questionlist4.question;
//     answerA.innerHTML = questionlist4.answera;
//     answerB.innerHTML = questionlist4.answerb;
//     answerC.innerHTML = questionlist4.answerc;
//     answerD.innerHTML = questionlist4.answerd;
    
//     answerD.addEventListener("click");
//     clearInterval(timer);
//     answerA.addEventListener("click");
//     answerB.addEventListener("click");
//     answerC.addEventListener("click"); 
// };

