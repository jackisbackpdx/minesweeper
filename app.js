


let main = document.querySelector('main');

function makeSquares() {
    for (let i = 0; i < 25; i++) {
        let div = document.createElement('div');
        main.appendChild(div);
    }
}
makeSquares();

let sqauresArray = document.querySelectorAll('div');

function setIds() {
    for (let i = 0; i < sqauresArray.length; i++) {
        if (i < 5) {
            sqauresArray[i].id = `row1col${i + 1}`;
        } if (i >= 5 && i < 10) {
            sqauresArray[i].id = `row2col${i - 4}`;
        } if (i >= 10 && i < 15) {
            sqauresArray[i].id = `row3col${i - 9}`;
        } if (i >= 15 && i < 20) {
            sqauresArray[i].id = `row4col${i - 14}`;
        } if (i >= 20 && i < 25) {
            sqauresArray[i].id = `row5col${i - 19}`;
        }
    }
}

setIds();