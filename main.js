

const playerOne = createPlayer('julius', 'X')
const playerTwo = createPlayer('mark', 'O')
const board = document.querySelector('.board');


let position;
let result;
let current = true;
let next = false;

for (let i=0; i < 9; i++) {

    const cell = document.createElement('div');

    cell.classList.add('cell')

    cell.addEventListener('click', (element) => {
        // cell is clicked!
        position = cellArray.indexOf(cell);
        
        turn = current == true ? playerOne : playerTwo
        
        if (gameBoard.gameBoardUpdate(turn.symbol,position)) {
            // move is complete! or valid
            current = !current;
            next = !next;
        }
        if (gameBoard.winCheck().getResult()) {
            // if there is a winner!
            
            gameBoard.winCheck().getWinningPlayer().addScore();
            console.log(gameBoard.winCheck().getWinningPlayer().name)
            console.log(gameBoard.winCheck().getWinningPlayer().getScore() + ' <-- score');
            gameBoard.boardReset();
            current = true;
            next = false;
        }        
        if (gameBoard.drawCheck()) {
            // if there is a draw!
            // start over!
            gameBoard.boardReset();
            current = true;
            next = false;

        }      
        boardRefresh(gameBoard.gameArray, cellArray)     
        // if move is valid, then we move to player two    
    })
    board.appendChild(cell)

}

const cellArray = Array.from(board.children);

function boardRefresh(gameArray,cellArray) {
    // refreshes board on DOM
    for (let i=0;i<9;i++) {
        gameArray[i] == 'empty' ? cellArray[i].textContent = '' : cellArray[i].textContent = gameArray[i];
    }

}

const gameBoard = {
    gameArray: Array(9).fill('empty'),
    gameBoardUpdate: function (symbol,pos) {
        if (this.gameArray[pos] == 'empty') {
            // console.log(this.gameArray[pos] + '<-- gameboard update function ')
            this.gameArray[pos] = symbol
            return true
        } else {
            return false
        }
        },
    
    winCheck: function() {
        let arraySet;
        let stagingArr;
        let index;
        let result = false;
        // default is no one won (false)
        let getResult = () => result;
        let getWinningPlayer = () => playerOne.symbol == arraySet[0] ? playerOne : playerTwo;

        let start = 0;
        let end = 3;
        for (i = 0; i < 3; i++) {
            arraySet = [... new Set(this.gameArray.slice(start, end))]
            // console.log(this.gameArray.slice(start,end) + '<-- sliced')

            start = end;
            end = end + end;
            if (arraySet.length == 1 && arraySet[0] != 'empty') {
                console.log('row winner')
                result = true; 

                return {getResult, getWinningPlayer};
            }
        }

        start = 0;
        for (let i = 0; i < 3; i++) {
            stagingArr = []
            index = start;
            for (let i = 0; i < 3; i++) {
                stagingArr.push(this.gameArray[index])
                index += 3;
            }
            start++
            arraySet = [... new Set(stagingArr)];
            if (arraySet.length == 1 && arraySet[0] != 'empty') {
                console.log('column winner')
                result = true; 

                return {getResult, getWinningPlayer};
            }
        }
        // 0,4,8
        // 2,4,6
        start = 0;
        let skip = 4
        for (let i = 0; i < 2; i++) {
            stagingArr = []
            for (let i = 0; i < 3; i++) {
                index = start;
                stagingArr.push(this.gameArray[start])
                console.log(start + '<-- start index')
                start += skip;  
            }
            console.log(stagingArr)
            start = 2;
            skip -= 2;
            arraySet = [... new Set(stagingArr)];
            if (arraySet.length == 1 && arraySet[0] != 'empty') {
                console.log('diagonal winner')
                
                result = true; 

                return {getResult, getWinningPlayer};
                
            }
        }
        
        return {getResult};
    },
    
    drawCheck: function() {
        let count = 0;
        this.gameArray.forEach(element => {
            if (element == 'empty') {
                count++
            }
        })
        return count == 0;
    },

    boardReset: function() {
        this.gameArray = Array(9).fill('empty')
    }
}

function createPlayer(name, symbol) {
    
    let score = 0; 
    const addScore = () => score++;
    const getScore = () => score;
    return {name, symbol, addScore, getScore} 
}
