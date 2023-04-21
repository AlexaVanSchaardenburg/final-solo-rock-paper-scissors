//Data Model
var currentGame = 'bender'
var user = createPlayer('user', '🤗')
var computer = createPlayer('computer', '💻')

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
    currentGame = 'classic'
};

function showBenderGame(){
    homePage.classList.add('hidden')
    benderGamePage.classList.remove('hidden')
    backHomeButton.classList.remove('hidden')
    currentGame = 'bender'
};

function goBackToHome(){
    homePage.classList.remove('hidden')
    benderGamePage.classList.add('hidden')
    classicGamePage.classList.add('hidden')
    backHomeButton.classList.add('hidden')
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
    // console.log(currentFighters)
};

function randomFighter(game){
    var classicOptions = ['rock', 'paper','scissors'];
    var benderOptions = ['water', 'earth', 'air', 'fire', 'spirit'];
    if (game === 'classic') {
        var index = getRandomIndex(classicOptions)
        return classicOptions[index]
    } else if (game === 'bender'){
        var index = getRandomIndex(benderOptions)
        return benderOptions[index]
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
    if(fighters[0] === fighters[1]){
        console.log('Its a draw!')
    } else if(fighters[0] === 'paper' && fighters[1] === 'rock'){
        user.wins += 1
        console.log(`User wins this round`)
    } else if (fighters[0] === 'scissors' && fighters[1] === 'paper'){
        user.wins += 1
        console.log(`User wins this round`)
    } else if (fighters[0] === 'rock' && fighters[1] === 'scissors'){
        user.wins += 1
        console.log(`User wins this round`)
    } else {
        computer.wins += 1
        console.log(`Computer wins this round`)
    }
    displayWins()
};

function determineWinnerOfBender(fighters){
    if(fighters[0] === fighters[1]){
        user.wins += 1
        console.log('Its a draw!')
    } else if (fighters[0] === 'water' && fighters[1] === 'fire'){
        user.wins += 1
        console.log(`User wins this round`)
    } else if (fighters[0] === 'water' && fighters[1] === 'rock'){
        user.wins += 1
        console.log(`User wins this round`)
    } else if (fighters[0] === 'earth' && fighters[1] === 'air'){
        user.wins += 1
        console.log(`User wins this round`)
    } else if (fighters[0] === 'earth' && fighters[1] === 'fire'){
        user.wins += 1
        console.log(`User wins this round`)
    } else if (fighters[0] === 'air' && fighters[1] === 'water'){
        user.wins += 1
        console.log(`User wins this round`)
    } else if (fighters[0] === 'air' && fighters[1] === 'spirit'){
        user.wins += 1
        console.log(`User wins this round`)
    } else if (fighters[0] === 'fire' &&fighters[1] === 'spirit'){
        user.wins += 1
        console.log(`User wins this round`)
    } else if (fighters[0] === 'fire' && fighters[1] === 'air'){
        user.wins += 1
        console.log(`User wins this round`)
    } else if (fighters[0] === 'spirit' && fighters[1] === 'earth'){
        user.wins += 1
        console.log(`User wins this round`)
    } else if (fighters[0] === 'spirit' && fighters[1] === 'water'){
        user.wins += 1
        console.log(`User wins this round`)
    } else {
        console.log(`Computer wins this round`)
        computer.wins += 1
    }
    displayWins()
    displayResults()
};

function displayResults(fighters){
    //shows players fighters as images with their token next to it
    //has a sentence for which one won
    //timeout function to 
};

function displayWins(){
    console.log('user wins:' + user.wins + '   computer wins:' + computer.wins)
};

function resetPage(){

}

/* 
Game pseudo code - classic:
1. event listner on main to hear click on image
2. when click happen target image to invoke player function - image clicked should determine which player the user uses
3. function 
*/

