let randomNum = Math.floor(Math.random() * 500)
let userGuess = []
let maxAtempts = 0
let userNum = ''
let attemptLeft = 0
let attempt;
let userNumUpdate = document.getElementById('textOutput')

let winAudioSound = new Audio('assets/sound/win.wav')
let loseAudioSound = new Audio('assets/sound/lose.wav')
let btnClickAudio = new Audio('assets/sound/btnClickSOund.wav')
let notifySound = new Audio('assets/sound/notify.wav')
let keyPressSound = new Audio('assets/sound/keyPress.wav')

const int = () => {
  document.getElementById('startGame').style.display = 'none'
  document.getElementById('newGamme').style.display = 'none'
}

const startGame = () => {
  document.getElementById('startGame').style.display = 'block'
  document.getElementById('welcome--screen').style.display = 'none'
}

//game logic
function compareNum () {
  userNum = Number(document.getElementById('inputBox').value)
  var a = ordinalNumber();
  var b = hiLow();
  userGuess = [...userGuess, `<div class="guess-box"><b>${a}</b><sup>${userNum}</sup><d>${b}</d></div>`];
  document.getElementById('Guesses').innerHTML = userGuess

  if (userNum < randomNum) {
    notifySound.play()
    document.getElementById('inputBox').value = ''
    remaningAtempts()
    console.log('your guess is low' + randomNum)
    document.getElementById('textOutput').innerHTML = 'Your Guess Is Low 🤔🤨'
  } else if (userNum > randomNum) {
    notifySound.play()
    document.getElementById('inputBox').value = ''
    remaningAtempts()
    console.log('your guess is high' + randomNum)
    document.getElementById('textOutput').innerHTML = 'Your Guess Is High 🤔🤨'
  } else {
    winAudioSound.play()
    document.getElementById('inputBox').value = ''
    console.log('you won')
    document.getElementById('startGame').style.display = 'none'
    document.getElementById('newGamme').style.display = 'block'
    document.getElementById('new').innerHTML = 'You Won The Game 🤠🤓'

    document.getElementById('Guesses-report').innerHTML = userGuess
   //document.getElementById('attemps').innerHTML = userGuess.length
  }
}

const openEasyMode = () => {
  btnClickAudio.play()
  maxAtempts = 11
  startGame()
}

const openHardMode = () => {
  btnClickAudio.play()
  maxAtempts = 6
  startGame()
}

function handleKeyPress(value) {
  keyPressSound.play();

  if (value === "Del") {
    let val = document.getElementById('inputBox').value;
    val = val.substr(0, val.length - 1);
    document.getElementById('inputBox').value = val;
  } else if (value === "Ok") {
    if (document.getElementById('inputBox').value === "") {
      document.getElementById('textOutput').innerHTML =
        'Please Enter a Number';
    } else {
      compareNum();
    }
  } else {
    document.getElementById('inputBox').value += value;
  }
}

function remaningAtempts () {
  attemptLeft += 1
  abc = maxAtempts - attemptLeft
  document.getElementById('attemps').innerHTML = abc

  if (attemptLeft == maxAtempts) {
    document.getElementById('startGame').style.display = 'none'
    document.getElementById('newGamme').style.display = 'block'
    loseAudioSound.play()
    document.getElementById('new').innerHTML =
      'You Lose The Game 🤨 <br> Correct Number Was ' + randomNum
  } else if (userNum == randomNum) {
    document.getElementById('startGame').style.display = 'none'
    document.getElementById('newGamme').style.display = 'block'
    document.getElementById('new').innerHTML = 'You Won The Game 🤠🤓'
  }
}

function ordinalNumber(){
    if(attemptLeft===0){ return "1st"}
    else if(attemptLeft===1){return "2nd"}
    else if(attemptLeft===2){return "3rd"}
    else if(attemptLeft==3){return "4th"}
    else if(attemptLeft==4){return "5th"}
    else if(attemptLeft==5){return "6th"}
    else if(attemptLeft==6){return "7th"}
    else if(attemptLeft==7){return "8th"}
    else if(attemptLeft==8){return "9th"}
    else if(attemptLeft==9){return "10th"}
    else{return attemptLeft +'th'}

}
function hiLow(){
  if(userNum > randomNum) {return "high"}
  else if(userNum < randomNum) {return "low"}
  else{return "won"}
}
