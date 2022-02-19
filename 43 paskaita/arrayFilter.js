const automobiliai = [
    'bmw',
    'audi',
    'toyota',
    'fiat',
    'opel'

];

function rasti4RaidziuZodi(verte) {
    return verte.length === 4;

}

const atsakymas = automobiliai.filter(rasti4RaidziuZodi);


console.log(atsakymas);

//i nauja masyva surenka visas reiksmes kurios yra true