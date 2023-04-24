//Data Model
var game = createGame('game')

//Global Variable
var fightersInfo = [
    {
        name: 'rock',
        beats: ['scissors'],
        imgLink: "https://lh3.googleusercontent.com/drive-viewer/AAOQEOSzmgDCFMwpoQmc3HpGtiZbBsLUbU8U_Q8ieUHwd5vULs5DPYnbllzG8gT4MocpyT_pYLpCqMKxKgHNlN2ShlzmddN5dA=s2560"
    },
    {
        name: 'paper',
        beats: ['rock'],
        imgLink: "https://lh3.googleusercontent.com/drive-viewer/AAOQEORV8Y7IGEjBOcarUqfjlUeEGKIsfiKAcbZTfT7cs4arv4joLWXCmYpTJUwE9emUdkQpVGCVg33ytaWLChEk3CLGdom1Pw=s2560"
    },
    {
        name: 'scissors',
        beats: ['paper'],
        imgLink: "https://lh3.googleusercontent.com/drive-viewer/AAOQEORxY6MonbE2QikFBOjEu9i118ZDTzviC-2O7CDugbTL28Q0LtXK75lLHQxYF_EBdckneOsvw84kvGS-Fk6oHJJ4iK77lA=s2560"
    },
    {
        name: 'earth',
        beats: ['air', 'fire'],
        imgLink: "https://lh3.googleusercontent.com/drive-viewer/AAOQEOTUHJKlKO_XulXT4bZuvS1gIjLCV1gEQO4pPdpfuWK9zdjBRW3_YqG8A93DtIyC-lb3p9HkadHtld1ACkkvJkkFsWpm7Q=s2560"
    },
    {
        name: 'air',
        beats: ['spirit', 'water'],
        imgLink: "https://lh3.googleusercontent.com/drive-viewer/AAOQEOSoYt6qfxugqKlNlc_lCUAMeSLJ53PGvZRHOS0QPBQtcwfn5mGoA8TaCOBbiwUB0e7rG_En6gXAi3LGNRkCqRjYWyxlow=s2560"
    },
    {
        name: 'fire',
        beats: ['air', 'spirit'],
        imgLink: "https://lh3.googleusercontent.com/drive-viewer/AAOQEOTfnx1a8z6KczG9bVJAUzh1EyGwM9k7AO4G0pb0ssF2Q37gG30aEcwjBjlp6I5ZmLM1jMY-Mz5EsGecxjRF8LrL8E_UbA=s2560"
    },
    {
        name: 'water',
        beats: ['earth', 'fire'],
        imgLink: "https://lh3.googleusercontent.com/drive-viewer/AAOQEOT37JbXKW4WoppiVg8ne1-gpWi5qvImIx1_WNI6YF8RW9SHbKTlMTxX9iS6DFGtSU0qGPFGnPZ7W-0UQvF_2mPWyd9BVA=s2560"
    },
    {
        name: 'spirit',
        beats: ['water', 'earth'],
        imgLink: "https://lh3.googleusercontent.com/drive-viewer/AFGJ81p44Z9xQFFld30r608MIp0pdznnPVjpV3zTtRZYY5ZQkHNjeSz2M0oZ5X6dA8vSn5Z3OnvuU8Wc6gRWPChBkr_LpIBnkA=s2560"
    },
]

//Global Variables
var playClassicButton = document.querySelector('#classic-button');
var playBenderButton = document.querySelector('#bender-button');
var homePage = document.querySelector('.home');
var classicGamePage = document.querySelector('.classic-game');
var benderGamePage = document.querySelector('.bender-game');
var fighterOptionsClassic = document.querySelector('#classic-options');
var fighterOptionsBender = document.querySelector('#bender-options');
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
fighterOptionsClassic.addEventListener('click', function(e){
    selectUserFighter(e)
})
fighterOptionsBender.addEventListener('click', function(e){
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
    game.mode = 'classic'
};

function showBenderGame(){
    hide(homePage)
    show(benderGamePage)
    show(backHomeButton)
    game.mode = 'bender'
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
    var userFighter;
    for (var i=0; i<fightersInfo.length; i++){
        if (e.target.classList.contains(fightersInfo[i].name)){
            userFighter = fightersInfo[i].name
        }
    }
    takeTurn(userFighter)
    return userFighter
};

function takeTurn(userFighter){
    var currentFighters = []
    var computerFighter = randomFighter(game.mode)
    currentFighters.push(userFighter)
    currentFighters.push(computerFighter)
    determineWinner(currentFighters)
};

function randomFighter(gameMode){
    var classicOptions = ['rock', 'paper','scissors'];
    var benderOptions = ['water', 'earth', 'air', 'fire', 'spirit'];
    if (gameMode === 'classic') {
        var index = getRandomIndex(classicOptions)
        return classicOptions[index]
    } else if (gameMode === 'bender'){
        var index = getRandomIndex(benderOptions)
        return benderOptions[index]
    }
};

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
};

function determineWinner(fighters){
    var winner; 
    for (var i=0; i<fightersInfo.length; i++){
        var winner;
        if(fighters[0]===fighters[1]){
            winner = 'none'
        } else if(fighters[0]===fightersInfo[i].name && fightersInfo[i].beats.includes(fighters[1])){
            winner = 'user'
        } else if (fighters[0]===fightersInfo[i].name && !fightersInfo[i].beats.includes(fighters[1])){
            winner = 'computer'
        }
    }
    updateWins(winner)
    displayResults(fighters, winner)
    return winner
};

function updateWins(winner){
    if(winner === 'user'){
        game.players[0].wins += 1
    } else if (winner === 'computer'){
        game.players[1].wins += 1
    }
    displayWins()
};

function displayWins(){
    userWins.innerText = `Wins: ${game.players[0].wins}`
    computerWins.innerText = `Wins: ${game.players[1].wins}`
};

function displayResults(fighters, winner){
    setTimeout(resetPage, 5000)
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
    for (var i=0; i<fightersInfo.length; i++){
        if (fighter === fightersInfo[i].name){
            imgLink = fightersInfo[i].imgLink
        }
    }
    return imgLink
}

function resetPage(){
    hide(resultsPage)
    show(backHomeButton)
    if (game.mode === 'classic'){
        show(classicGamePage)
    } else {
        show(benderGamePage)
    }
};
/* Things to Refactor:
- store and access players and the currentGame through the game object --- game object becomes data model ✅
- store fighters in array of objects - store their name, img, and who they beat in there ✅
    - refactor long if else statments into for loops that look for that conditional ✅
- maybe instead of using fighters array over and over store each fighter in the data model and access it by name to help with readbility.
*/
