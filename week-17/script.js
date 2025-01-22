// Sounds
let dieSound = new Audio('assets/die.wav');
let hintSound = new Audio('assets/notify.wav');
let winSound = new Audio('assets/gameWin.mp3');
let keyPressSound = new Audio('assets/keyPress.wav');

//controllers btns
hint = document.getElementById('hint');
playAgain = document.getElementById('restart');

//body parts
let hang = document.getElementById('hang');
let head = document.getElementById('head');
let neck = document.getElementById('neack');
let belly = document.getElementById('belly')
let rightHand = document.getElementById('righthand');
let leftHand = document.getElementById('lefthand');
let rightLeg = document.getElementById('rightleg');
let leftLeg = document.getElementById('leftleg');
let danda = document.getElementById('danda');
let stand = document.getElementById('stand');
let hangStand = document.getElementById('hangStand');

const wrapper = document.querySelector('#chosenCategary')
let attemps = document.querySelector('#attemps');
let result = document.getElementById('chosenCategary');
let Clue = document.getElementById('Clue');

words = ['milk','good','bad','number','learning','gaming','element','html','javascript', "ali", "ahmed", "sara", "zara", "hassan", 
    "ayesha", "usman", "fatima", "hamza", "amna"]

let winCount = 0;
let counter = 0;
let retry = 12;
let userPressedWord = '';
let randomNum = '';
console.log(randomNum)

parts = [
    stand,
    danda,
    hangStand,
    hang,
    head,
    neck,
    belly,
    leftHand,
    rightHand,
    leftLeg,
    rightLeg
]

generateGame();

function generateElements(randomNum){
    let chars = randomNum.split('');
    for(i=0; i<chars.length; i++){
        var div = document.createElement('div');
        var char = chars[i];
        div.innerHTML = char;
        div.classList.add("box")
        div.classList.add(char.toLowerCase())
        wrapper.appendChild(div);
    }
}

function generateGame(){
  var index = Math.ceil(Math.random() * (words.length - 1))
  randomNum = words[index];
  console.log('Random WOrd is:', randomNum)
  generateElements(randomNum)
}

function showHidenChars(randomNum, userPressedWord){
        var check = randomNum.includes(userPressedWord);

        if(check){
            var char = document.getElementsByClassName(userPressedWord);

            for ( j = 0; j < char.length; j++) {
                char[j].classList.add('chita');
              }
        }
}

function typeWord(w){
    keyPressSound.play();
    userPressedWord = w;

    disableBtn(userPressedWord);
    winGame(randomNum);

    console.log('user pressed', userPressedWord, userPressedWord.length);
    isStringIncludes(userPressedWord);

}

function shuffle(s) {
    var arr = s.split('');
    arr.sort(function() {
      return 0.5 - Math.random();
    });
    s = arr.join('');
    return s;
  }

  function showHint(randomNum){
    hintSound.play();
    var s = randomNum;
    s = shuffle(s);
    Clue.innerHTML = s;
  }

function isStringIncludes(userPressedWord) {
    var check = randomNum.includes(userPressedWord);
    console.log('Random WOrd is:', randomNum)
    console.log('user pressed:', userPressedWord, ' = ' ,check)

    if(check){
        showHidenChars(randomNum, userPressedWord);
    }
    else{
        retry--;
        attemps.innerHTML = "Remaning Attemps:"+ retry;
        showManPart();
    }
}


function showManPart() {
    remaningTries(); 
    if (retry > 0) {
        var part = parts[counter];
        counter++;
        part.classList.add("black","show");
    }
}


function remaningTries() {
    if (retry <= 0) {
        dieSound.play();
        Clue.innerHTML = 'Game khatam! Aap haar gaye hain!';
    } else {
        attemps.innerHTML = `Aap ke paas ${retry} tries baqi hain.`;
    }
}


function winGame(randomNum){
    let chars = randomNum.split('');
    console.log("chars lenth = ", chars.length)
    if(chars.length == winCount ){
        winSound.play();
        Clue.innerHTML = 'You Win The Game!';
        attemps.innerHTML = '';
    }

}

function disableBtn(userPressedWord){
    if(userPressedWord){
        document.getElementById(userPressedWord.toLowerCase()).disabled = true;
        var char = document.getElementsByClassName(userPressedWord).length;
        console.log('char = ', char)
        winCount += char;
        console.log("win count = ", winCount);
    }
}

const modal = document.querySelector('.modal');
const openModal = document.querySelector('.open-button');
const closeButton = document.querySelector('.close-button');

openModal.addEventListener('click', () =>{
    modal.show();
});
closeButton.addEventListener('click', () =>{
    modal.close();
});
