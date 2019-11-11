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

let squareAmount;

function makeSquares() {
    for (let i = 0; i < squareAmount; i++) {
        let div = document.createElement('div');
        main.appendChild(div);
    }
}

let sqauresArray = document.querySelectorAll('div');

function generateBombs() {
    for (let i = 0; i < gameSettings.bombs; i++) {
        let randomNum = Math.floor(Math.random() * gameSettings.gameSize);
        let bomb = iterator[randomNum][randomNum];
        console.log(bomb);
        bomb.classList.add('bomb');
    }
}

let difficultyGlobal;

selectedDropDown.addEventListener('change', function() {
    let difficulty = this.value;
    let difficultyToNumber = parseInt(difficulty);
    difficultyGlobal = difficultyToNumber;
    if (difficultyToNumber === 0){
        gameSettings.gameSize = 5;
        squareAmount = gameSettings.gameSize * gameSettings.gameSize;
        gameSettings.bombs = 3;
        main.style.width = '280px';
        main.style.height = '280px'; bbv
        makeSquares();
    } else if (difficultyToNumber === 1){
        gameSettings.gameSize = 6;
        squareAmount = gameSettings.gameSize * gameSettings.gameSize;
        console.log(gameSettings.gameSize);
        gameSettings.bombs = 4;
        main.style.width = '335px';
        main.style.height = '335px';
        makeSquares();
    } else if (difficultyToNumber === 2){
        gameSettings.gameSize = 7;
        squareAmount = gameSettings.gameSize * gameSettings.gameSize;
        console.log(gameSettings.gameSize);
        gameSettings.bombs = 5;
        main.style.width = '390px';
        main.style.height = '390px';
        makeSquares();
    } else {
        gameSettings.gameSize = 8;
        squareAmount = gameSettings.gameSize * gameSettings.gameSize;
        gameSettings.bombs = 6;
        main.style.width = '445px';
        main.style.height = '445px';
        makeSquares();

    }
    generateBombs();
}, false);

function setIds() {
    for (let i = 0; i < sqauresArray.length; i++) {
        if (i < (gameSettings.gameSize)) {
            sqauresArray[i].id = `row1col${i + 1}`;
            row1.push(sqauresArray[i]);
        } if (i >= (gameSettings.gameSize) && i < (gameSettings.gameSize * 2)) {
            sqauresArray[i].id = `row2col${i - ((gameSettings.gameSize) - 1)}`;
            row2.push(sqauresArray[i]);
        } if (i >= (gameSettings.gameSize * 2) && i < (gameSettings.gameSize * 3)) {
            sqauresArray[i].id = `row3col${i - ((gameSettings.gameSize * 2) - 1)}`;
            row3.push(sqauresArray[i]);
        } if (i >= (gameSettings.gameSize * 3) && i < (gameSettings.gameSize * 4)) {
            sqauresArray[i].id = `row4col${i - ((gameSettings.gameSize * 3) - 1)}`;
            row4.push(sqauresArray[i]);
        } if (i >= (gameSettings.gameSize * 4) && i < (gameSettings.gameSize * 5)) {
            sqauresArray[i].id = `row5col${i - ((gameSettings.gameSize * 4) - 1)}`;
            row5.push(sqauresArray[i]);
        } if (i >= (gameSettings.gameSize * 5) && i < (gameSettings.gameSize * 6)) {
            sqauresArray[i].id = `row6col${i - ((gameSettings.gameSize * 5) - 1)}`;
            row6.push(sqauresArray[i]);
        } if (i >= (gameSettings.gameSize * 6) && i < (gameSettings.gameSize * 7)) {
            sqauresArray[i].id = `row7col${i - ((gameSettings.gameSize * 6) - 1)}`;
            row7.push(sqauresArray[i]);
        } if (i >= (gameSettings.gameSize * 7) && i < (gameSettings.gameSize * 8)) {
            sqauresArray[i].id = `row8col${i - ((gameSettings.gameSize * 7) - 1)}`;
            row8.push(sqauresArray[i]);
        }
    }
}
setIds();
