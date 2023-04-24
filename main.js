//Data Model
var currentGame;
var user = createPlayer('user', '🤗')
var computer = createPlayer('computer', '💻')

//Global Variables
var playClassicButton = document.querySelector('#classic-button');
var playBenderButton = document.querySelector('#bender-button');
var homePage = document.querySelector('.home');
var classicGamePage = document.querySelector('.classic-game');
var benderGamePage = document.querySelector('.bender-game');
var resultsPage = document.querySelector('.winner-annoucment')
var backHomeButton = document.querySelector('.back-to-home-button')
var userWins = document.querySelector('#user-wins')
var computerWins = document.querySelector('#computer-wins')
var winnerStatement = document.querySelector('.winner')

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

function show(element){
    element.classList.remove('hidden')
};

function hide(element){
    element.classList.add('hidden')
};

function showClassicGame(){
    hide(homePage)
    show(classicGamePage)
    show(backHomeButton)
    currentGame = 'classic'
};

function showBenderGame(){
    hide(homePage)
    show(benderGamePage)
    show(backHomeButton)
    currentGame = 'bender'
};

function goBackToHome(){
    hide(benderGamePage)
    hide(classicGamePage)
    hide(backHomeButton)
    show(homePage)
};

function showResultsPage(){
    resultsPage.classList.remove('hidden')
    benderGamePage.classList.add('hidden')
    classicGamePage.classList.add('hidden')
}

//functions to play game

function takeTurn(userFighter){
    var currentFighters = []
    var computerFighter = randomFighter(currentGame)
    currentFighters.push(userFighter)
    currentFighters.push(computerFighter)
    determineWinner(currentFighters)
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
    var winner; 
    if (fighters[0]===fighters[1]){
        winner = 'none';
    } else if (fighters[0]==='paper' && fighters[1]==='rock'){
        user.wins += 1
        winner = 'user';
    } else if (fighters[0]==='scissors' && fighters[1]==='paper'){
        user.wins += 1
        winner = 'user';
    } else if (fighters[0]==='rock' && fighters[1]==='scissors'){
        user.wins += 1
        winner = 'user';
    } else if (fighters[0]==='water' && fighters[1]==='rock'){
        user.wins += 1
        winner = 'user';
    } else if (fighters[0]==='water' && fighters[1]==='rock'){
        user.wins += 1
        winner = 'user';
    } else if (fighters[0]==='earth' && fighters[1]==='fire'){
        user.wins += 1
        winner = 'user';
    } else if (fighters[0]==='earth' && fighters[1]==='air'){
        user.wins += 1
        winner = 'user';
    } else if (fighters[0]==='air' && fighters[1]==='water'){
        user.wins += 1
        winner = 'user';
    } else if (fighters[0]==='air' && fighters[1]==='spirit'){
        user.wins += 1
        winner = 'user';
    } else if (fighters[0]==='fire' && fighters[1]==='spirit'){
        user.wins += 1
        winner = 'user';
    } else if (fighters[0]==='fire' && fighters[1]==='air'){
        user.wins += 1
        winner = 'user';
    } else if (fighters[0]==='spirit' && fighters[1]==='earth'){
        user.wins += 1
        winner = 'user';
    } else if (fighters[0]==='spirit' && fighters[1]==='water'){
        user.wins += 1
        winner = 'user';
    } else {
        computer.wins += 1
        winner = 'computer'
    } 
    displayWins()
    displayResults(fighters, winner)
    return winner
};


function displayResults(fighters, winner){
    if (winner === 'user'){
        // console.log(`You WIN! 🎉`)
        // //change inner text of winner to this
        winnerStatement.innerText = `You WIN! 🎉`
    } else if (winner === 'computer'){
        // console.log(`The computer wins this round 😭`)
        winnerStatement.innerText = `The computer wins this round 😭`
    } else {
        // console.log(`It's a draw!`)
        winnerStatement.innerText = `It's a draw!`
    }
//display fighters (use if statment to select imgs)
    console.log(fighters)
    showResultsPage()
};

function displayWins(){
    userWins.innerText = `Wins: ${user.wins}`
    computerWins.innerText = `Wins: ${computer.wins}`
};

// function resetPage(){

// };

/* connecting game to DOM/visual
- need event listener on main section - listens for click on page and targets the specific image - iterate trhough array of stored image ids to find matching id - store each image as a variable in array as id - use just name (aka 'fire') as id 
- This id will be the userFighter


savedPalettesSection.addEventListener('click', function (e) {
    if (e.target.classList.contains("delete-button")) {
        confirmDelete(e)
    }
    displaySaved();
});

we invoke takeTurn function on click with userFighter being determined by the event target
*/