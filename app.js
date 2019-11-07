let gameSettings = {
    gameSize: 5,
    bombs: 3,
};

let row1 = [];
let row2 = [];
let row3 = [];
let row4 = [];
let row5 = [];
let row6 = [];
let row7 = [];
let row8 = [];

const iterator = [
    row1,
    row2,
    row3,
    row4,
    row5,
    row6,
    row7,
    row8,
];


let selectedDropDown = document.querySelector('select');
let main = document.querySelector('main');

let squareAmount = gameSettings.gameSize * gameSettings.gameSize;

function makeSquares() {
    for (let i = 0; i < squareAmount; i++) {
        let div = document.createElement('div');
        main.appendChild(div);
    }
}

let sqauresArray = document.querySelectorAll('div');
setIds();

function generateBombs() {
    for (let i = 0; i < gameSettings.bombs; i++) {
        let randomNum = Math.floor(Math.random() * gameSettings.gameSize);
        let bomb = iterator[randomNum][randomNum];
        console.log(bomb);
        bomb.classList.add('bomb');
    }
}

selectedDropDown.addEventListener('change', function() {
    let difficulty = this.value;
    let difficultyToNumber = parseInt(difficulty);
    let numberDifficulty = difficultyToNumber;
    
    if (numberDifficulty === 1){
        gameSettings.gameSize = 6;
        gameSettings.bombs = 4;
        main.style.width = '335px';
        main.style.height = '335px';
    } else if (numberDifficulty === 2){
        gameSettings.gameSize = 7;
        gameSettings.bombs = 5;
        main.style.width = '390px';
        main.style.height = '390px';
    } else {
        gameSettings.gameSize = 8;
        gameSettings.bombs = 6;
        main.style.width = '445px';
        main.style.height = '445px';
    }
    makeSquares();
    generateBombs();
}, false);

makeSquares();
generateBombs();








function setIds() {
    for (let i = 0; i < sqauresArray.length; i++) {
        if (i < 5) {
            sqauresArray[i].id = `row1col${i + 1}`;
            row1.push(sqauresArray[i]);
        } if (i >= 5 && i < 10) {
            sqauresArray[i].id = `row2col${i - 4}`;
            row2.push(sqauresArray[i]);
        } if (i >= 10 && i < 15) {
            sqauresArray[i].id = `row3col${i - 9}`;
            row3.push(sqauresArray[i]);
        } if (i >= 15 && i < 20) {
            sqauresArray[i].id = `row4col${i - 14}`;
            row4.push(sqauresArray[i]);
        } if (i >= 20 && i < 25) {
            sqauresArray[i].id = `row5col${i - 19}`;
            row5.push(sqauresArray[i]);
        }
    }
}





