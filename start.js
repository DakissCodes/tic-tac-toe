console.log('test js file!')


const startBtn = document.querySelector('#start')
const titleText = document.querySelector('#game-title')

const opponentTitleText = document.querySelector('#opponent-title')

const playerOpponentBtn = document.querySelector('#select-player-opp')
const computerOpponentBtn = document.querySelector('#select-computer-opp')


opponentTitleText.classList.toggle('remove')
playerOpponentBtn.classList.toggle('remove')
computerOpponentBtn.classList.toggle('remove')





console.log(startBtn)

startBtn.addEventListener('click', () => {
    // start btn is clicked, slide left out
    // remove from DOM
     startBtn.classList.remove('button-click-animate')
     startBtn.offsetWidth
     startBtn.classList.add('button-click-animate')
    //  startBtn.classList.add('slide-out-right')
     titleText.classList.add('slide-out-right')
    
     
    setTimeout(function() {
        // delay remove
        startBtn.classList.toggle('remove')
        titleText.classList.toggle('remove')


        
        // add new DOM, slide in right
        
        // slide in right
        opponentTitleText.classList.toggle('remove')
        playerOpponentBtn.classList.toggle('remove')
        computerOpponentBtn.classList.toggle('remove')
        
        opponentTitleText.classList.add('slide-in-right')
        playerOpponentBtn.classList.add('slide-in-right')
        computerOpponentBtn.classList.add('slide-in-right')

        
    },2000)
    


    
})

