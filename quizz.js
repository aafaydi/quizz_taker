var question=[
    {
        question:"What is the condition statement in Javascript?",
        answers: [
            {answer: "oneanswer", result:true}, 
            {answer: "twoanswer", result:false}
        ]
    },

    {
        question:"What is the condition statement in Javascript?",
        answers: [
            {answer: "oneanswer", result:true}, 
            {answer: "twoanswer", result:false}
        ]
    }
]

var timer = document.getElementById("time")
const start = document.querySelector(".start-ptn")
const question_container = document.getElementsByClassName("container-question")
const questionn = document.querySelector(".question")
const answer_btn = document.querySelector(".answer-btn")
const next = document.getElementsByClassName("next-btn")
var seconds = 10;
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

function startgame(){
timer = setInterval(timer_set, 1000)
show_question(question[0])
}

function show_question(q){
questionn.textContent = q.question
q.answers.forEach(answer => {
    answer_btn.textContent = answer.answer
});
}
