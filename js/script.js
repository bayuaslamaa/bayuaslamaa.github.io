const rumput = document.querySelectorAll('.rumput');
const bebek = document.querySelectorAll('.bebek');

let rumputPrevios;

function randomGrass(rumput) {
    const rRandom = Math.floor(Math.random() * rumput.length);
    return rumput[rRandom];
}

function showDuck(rumput) {
    const rRandom = randomGrass(rumput)
    rRandom.classList.add('timbul');

}