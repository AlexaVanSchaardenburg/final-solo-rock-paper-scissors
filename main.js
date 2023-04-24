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
var fighterOptions = document.querySelector('.fighter-options')
var resultsPage = document.querySelector('.winner-annoucment')
var backHomeButton = document.querySelector('.back-to-home-button')
var userWins = document.querySelector('#user-wins')
var computerWins = document.querySelector('#computer-wins')
var winnerStatement = document.querySelector('.winner')
var userFighter = document.querySelector('#user-selected-fighter')
var computerFighter = document.querySelector('#computer-selected-fighter')

//Event Listeners
playClassicButton.addEventListener('click', showClassicGame);
playBenderButton.addEventListener('click', showBenderGame);
backHomeButton.addEventListener('click', goBackToHome);
fighterOptions.addEventListener('click', function(e){
    selectUserFighter(e)
})


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

function selectUserFighter(e){
    //e is target - write code to create userFighter based off of e and invoke takeTurn function
    //bug with user fighter --- maybe undefined becasue the computer always wins
    var userFighter;
    console.log(e.target)
    if (e.target.classList.contains('rock')){
        userFighter = 'rock'
        console.log(e.target)
    } else if (e.target.classList.contains('paper')){
        userFighter = 'paper'
    } else if (e.target.classList.contains('scissors')){
        userFighter = 'scissors'
    } else if (e.target.classList.contains('earth')){
        userFighter = 'earth'
    } else if (e.target.classList.contains('air')){
        userFighter = 'air'
    } else if (e.target.classList.contains('fire')){
        userFighter = 'fire'
    } else if (e.target.classList.contains('water')){
        userFighter = 'water'
    } else if (e.target.classList.contains('spirit')){
        userFighter = 'spirit'
    }
    console.log('click heard')
    console.log(userFighter)
    takeTurn(userFighter)
};

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

function displayWins(){
    userWins.innerText = `Wins: ${user.wins}`
    computerWins.innerText = `Wins: ${computer.wins}`
};

function displayResults(fighters, winner){
    hide(backHomeButton)
    if (winner === 'user'){
        winnerStatement.innerText = `You WIN! 🎉`
    } else if (winner === 'computer'){
        winnerStatement.innerText = `The computer wins this round 😭`
    } else {
        winnerStatement.innerText = `It's a draw!`
    }
    changeFighterImages(fighters)
    showResultsPage()
    setTimeout(resetPage, 7000)
};

function changeFighterImages(fighters){
    var userFighterImage = chooseImage(fighters[0])
    var computerFighterImage = chooseImage(fighters[1])
    userFighter.innerHTML = `<p>🤗</p>
    <img class="fighter" src=${userFighterImage} alt="user-fighter">`
    computerFighter.innerHTML = `<p>💻</p>
    <img class="fighter" src=${computerFighterImage} alt="computer-fighter">`
};

function chooseImage(fighter){
    var imgLink;
    if (fighter === 'rock'){
        imgLink = "https://lh3.googleusercontent.com/drive-viewer/AAOQEOSzmgDCFMwpoQmc3HpGtiZbBsLUbU8U_Q8ieUHwd5vULs5DPYnbllzG8gT4MocpyT_pYLpCqMKxKgHNlN2ShlzmddN5dA=s2560"
    } else if (fighter === 'paper'){
        imgLink = "https://lh3.googleusercontent.com/drive-viewer/AAOQEORV8Y7IGEjBOcarUqfjlUeEGKIsfiKAcbZTfT7cs4arv4joLWXCmYpTJUwE9emUdkQpVGCVg33ytaWLChEk3CLGdom1Pw=s2560"
    } else if (fighter === 'scissors'){
        imgLink = "https://lh3.googleusercontent.com/drive-viewer/AAOQEORxY6MonbE2QikFBOjEu9i118ZDTzviC-2O7CDugbTL28Q0LtXK75lLHQxYF_EBdckneOsvw84kvGS-Fk6oHJJ4iK77lA=s2560"
    } else if (fighter === 'air'){
        imgLink = "https://lh3.googleusercontent.com/drive-viewer/AAOQEOSoYt6qfxugqKlNlc_lCUAMeSLJ53PGvZRHOS0QPBQtcwfn5mGoA8TaCOBbiwUB0e7rG_En6gXAi3LGNRkCqRjYWyxlow=s2560"
    } else if (fighter === 'fire'){
        imgLink = "https://lh3.googleusercontent.com/drive-viewer/AAOQEOTfnx1a8z6KczG9bVJAUzh1EyGwM9k7AO4G0pb0ssF2Q37gG30aEcwjBjlp6I5ZmLM1jMY-Mz5EsGecxjRF8LrL8E_UbA=s2560"
    } else if (fighter === 'earth'){
        imgLink = "https://lh3.googleusercontent.com/drive-viewer/AAOQEOTUHJKlKO_XulXT4bZuvS1gIjLCV1gEQO4pPdpfuWK9zdjBRW3_YqG8A93DtIyC-lb3p9HkadHtld1ACkkvJkkFsWpm7Q=s2560"
    } else if (fighter === 'water'){
        imgLink = "https://lh3.googleusercontent.com/drive-viewer/AAOQEOT37JbXKW4WoppiVg8ne1-gpWi5qvImIx1_WNI6YF8RW9SHbKTlMTxX9iS6DFGtSU0qGPFGnPZ7W-0UQvF_2mPWyd9BVA=s2560"
    } else if (fighter === 'spirit'){
        imgLink = "https://lh3.googleusercontent.com/drive-viewer/AFGJ81p44Z9xQFFld30r608MIp0pdznnPVjpV3zTtRZYY5ZQkHNjeSz2M0oZ5X6dA8vSn5Z3OnvuU8Wc6gRWPChBkr_LpIBnkA=s2560"
    }
    return imgLink
}

function resetPage(){
    hide(resultsPage)
    show(backHomeButton)
    if (currentGame === 'classic'){
        show(classicGamePage)
    } else {
        show(benderGamePage)
    }
};

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