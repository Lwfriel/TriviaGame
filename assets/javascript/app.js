$(document).ready(function () {

    var timeLeft = 30;

    var Q1 = {
        question: "Quesiton 1",
        a: "Answer 1",
        b: "Answer 2",
        c: "Answer 3",
        d: "Answer 4",
        ans: "Answer 1"
    };
    var Q2 = {
        question: "Quesiton 2",
        a: "Answer 1",
        b: "Answer 2",
        c: "Answer 3",
        d: "Answer 4",
        ans: "Answer 2"
    };
    var Q3 = {
        question: "Quesiton 3",
        a: "Answer 1",
        b: "Answer 2",
        c: "Answer 3",
        d: "Answer 4",
        ans: "Answer 3"
    };
    var Q4 = {
        question: "Quesiton 4",
        a: "Answer 1",
        b: "Answer 2",
        c: "Answer 3",
        d: "Answer 4",
        ans: "Answer 4"
    };

    var questionArray = [Q1, Q2, Q3, Q4];

    var count = 0;

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    var intervalId;

    function stop() {
        clearInterval(intervalId);
    }

    $("#gameBox").hide()
    $("#score").hide()

    function run() {
        clearInterval(IntervalId);
        intervalId = setInterval(function(){
            timeLeft--;
            $("#timerBox").html("<h1>Time Remaining: " + timeLeft + " </h1>");
        }, 1000)
    }

    function play() {
        timeLeft = 30;
        count = 0;
        correct = 0;
        incorrect = 0;
        unanswered = 0;
        clearInterval(intervalId)
        $("#startButton").hide();
        $("#gameBox").show();
        $("#score").hide();
    }

    $("#startButton").click(play)







    //Create start button
    //Create Click for start button (Use .click)
    //Hide Start Button (.hide function Jquery/MDN)
    //Create timer for "time remaining" (use setInterval)
    //Show first question (Use ".show" function MDN/Jquery on gamebox)
    //Show 4 answers 
    //Create Clicks for 4 answers (Use .click)
    //Create correct and incorrect (if/else)
    //Promt if answer was correct or incorrect & display correct answer- show correct answer (variables for correct/incorrect/unanswered (increases))
    //Create var for scores (increases), timer (decreases), arrays 
    //If ran out of time - show correct answer (.show function on displayBox)
    //Timeout for 3 second after each answer shown (use setTimeout)
    //Move to next question
    //Restart Timer  
    //Show Question 2 (repeat function - Pull next question from array) 
    //Show Answers 
    ////Create Clicks for 4 answers 
    //Create correct and incorrect 
    //Promt if answer was correct or incorrect & display correct answer
    //If ran out of time - show correct answer
    //Timeout for 3 second after each answer shown 
    //Next question - repeat steps for questions 
    //Hide gameBox
    //Show scoreBox
    //Final Page Show time remaining ("All done, here is how you did" )
    //Create Startover button with reset for game 








})