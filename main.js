//Data Model

//some of these vars can be put directly into functions
var userWins = 0;
var computerWins = 0;
var classicOptions = [];
var benderOptions = [];
var userFighter;
var computerFighter;


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

function showClassicGame(){
    homePage.classList.add('hidden')
    classicGamePage.classList.remove('hidden')
    backHomeButton.classList.remove('hidden')
};

function showBenderGame(){
    homePage.classList.add('hidden')
    benderGamePage.classList.remove('hidden')
    backHomeButton.classList.remove('hidden')
};

function goBackToHome(){
    homePage.classList.remove('hidden')
    benderGamePage.classList.add('hidden')
    classicGamePage.classList.add('hidden')
    backHomeButton.classList.add('hidden')
};

/* 
PROCESS FOR CLASSIC:

PROCESS FOR BENDER:


*/

