console.log('test js file!')


const startBtn = document.querySelector('#start')
const titleText = document.querySelector('#game-title')

const opponentTitleText = document.querySelector('#opponent-title')

const playerOpponentBtn = document.querySelector('#select-player-opp')
const computerOpponentBtn = document.querySelector('#select-computer-opp')

console.log(playerOpponentBtn)

// initiates remove class
opponentTitleText.classList.toggle('remove')
playerOpponentBtn.classList.toggle('remove')
computerOpponentBtn.classList.toggle('remove')

// iniatates slide out right class

// startBtn.classList.toggle('slide-out-right')
// titleText.classList.toggle('slide-out-right')


// initiates slide in right class
// opponentTitleText.classList.toggle('slide-in-right')
// playerOpponentBtn.classList.toggle('slide-in-right')
// computerOpponentBtn.classList.toggle('slide-in-right')

let freezeClick = false; // just modify that variable to disable all clics events

document.addEventListener("click", e => {
    if (freezeClick) {
        e.stopPropagation();
        e.preventDefault();
    }
}, true);





console.log(startBtn)

startBtn.addEventListener('click', () => {
    freezeClick = true;
    // start btn is clicked, slide right out
    // 

     startBtn.classList.remove('button-click-slide-right')
     startBtn.offsetWidth
     startBtn.classList.add('button-click-slide-right')

    //  slide out right
    
    //  startBtn.classList.toggle('slide-out-right')
     titleText.classList.toggle('slide-out-right')
     
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
    
    setTimeout(function(){
        freezeClick = false;
    },2000)
})

const oppBtnList = [playerOpponentBtn, computerOpponentBtn];
playerOpponentBtn.classList.add('button-click-animate');
// console.log(oppBtnList)

oppBtnList.forEach(element => {
    // console.log(element)    
 element.addEventListener('click', () => {
     
    freezeClick = true;
     
     
    opponentTitleText.classList.remove('slide-in-right')

    oppBtnList.forEach(element => {
        // remove previous animation
        element.classList.remove('slide-in-right')
    })
     
    element.classList.add('button-click') 
    // opponentTitleText.classList.add('slide-out-right');

    setTimeout(function() {
        // delayed slide out
        oppBtnList.forEach(element => {
            // remove previous animation (button-click)
            element.classList.remove('button-click');
            element.classList.add('slide-out-right');
        })

        opponentTitleText.classList.add('slide-out-right');
        
        

        
    },500)
     

     setTimeout(function() {
         freezeClick = false;
     },3000)
     
     setTimeout(function() {
        pickMarkBtnCont.classList.toggle('remove');
        pickMarkBtnCont.classList.add('slide-in-right');
         
         


     }, 3000)

     
     
    
 })
});


// mark selector

const markBtn = document.querySelector('.mark-container button');
const crossBtn = document.querySelector('#cross');
const circleBtn = document.querySelector('#circle');

const pickMarkBtn = document.querySelector('.pick-marker');

// pick marker container (used to toggle 'remove' class)
const pickMarkBtnCont = document.querySelector('.pick-marker-container');

// initially removes 'pick your marker buttons'
pickMarkBtnCont.classList.toggle('remove');
// 

let markSelected = 'cross'

console.log(crossBtn)
crossBtn.classList.toggle('mark-active');

markBtn.addEventListener('click', ()=> {
    // markSelected = 'cross' ? markSelected = 'circle' : markSelected = 'cross';
    // 
    if (markSelected == 'cross') {
        circleBtn.classList.toggle('mark-active');
        crossBtn.classList.toggle('mark-active');
        markSelected = 'circle'
    } else {
        crossBtn.classList.toggle('mark-active');
        circleBtn.classList.toggle('mark-active');
        markSelected = 'cross'
    }
    console.log(markSelected)
})

// select marker button functionality

const selectMark = document.querySelector('#select-mark');


selectMark.addEventListener('click', ()=> {
    // when select mark button is clicked
    console.log(markSelected) 
    
    // slide out of screen animation
    // pickMarkBtnCont.classList.add('slide-out-right') ;
    // button click animation when clicking 'select' btn
    selectMark.classList.add('button-click')

    
    // freeze click to avoid clicking other items
    freezeClick = true;
    
    
    setTimeout(function() {
        pickMarkBtnCont.classList.remove('slide-in-right')
        pickMarkBtnCont.classList.add('slide-out-right');
    },500
    )
    
    setTimeout(function() {
        pickMarkBtn.classList.toggle('remove')
        
    },1000)
})


