let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let resultEl = document.getElementById("result");
let quoteInputEl = document.getElementById("quoteInput");
let spinnerEl = document.getElementById("spinner");
let resetBtnEl = document.getElementById("resetBtn");
let submitBtnEl = document.getElementById("submitBtn");

let counter = 0;
let intervalId = 0;
setInterval1();

function setInterval1() {
    let counterTimer = function() {
        counter = counter + 1;
        timerEl.textContent = counter;
    };
    intervalId = setInterval(counterTimer, 1000);
}

getRandomQuote();

function getRandomQuote() {
    let url = "https://apis.ccbp.in/random-quote";
    let options = {
        method: "GET"
    };
    spinnerEl.classList.remove("d-none");
    quoteDisplayEl.classList.add("d-none");

    fetch(url, options)
        .then(function(response) {

            return response.json();
        })
        .then(function(jsonData) {
            let randomQuote = jsonData.content;
            spinnerEl.classList.add("d-none");
            quoteDisplayEl.classList.remove("d-none");


            quoteDisplay.textContent = randomQuote;
        });

}
resetBtnEl.addEventListener("click", getRandomQuote);

submitBtnEl.onclick = function() {
    let quoteInput = quoteInputEl.value;
    let quoteDisplay = quoteDisplayEl.textContent;
    console.log(quoteInput, "quote", quoteDisplay);
    if (quoteInput === quoteDisplay) {
        clearInterval(intervalId);
        resultEl.textContent = "You typed in seconds";

    } else {
        resultEl.textContent = "incorrect";
    }
};
resetBtnEl.onclick = function() {
    clearInterval(intervalId);
    setInterval1();
    counter = 0;
};