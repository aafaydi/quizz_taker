
var questions = [
    {
        question:"What is the condition statement in Javascript?",
        options:[ "if else", "for loop", "while", "else if"],
        correctanswer:"if else"
    },
    {
        question:"Who won the soccer 1982 world cup?",
        options:[ "Germany", "Brazil", "Italy", "Iraq"],
        correctanswer:"Iraq"
    },

    {
        question:"What is the capital of France?",
        options:[ "Bankok", "Rome", "Doha", "Paris"],
        correctanswer:"Paris"
    },

    {
        question:"What is the coolest university in Northa Carolina?",
        options:[ "UNCG", "UNCC", "NC State", "Duke"],
        correctanswer:"UNCC"
    },


    
]

var timer = document.getElementById("time")
const start = document.querySelector(".start-ptn")
var question_container = document.querySelector(".container-question")
const questionn = document.querySelector(".question")

const answer_btn = document.querySelector(".answer-btn")
const next = document.querySelector(".next-btn")


var seconds = 10;
var score= 0;

start.addEventListener("click",function(){
    console.log("gamestart")
    startgame()
})
function timer_set(){
seconds--
timer.textContent = "time" + seconds;
if(seconds<=0){
    // break
}
}
var qi=0;
function startgame(){
timer = setInterval(timer_set, 1000)
show_question(qi)
}

function show_question(q){
    

var firstq= questions[q].question
var firsto= questions[q].options
var questiontext = document.createElement("h1")
questiontext.innerHTML = firstq
question_container.appendChild(questiontext)
firsto.forEach(option=>{
    var optionitem = document.createElement("button")
    // btn.style.color = 'red';
    optionitem.textContent= option
    question_container.appendChild(optionitem)
optionitem.addEventListener("click", function(){
    console.log(option)
    check(option)
})

})
}
function check(ans){

    var status = document.createElement("h1")
    if(ans===questions[qi].correctanswer){
        status.innerHTML = "correct"
        score = score +25;
        var scoredisplay = document.querySelector(".score")
         scoredisplay.innerHTML = "Your Final Score is" + score;
        console.log(score)
    }
    else{
        status.innerHTML= "Wrong"
    }
question_container.appendChild(status)
qi++
nextquestion(qi, status)
}


function nextquestion(q , status){
next.addEventListener("click", function(){
    question_container.innerHTML =""
    show_question(q)
    status.innerHTML= ""
})
}

var scoredisplay = document.querySelector(".score")
scoredisplay.innerHTML = "Your Final Score is" + score;


