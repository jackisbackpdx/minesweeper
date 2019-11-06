let gameSettings = {
    gameSize: 5,
    bombs: 3,
    clicked: false,
};

let main = document.querySelector('main');
let sqauresArray = document.querySelectorAll('div');

function makeSquares() {
    for (let i = 0; i < 25; i++) {
        let div = document.createElement('div');
        main.appendChild(div);
    }
}

makeSquares();

let row1 = [];
let row2 = [];
let row3 = [];
let row4 = [];
let row5 = [];
let row6 = [];
let row7 = [];
let row8 = [];
let row9 = [];

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

setIds();

let iterator = [
    row1,
    row2,
    row3,
    row4,
    row5,
    row6,
    row7,
    row8,
];

function generateBombs() {
    const randomNum = Math.floor(Math.random() * 5);
    const bomb = iterator[randomNum][randomNum];
    bomb.classList.add('bomb');
}

generateBombs();
generateBombs();
generateBombs();

let selec  tedDropDown = document.querySelector('select');

let numberDifficulty = 0;

selectedDropDown.addEventListener('change', function() {
    let difficulty = this.value;
    let difficultyToNumber = parseInt(difficulty);
    numberDifficulty = difficultyToNumber;
}, false);