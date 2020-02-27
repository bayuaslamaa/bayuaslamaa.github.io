const rumput = document.querySelectorAll('.rumput');
const bebek = document.querySelectorAll('.bebek');
const score = document.querySelector('.score')
const shotgun = document.querySelector('#shotgun')
const quack = document.querySelector('#quack')

let rumputPrevious;
let selesai;
let skor;

alert('Kamu akan memainkan sebuah game tembektu: tembak bebek itu, klik "Tembak!" untuk memulai')

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
    const tRandom = randomTime(500, 1000);
    rRandom.classList.add('timbul');


    setTimeout(() => {
        quack.play()
        rRandom.classList.remove('timbul');
        if (!selesai) {
            showDuck();
        }
    }, tRandom);
}

let startTheGame = function () {
    selesai = false;
    skor = 0;
    score.textContent = 0
    showDuck()
    setTimeout(() => {
        selesai = true;
        alert(`SELAMAT SCORE ANDA ${score.textContent}`)
    }, 7000)
}

let shot = function () {
    skor++
    this.parentNode.classList.remove('timbul');
    shotgun.play();
    score.textContent = skor;
}

bebek.forEach(b => {
    b.addEventListener('click', shot);
})