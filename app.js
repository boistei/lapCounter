let score = document.querySelector("#score");
let maxScore = document.querySelector("#maxScore");

const p1Button = document.querySelector("#player1");
const p2Button = document.querySelector("#player2");
let p1Score = 0;
let p2Score = 0;

p1Button.addEventListener("click", (e) => {
    p1Score++;
    score.textContent = `${p1Score} : ${p2Score}`;
    if (p1Score >= parseInt(maxScore.value)) {
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
})

p2Button.addEventListener("click", (e) => {
    p2Score++;
    score.textContent = `${p1Score} : ${p2Score}`;
    if (p2Score >= parseInt(maxScore.value)) {
        p2Button.disabled = true;
        p2Button.disabled = true;
    }
})