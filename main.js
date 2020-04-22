//variable to store the list of guesses
let guesses = [];

// variable to store the correct random number
let correctNumber = getRandomNumber();

window.onload = function(){
    document.getElementById('number-submit').addEventListener("click",playGame);
    document.getElementById('restart-game').addEventListener("click",restartGame);
}
function playGame() {
    let numberGuess = document.getElementById('number-guess').value;
   //console.log(correctNumber);
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();
  scoreGame();
  document.getElementById('number-guess').value = " ";
}

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 100) +1;
    /* console.log(randomNumber); */
    return randomNumber;
}

function displayResult(numberGuess){
    if(numberGuess > correctNumber && numberGuess <= 100){
        showNumberAbove();
    }
    else if(numberGuess < correctNumber){
        showNumberBelow();
    }
    else if(numberGuess == correctNumber){
        showYouWon();
    }
    else if(numberGuess > 100){
        chooseNumberBelow100();
    }
}

function getDialog(dialogType,text){
    let dialog;
    switch(dialogType){
        case "won":
            dialog = "<div class='alert alert-success' role='alert'>";
            break;
            case "warning":
                dialog = "<div class='alert alert-warning' role='alert'>";
                break;
                case "danger":
                    dialog = "<div class='alert alert-danger' role='alert'>";
                    break;
                    case "secondary":
                        dialog = "<div class='alert alert-secondary' role='alert'>";
                        break;
    }
    dialog += text;
    dialog += "</div>";
    return dialog;
}

function showYouWon(){
    const text = "Nice Job! You won!!!"

    let dialog = getDialog('won',text);
    document.getElementById('result').innerHTML = dialog;
}
function showNumberAbove(){
    const text = "Your Guess is too high!"

    let dialog = getDialog('warning',text);
    document.getElementById('result').innerHTML = dialog;
}
function showNumberBelow(){
    const text = "Sorry! your Guess is too low!"

    let dialog = getDialog('danger',text);
    document.getElementById('result').innerHTML = dialog;
}
function chooseNumberBelow100(){
    const text = "Oops!!! you must choose number from 1-100 :)"

    let dialog = getDialog('secondary',text);
    document.getElementById('result').innerHTML = dialog;
}

function saveGuessHistory(guess){
    guesses.push(guess); 
}

function displayHistory() {
    let index = guesses.length -1;
    let list = "<ul class='list-group p-3'>";
    while(index >= 0){
      list += "<li class='list-group-item text-light bg-danger'>" +
      "You guessed" + ' ' + guesses[index] + "</li>";
      index--;
    }
    list += '</ul>'
    document.getElementById("history").innerHTML = list;
  }

  function restartGame(){
    let correctNumber = getRandomNumber();
    document.getElementById('result').innerHTML = " ";
    document.getElementById('score').innerHTML = " ";
    guesses =[];
    displayHistory();
    document.getElementById('number-guess').value = " ";
  }

  function scoreGame() {
    let p = "<p>";
    for(let gameScore = 0; gameScore < guesses.length; gameScore++){
      p = "Your Score:" + ' ' + (gameScore+1);
    }
    p += '</p>'
    document.getElementById("score").innerHTML = p;
}