
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
const start_container = document.querySelector(".container-start")
const answer_btn = document.querySelector(".answer-btn")
const next = document.querySelector(".next-btn")
const main_contant = document.querySelector(".main_contant")
 question_container.style.display= "none"
 next.style.display = "none"
 var submitbtn= document.querySelector(".submit")
 var userdisplay = document.querySelector


var seconds = 75;
var score= 0;
var qi=0;

start.addEventListener("click",function(){
    start_container.style.display="none"
    main_contant.style.display="none"
    question_container.style.display= "inline-block"
    next.style.display ="inline-block"
    console.log("gamestart")
    startgame()
})

function startgame(){
    timer = setInterval(timer_set, 1000)
    show_question(qi)
    }




function timer_set(){
seconds--
timer.textContent = "time" + seconds;
if(seconds<=0){
    // break
}
}


var questiontext = document.createElement("h1")
function show_question(q){
 for(var i=0; i<questions.length; i++){
    var firstq= questions[q].question
    console.log(firstq)
    var firsto= questions[q].options
    questiontext.innerHTML = firstq
 }

   
// var firstq= questions[q].question
// var firsto= questions[q].options

// questiontext.innerHTML = firstq
question_container.appendChild(questiontext)
firsto.forEach(option=>{
    var optionitem = document.createElement("button")

    optionitem.setAttribute('style', 'background-color: blue')
    optionitem.style.color = 'white'
    optionitem.textContent= option
    question_container.appendChild(optionitem)
optionitem.addEventListener("click", function(){
    console.log(option)
    check(option)
})

})
}
function check(ans){

    var optionitem = document.createElement("button")

    var status = document.createElement("h1")
    if(ans===questions[qi].correctanswer){
        status.innerHTML = "correct"
        score = score +25;
        var scoredisplay = document.querySelector(".score")
         scoredisplay.innerHTML = "Your Final Score is" +" " +score;
        console.log(score)
    }
    else{
        optionitem.setAttribute('style', 'background-color: red')
        status.innerHTML= "Wrong"
    }
question_container.appendChild(status)
qi++
nextquestion(qi, status)
}


function nextquestion(q , status){
next.addEventListener("click", function(){
    question_container.innerHTML =""
    
    if(q>=questions.length){
        status.innerHTML = ""
        done()
    }
    else{
        show_question(q)
        status.innerHTML = ""
    }
})
}

var scoredisplay = document.querySelector(".score")
scoredisplay.innerHTML = "Your Final Score is" + score;

const end_page= document.querySelector(".box2")
end_page.style.display="none"


function done(){
next.style.display = "none"
end_page.style.display = "inline-block"

}

function save(){
submitbtn.addEventListener("click", function(){
var savescore = JSON.parse(localStorage.getItem("savescore"))
var user = input.value()
localStorage.setItem("savescore", JSON.stringify(savescore))
localStorage.setItem("user", JSON.stringify(user))

})
userdisplay.innerHTML = "Your Final Score is" +" " + savescore;
        console.log(score)
}