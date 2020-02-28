const rumput = document.querySelectorAll('.rumput');
const bebek = document.querySelectorAll('.bebek');
const score = document.querySelector('.score')
const shotgun = document.querySelector('#shotgun')
const quack = document.querySelector('#quack')
const hard = document.querySelector('.mulaiHard')
const easy = document.querySelector('.mulaiEasy')

let rumputPrevious;
let selesai;
let skor;

alert('Kamu akan memainkan sebuah game tembektu: tembak bebek itu, klik "Start!" untuk memulai')

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

let tRandom;

function showDuck() {
    const rRandom = randomGrass(rumput)
    rRandom.classList.add('timbul');

    if (hard) {
        tRandom = randomTime(400, 650)
    } else if (easy) {
        tRandom = randomTime(1500, 2100);
    }

    setTimeout(() => {
        quack.play()
        rRandom.classList.remove('timbul');
        if (!selesai) {
            showDuck();
        }
    }, tRandom);
}


let timeTotal = prompt("Masukan waktu bermain dalam detik:", 15)

let startTheGame = function () {
    selesai = false;
    skor = 0;
    score.textContent = 0
    showDuck()
    display = document.querySelector('#time');
    startTimer(timeTotal, display);
    setTimeout(() => {
        selesai = true;
        alert(`SCORE ANDA ${score.textContent}`)
        if (score.textContent > 10 && easy && timeTotal === 15) {
            if (window.confirm("Lanjut Level Hard?")) {
                window.open("hard.html", "_self")
            }
        } else {
            if (score.textContent >= 5 && timeTotal === 15) {
                window.alert("Selamat, kamu layak berburu!")
            }
        }


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

function startTimer(duration, display) {
    let timer = duration,
        seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = 0 + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}