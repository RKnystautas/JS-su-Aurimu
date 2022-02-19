/*
const automobiliai = [
    'bmw',
    'audi',
    'toyota'
];

function findGoodCar(automobilis) {
    const gerasAutomobilis = 'audi'
    const arRadau = automobilis === gerasAutomobilis;

    return arRadau;

}

const rastasAutomobilis = automobiliai.find(findGoodCar);

console.log(automobiliai);
console.log(rastasAutomobilis);
*/


////////////////


const automobiliai = [
    'bmw',
    'audi',
    'toyota'
];

function rasti4RaidziuZodi(verte) {
    return verte.length === 4;

}

const zodis = automobiliai.find(rasti4RaidziuZodi);

console.log(automobiliai);
console.log(zodis);