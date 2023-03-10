const counter = document.querySelector("#counter");
const distance = document.querySelector("#distance");

let count = 0;
let dist = 0;
let lapsPerKM = 4.5;

const addQrtr = document.querySelector("#addQuarter");
const addHalf = document.querySelector("#addHalf");
const addFull = document.querySelector("#addFull");

const reset = document.querySelector("#reset");

addQrtr.addEventListener("click", (e) => {
    count += 0.25;
    dist += (0.25 / lapsPerKM);
    counter.textContent = `${count}`;
    distance.textContent = Math.floor(dist * 100) / 100;
});

addHalf.addEventListener("click", (e) => {
    count += 0.5;
    dist += (0.5 / lapsPerKM);
    counter.textContent = `${count}`;
    distance.textContent = Math.floor(dist * 100) / 100;
});

addFull.addEventListener("click", (e) => {
    count += 1;
    dist += (1 / lapsPerKM);
    counter.textContent = `${count}`;
    distance.textContent = Math.floor(dist * 100) / 100;
});

reset.addEventListener("click", (e) => {
    count = 0;
    dist = 0;
    counter.textContent = `${count}`;
    distance.textContent = dist;
})