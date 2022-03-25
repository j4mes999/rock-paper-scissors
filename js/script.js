const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const BEATS_STRING = "beats";

const rockButton = document.querySelector(".button-rps-rock");
const paperButton = document.querySelector(".button-rps-paper");
const scissorsButton = document.querySelector(".button-rps-scissors");

let result = "";
let humanCountWins = 0;
let machineCountWins = 0;

rockButton.addEventListener("click",() =>{
  result = playRound(ROCK,computerPlay());
  gameOrchestator(result);
});

paperButton.addEventListener("click",() =>{
  result = playRound(PAPER,computerPlay());
  gameOrchestator(result);
});

scissorsButton.addEventListener("click",() =>{
  result = playRound(SCISSORS,computerPlay());
  gameOrchestator(result);
});


/**
 * Updates the result, the score showing the 
 * information in the HTML. Also checks the 
 * end of the game
 * @param {string} result 
 */
function gameOrchestator(result){
  updateResult(result);
  updateScore(whoWon(result));
  showScore();
  isEndOfGame();
}


/**
 * Validates if the game is over
 */
function isEndOfGame(){
  let whoWonMessage = "Human wins";
  if(humanCountWins == 5 || machineCountWins == 5){ 
    if(machineCountWins == 5) whoWonMessage = "Machine wins";
    alert("End of the game! "+whoWonMessage);
    resetGame();
  }
}

/**
 * Reset the variables of the game
 */
function resetGame(){
  document.getElementById("score").innerHTML = "Human 0 Machine 0";
  document.getElementById("result").innerHTML = "";
  machineCountWins = 0;
  humanCountWins = 0;
}

/**
 * Updates the score information given the result of the game
 * @param {number} codeResult 
 */
function updateScore(codeResult){
  if(codeResult == 1){
    humanCountWins++;
  }else if(codeResult == 0){
    machineCountWins++;
  }
}


/**
 * Updates de result text with the new result of the game
 * @param {string} result 
 */
function updateResult(result){
  document.getElementById("result").innerHTML = result;
}


/**
 * 
 * @returns a random choice from the computer
 */
function computerPlay(){
  let randomNumber = Math.floor(Math.random() * 10) % 3;
  let result = ROCK;
  switch(randomNumber){
      case 0:
          result = ROCK;
          break;
      case 1:
          result = PAPER;
          break;
      case 2:
          result = SCISSORS;
          break;
  }
  document.getElementById("machine-choice").innerHTML = "Machine chose: "+result;
  return result;  
}

/**
 * Returns a message with the result of the game
 * @param {string} playerSelection 
 * @param {string} computerSelection 
 * @returns message
 */
function playRound(playerSelection, computerSelection){
  let playerSelLower = playerSelection.toLowerCase();
  let message = "You lose ";
  if(playerSelLower === SCISSORS && computerSelection === ROCK){
    message = message.concat(ROCK+" "+BEATS_STRING+" "+SCISSORS);
  }else if(playerSelLower === PAPER && computerSelection === SCISSORS){
    message = message.concat(SCISSORS+" "+BEATS_STRING+" "+PAPER);
  }else if(playerSelLower === ROCK && computerSelection === PAPER){
    message = message.concat(PAPER+" "+BEATS_STRING+" "+ROCK);
  }else if(playerSelLower === computerSelection){
    message = "Tie game!";
  }else{
    message = "Congrats you won!";
  }
  return message;
}

/**
 * shows the score of the current game
 */
function showScore(){
    document.getElementById("score").innerHTML = `Human ${humanCountWins} Machine ${machineCountWins}`;
}

/**
 * 
 * @param {string} gameMessage 
 * @returns 0 if human loses, 1 if wins, 2 if tie
 */
function whoWon(gameMessage){

  if(gameMessage.includes(BEATS_STRING)){
      return 0;
  }else if(gameMessage.includes("Tie")){
      return 2;
  }else{
      return 1;
  }
}


