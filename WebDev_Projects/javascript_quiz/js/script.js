let index = 0;
let attempt = 0;
let score = 0; 
let wrong = 0;


var audio1 = new Audio("sounds/rightanswer.mp3"); 
var audio2 = new Audio("sounds/wronganswer.mp3");

let questions = quiz.sort(function () {
    return 0.5 - Math.random();
});

let totalQuestion = questions.length;

audio1.playTrough = function () {
    audio1.play();
}

audio2.playTrough = function () {
    audio2.play();
}

$(function () {

    // timer code start from here 

    let totalTime = 200; // 200 seconds for timer
    let min = 0;
    let sec = 0;
    let counter = 0;

    let timer = setInterval(function () {

        counter++;
        min = Math.floor( (totalTime - counter) / 60 ); // calculating min
        sec = totalTime - (min * 60) - counter;

        $(".timerBox span").text(min + ":" + sec); 

        if(counter == totalTime) {

            alert("Time's up. Press ok to show the result.")
            result();

            clearInterval(timer);

        }


    }, 1000); // timer set for 1 seconds interval

    // timer code end here 







    // print Question

    printQuestion(index);
});


// Function to print question start 

function printQuestion(i) {

    $(".questionBox").text(questions[i].question);
    $(".optionBox span").eq(0).text(questions[i].option[0]);
    $(".optionBox span").eq(1).text(questions[i].option[1]);
    $(".optionBox span").eq(2).text(questions[i].option[2]);
    $(".optionBox span").eq(3).text(questions[i].option[3]);

}

// Function to print question end 


// Function to check answer start


function checkAnswer(option) {

    attempt++;

    let optionClicked = $(option).data("opt");

    // console.log(questions[index]);

    if(optionClicked == questions[index].answer) {

        audio1.play();

        $(option).addClass("right");
        score++;

    } else {

        audio2.play();
    
        $(option).addClass("wrong");
        wrong++;

    }

    $(".scoreBox span").text(score);

    $(".optionBox span").attr("onclick", "");


}


// Function to check answer end



// Function for the next question start 


function showNext() {

    if (index >= questions.length - 1) {

        showResult(0);
        return;

    }

    index++;

    $(".optionBox span").removeClass();

    $(".optionBox span").attr("onclick", "checkAnswer(this)");

    printQuestion(index);

}


// Function for the next question end 



// Function for result start 

    function showResult(j) {

        if (
            j == 1 && 
            index < questions.length - 1 && 
            !confirm("Quiz has not finished yet. Press ok to skip quiz & get you final result."
            )
        ) {
            return;
        }
        result();
    }

// Function for result end 



// Result function start

function result() { 

    $("#questionScreen").hide();
    $("#resultScreen").show();

    $("#totalQuestions").text(totalQuestion);
    $("#attemptQuestions").text(attempt);
    $("#correctAnswers").text(score);
    $("#wrongAnswers").text(wrong);

    if (attempt < 10) {
        $("#message").text("You didn't finish the quiz, please answer all questions!");
    } else if (attempt == 10 && score >= 8) {
        $("#message").text("Well Done!").css("color", "#09f109");
    } else if (attempt == 10 && score >= 6 && score < 8) {
        $("#message").text("You did good!").css("color", "#b4ff06");
    } else if (attempt == 10 && score >= 4 && score < 6) {
        $("#message").text("You didn't do very well on this quiz, try again!").css("color", "#f07c00");
    } else if (attempt == 10 && score < 4) {
        $("#message").text("You did really bad, try again!").css("color", "#ff2f00");
    };

}

// Result function end