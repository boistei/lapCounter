const counter = document.querySelector("#counter");
const distance = document.querySelector("#distance");

let count = 0;
let dist = 0;

const addQrtr = document.querySelector("#addQuarter");
const addHalf = document.querySelector("#addHalf");
const addFull = document.querySelector("#addFull");

const remQrtr = document.querySelector("#remQuarter");
const remHalf = document.querySelector("#remHalf");
const remFull = document.querySelector("#remFull");

const reset = document.querySelector("#reset");

addQrtr.addEventListener("click", (e) => {
    count += 0.25;
    dist += (0.25 / 4.5);
    counter.textContent = `${count}`;
    distance.textContent = Math.floor(dist * 100) / 100;
});

addHalf.addEventListener("click", (e) => {
    count += 0.5;
    dist += (0.5 / 4.5);
    counter.textContent = `${count}`;
    distance.textContent = Math.floor(dist * 100) / 100;
});

addFull.addEventListener("click", (e) => {
    count += 1;
    dist += (1 / 4.5);
    counter.textContent = `${count}`;
    distance.textContent = Math.floor(dist * 100) / 100;
});

remQrtr.addEventListener("click", (e) => {
    count -= 0.25;
    dist -= (0.25 / 4.5);
    counter.textContent = `${count}`;
    distance.textContent = Math.floor(dist * 100) / 100;
});

remHalf.addEventListener("click", (e) => {
    count -= 0.5;
    dist -= (0.5 / 4.5);
    counter.textContent = `${count}`;
    distance.textContent = Math.floor(dist * 100) / 100;
});

remFull.addEventListener("click", (e) => {
    count -= 1;
    dist -= (1 / 4.5);
    counter.textContent = `${count}`;
    distance.textContent = Math.floor(dist * 100) / 100;
});

reset.addEventListener("click", (e) => {
    count = 0;
    dist = 0;
    counter.textContent = `${count}`;
    distance.textContent = dist;
})