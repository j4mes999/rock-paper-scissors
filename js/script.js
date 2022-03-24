const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const BEATS_STRING = "beats";

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
  console.log("Machine chose: "+result);
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
 * 5 rounds of the excited game rock, paper, scissors
 */
function game(){
    let playerWins = 0;
    let computerWins = 0;
    let gameResult = "";
    for(let i = 0; i < 5; i++){
      gameResult = playRound(playerOptionDecoded(),computerPlay());
      if(whoWon(gameResult) === 1){
          playerWins++;
      }else if(whoWon(gameResult) === 0){
          computerWins++;
      }
      showScore(playerWins,computerWins);
    }
    
}

function showScore(playerWins,computerWins){
    console.log(`Human: ${playerWins} Machine: ${computerWins}
    ---------------------------------------------------------`);

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

/**
 * 
 * @returns The string the user chose: `rock`, `paper` or `scissors`
 */
function playerOptionDecoded(){
    let playerOptionChar = PAPER;
    let playerOption = parseInt(prompt(`Welcome to Rock, Paper, Scissors. Please select one of the following:
    Enter 1 for paper
    Enter 2 for scissors
    Enter 3 for rock `));
    if(playerOption === 1){
      playerOptionChar = PAPER;
    }else if(playerOption === 2){
      playerOptionChar = SCISSORS;
    }else if(playerOption === 3){
      playerOptionChar = ROCK;
    }else{
      console.error("Invalid option");
    }
    console.log("User chose: "+playerOptionChar);
    return playerOptionChar;
}

game();
