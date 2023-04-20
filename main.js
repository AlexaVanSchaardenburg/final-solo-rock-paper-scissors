//Data Model

//some of these vars can be put directly into functions
var userWins = 0;
var computerWins = 0;
var currentGame = 'classic';


//Global Variables
var playClassicButton = document.querySelector('#classic-button');
var playBenderButton = document.querySelector('#bender-button');
var homePage = document.querySelector('.home');
var classicGamePage = document.querySelector('.classic-game');
var benderGamePage = document.querySelector('.bender-game');
var backHomeButton = document.querySelector('.back-to-home-button')

//Event Listeners
playClassicButton.addEventListener('click', showClassicGame);
playBenderButton.addEventListener('click', showBenderGame);
backHomeButton.addEventListener('click', goBackToHome);


//Functions

function createPlayer(name, token){
    var player ={
        name: name,
        token: token,
        wins: 0
    }
    return player
}

function createGame(selectedGame){
    var user = createPlayer('You', '🤗')
    var computer = createPlayer('Computer', '💻')
    var game ={
        players: [user, computer],
        mode: selectedGame,
    }
    return game
}

//Functions to switch page views
function showClassicGame(){
    homePage.classList.add('hidden')
    classicGamePage.classList.remove('hidden')
    backHomeButton.classList.remove('hidden')
    currentGame = createGame('classic')
    //updates DM with current game 
};

function showBenderGame(){
    homePage.classList.add('hidden')
    benderGamePage.classList.remove('hidden')
    backHomeButton.classList.remove('hidden')
    currentGame = createGame('bender')
};

function goBackToHome(){
    homePage.classList.remove('hidden')
    benderGamePage.classList.add('hidden')
    classicGamePage.classList.add('hidden')
    backHomeButton.classList.add('hidden')
    //updates DM with current game
};

//functions to play game

function takeTurn(userFighter){
    //userFighter determined by target of event
    //updates DM with selections???
    var currentFighters = []
    var computerFighter = randomFighter(currentGame)
    currentFighters.push(userFighter)
    currentFighters.push(computerFighter)
    determineWinner(currentFighters)
    console.log(currentFighters)
};

function randomFighter(game){
    var classicOptions = ['rock', 'paper','scissors'];
    var benderOptions = ['water', 'earth', 'air', 'fire', 'spirit'];
    if (game === 'classic') {
        //randomly select from classic options array
        var index = getRandomIndex(classicOptions)
        return classicOptions[index]
    } else if (game === 'bender'){
        //randomly select from bender array
        var index = getRandomIndex(benderOptions)
        return classicOptions[index]
    }
};

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
};

function determineWinner(fighters){
    if (currentGame === 'classic'){
        determineWinnerOfClassic(fighters)
    } else if (currentGame === 'bender'){
        determineWinnerOfBender(fighters)
    }
};

function determineWinnerOfClassic(fighters){
    if(fighters[0] === 'paper' && fighters[1] === 'rock'){
        console.log(`User wins this round`)
    } else if (fighters[0] === 'scissors' && fighters[1] === 'paper'){
        console.log(`User wins this round`)
    } else if (fighters[0] === 'rock' && fighters[1] === 'scissors'){
        console.log(`User wins this round`)
    } else if(fighters[0] === fighters[1]){
        console.log('Its a draw!')
    } else {
        console.log(`Computer wins this round`)
    }
};

function determineWinnerOfBender(){
    
};

function displayResults(){

};

function displayWins(){

};

function resetPage(){

}

/* 
Game pseudo code - classic:
1. event listner on main to hear click on image
2. when click happen target image to invoke player function - image clicked should determine which player the user uses
3. function 
*/

