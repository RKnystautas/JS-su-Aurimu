const miestai = [
    'Vilnius',
    'Klaipeda',
    'Siauliai'
];



function example(miestas) {
    // console.log(miestas);
    // console.log(index);
    // console.log(array);
    return miestas.toUpperCase();
}

const atsakymas = miestai.map(example);

console.log(atsakymas);