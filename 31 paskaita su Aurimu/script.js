/*
#4
deklaruoti funkcija, kuri priima ir sudeda du skaicius;
Funkcija atsakyma grazina;

Is pakviestos funkcijos grazinta atsakyma mes alertinam;
*/

// function suma(a, b) {
//     return a + b;
// }

// const rezultatas = suma(7, 12);
// alert(rezultatas);
// // alert(suma(1, 2));



// Eur to RUB converter

const eur = prompt('Iveskite kieki EUR :');

const atsakymas = eurToRub(eur);

alert(atsakymas);

function eurToRub(eur) {
    return eur * 88.05;
}