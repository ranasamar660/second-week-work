document.addEventListener('DOMContentLoaded', () => {
    let tryContainer = document.querySelector('#try');
    let historyContainer = document.querySelector('#history'); 
    let btn = document.getElementById('guess');
    let restart = document.getElementById('restart');
    let tries;
    let gameNum;
    const maxTries = 10;

    restart.style.display = "none";

    function initialize() {
        tries = maxTries;
        gameNum = Math.floor(Math.random() * 100) + 1;
        restart.style.display = "none";
        btn.style.display = "block";
        document.getElementById("message").innerHTML = "";
        document.getElementById("userInput").value = '';
        document.getElementById("userInput").disabled = false;
        historyContainer.innerHTML = ''; 
        updateTries();
    }

    function checkGuess() {
        let userNum = parseInt(document.getElementById("userInput").value, 10);

        if (isNaN(userNum)) {
            document.getElementById("message").innerHTML = "Please enter a valid number!";
            document.getElementById("message").style.color = 'orange';
            return;
        }

        if (tries > 0) {
            let feedback = '';
            if (userNum === gameNum) {
                feedback = "🎉 Congratulations! Your guess is correct.";
                document.getElementById("message").innerHTML = "🎉 Congratulations! Your guess is correct";
                document.getElementById("message").style.color = 'green';
                btn.style.display = "none";
                document.getElementById("userInput").disabled = true;
                restart.style.display = "block";
            } else if (userNum > gameNum) {
                feedback = "Aapka number zyada hai.Try again!";
                document.getElementById("message").innerHTML = "Your number is too high. Try again!";
                document.getElementById("message").style.color = 'red';
            } else {
                feedback = "Aapka number kam hai. Try again!";
                document.getElementById("message").innerHTML = "Your number is too low. Try again!";
                document.getElementById("message").style.color = 'red';
            }
            updateHistory(userNum, feedback);
            tries--;
            updateTries();
        }

        if (tries === 0 && userNum !== gameNum) {
            let feedback = `Aap haar gaye! Sahi jawab tha ${gameNum}.`;
            document.getElementById("message").innerHTML = feedback;
            document.getElementById("message").style.color = 'black';
            updateHistory(userNum, feedback);
            btn.style.display = "none";
            document.getElementById("userInput").disabled = true;
            restart.style.display = "block";
        }

        document.getElementById("userInput").value = '';
    }

    function updateTries() {
        tryContainer.textContent = ` ${tries}`;
    }

    function updateHistory(guess, feedback) {
        const li = document.createElement('li');
        li.textContent = `Guess: ${guess} - ${feedback}`;
        historyContainer.appendChild(li);
    }

    btn.addEventListener('click', checkGuess);
    restart.addEventListener('click', initialize);
    window.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && btn.style.display !== "none") {
            checkGuess();
        }
    });

    initialize();
});
