const rumput = document.querySelectorAll('.rumput');
const bebek = document.querySelectorAll('.bebek');
const score = document.querySelector('.score')

let rumputPrevious;
let selesai;
let skor;


function randomGrass(rumput) {
    const r = Math.floor(Math.random() * rumput.length);
    const rRandom = rumput[r]
    if (rRandom == rumputPrevious) {
        randomGrass(rumput)
    }
    rumputPrevious = rRandom
    return rRandom;

}

let randomTime = function (min, max) {
    return Math.ceil(Math.random() * (max - min) + min)
}

function showDuck() {
    const rRandom = randomGrass(rumput)
    const tRandom = randomTime(100, 600);
    rRandom.classList.add('timbul');

    setTimeout(() => {
        rRandom.classList.remove('timbul');
        showDuck();
    }, tRandom);
}

let startTheGame = function () {
    selesai = false;
    skor = 0;
    showDuck()
    setTimeout(() => {
        selesai = true;
    }, 15000)
}

let shot = function () {
    skor++
    this.parentNode.classList.remove('timbul');
    score.textContent = skor;
}

bebek.forEach(b => {
    b.addEventListener('click', shot);
})