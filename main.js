


// player object:
// player name
// player score
// player symbol

// diagonal
// 0,4,8
// 2,4,6

// HTML SkELETON SETUP
const board = document.querySelector('.board');

for (let i=0; i < 9; i++) {
    console.log('added a cell!')
    const cell = document.createElement('div');
    cell.classList.add('cell')
    cell.addEventListener('click', () => {
        console.log('clicked a cell!')
    })
    board.appendChild(cell)
}





const gameBoard = {
    gameArray: Array(9).fill('empty'),

    gameBoardUpdate: function (symbol,pos) {
        if (this.gameArray[pos] == 'empty') {
            this.gameArray[pos] = symbol
            return true
        } else {
            console.log('position taken!') 
            return false
        }
        },
    
    winCheck: function() {
        console.log('win check function start....')

        // loops through given array!
        // three directions
        let start;
        let end;
        let arraySet;
        let stagingArr;
        // ROWS 
        // 
        start = 0;
        end = 3;
        for (i = 0; i < 3; i++) {
            // array
            arraySet = [... new Set(this.gameArray.slice(start, end))]
            // loops through next row
            start = end;
            end = end + end;
            // if no unique elements (all elements in row is the same)
            // return true
            if (arraySet.length == 1) {
                console.log('row winner')
                return true;
            }
            
        }

        // COLUMNS 
        // 
        start = 0;
        let index;
        // change starting point of loop
        // 0,1,2 = i
        // for every iteration, we will add + 3 positions
        for (let i = 0; i < 3; i++) {
            // for 3 loops
            stagingArr = []
            index = start;
            for (let i = 0; i < 3; i++) {
                // set starting column as starting index to loop
                // push to staging array
                stagingArr.push(this.gameArray[index])
                // add +3 pos to check second row
                // console.log(index)
                index += 3;
            }
            // move on to next column
            start++
            // check if no unique
            // console.log('staging array: ')
            // console.log(stagingArr)
            arraySet = [... new Set(stagingArr)];
            // console.log('array set: ')
            // console.log(arraySet)
            // console.log(arraySet.length + "<== array's length!")

            if (arraySet.length == 1) {
                console.log('column winner')
                return true;
            }
        }

        // DIAGONAL
        // -1,4,8
        // 1,4,6
        start = 1;
        let skip = 2
        for (let i = 0; i < 2; i++) {

            stagingArr = []
            for (i = 0; i < 3; i++) {
                index = start;
                stagingArr.push(this.gameArray[start])
                start += skip;

            }
            start -= 2;
            skip += 2;
            arraySet = [... new Set(stagingArr)];
            if (arraySet.length == 1) {
                console.log('diagonal winner')
                return true;
            }
        }
        

        return false;
    },
    drawCheck: function() {
        let count = 0;
        this.gameArray.forEach(element => {
            if (element == 'empty') {
                count++
            }
        })
        return count == 0;
    }
}






function createPlayer(name) {
    
    let score = 0; 
    const addScore = () => score++;
    const getScore = () => score;
    return {name, symbol, addScore, getScore} 
}



gameBoard.gameBoardUpdate('O',0)
gameBoard.gameBoardUpdate('X',1)
gameBoard.gameBoardUpdate('O',2)

gameBoard.gameBoardUpdate('O',3)
gameBoard.gameBoardUpdate('O',4)
gameBoard.gameBoardUpdate('X',5)

gameBoard.gameBoardUpdate('X',6)
gameBoard.gameBoardUpdate('O',7)
gameBoard.gameBoardUpdate('O',8)

console.log(gameBoard.drawCheck())


const res = gameBoard.winCheck('X') 

const playerOne = createPlayer('julius', 'X')
const playerTwo = createPlayer('mark', 'O')

function winYet() { 
    // function checks whether there is a winner  
    if (playerOne.getScore() < 3 && playerTwo.getScore() < 3) {    
        return true
    } else {
        return false;
    }   
}

function getWinner() {
    let winner;
    playerOne.getScore() > playerTwo.getScore() ? winner = playerOne : winner = playerTwo;
}

while (winYet()) {
    // first move!
    





    playerOne.addScore();
    console.log(playerOne.getScore())




}
