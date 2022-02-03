const kavosPuodelioKaina = 2.65;
const puodeliuKiekis = prompt("kiek puodeliu kavos noresite?")
let suma = 0;

for (let cup = 1; cup <= puodeliuKiekis; cup++) {

    const cukrausKiekis = prompt(`Kiek sauksteliu cukraus noresite i ${cup} puodeli`)

    for (let sugar = 1; sugar <= cukrausKiekis; sugar++) {
        const sakinys = `Pilu ${sugar} sauksteli cukraus i ${cup} puodeli.`;
        console.log(sakinys);
    }


    suma += kavosPuodelioKaina;

}
console.log(`Suma ${suma}`);