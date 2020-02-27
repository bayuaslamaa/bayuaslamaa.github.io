const rumput = document.querySelectorAll('.rumput');
const bebek = document.querySelectorAll('.bebek');
const score = document.querySelector('.score')
const shotgun = document.querySelector('#shotgun')
const quack = document.querySelector('#quack')
const hard = document.querySelector('.mulaiHard')
const easy = document.querySelector('.mulaiEasy')

let highestScore;
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

// if (hard) {
//     let levelHard = function (min, max) {
//         let min = 400;
//         let max = 650;
//         return min, max
//     }
// }
let tRandom;

function showDuck() {
    const rRandom = randomGrass(rumput)
    rRandom.classList.add('timbul');
    // tRandom = tRandom
    if (hard) {
        tRandom = randomTime(400, 650)
    } else if (easy) {
        tRandom = randomTime(2000, 3000);
    }

    setTimeout(() => {
        quack.play()
        rRandom.classList.remove('timbul');
        if (!selesai) {
            showDuck();
        }
    }, tRandom);
}


let timeTotal = prompt("Masukan waktu bermain dalam detik:", 10)

let startTheGame = function () {
    selesai = false;
    skor = 0;
    score.textContent = 0
    showDuck()
    setTimeout(() => {
        selesai = true;
        alert(`SELAMAT SCORE ANDA ${score.textContent}`)

    }, timeTotal * 1000)
}

let shot = function () {
    shotgun.play();
    this.parentNode.classList.remove('timbul');
    skor++
    score.textContent = skor;

}

bebek.forEach(b => {
    b.addEventListener('click', shot);
})