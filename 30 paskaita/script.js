/** 
let budget = 1000;
let productPrice = 1700;

if (budget >= productPrice) {
    alert("You have enough money to buy IT!")
} else {
    alert("not enough money in your wallet...")
}
*/

// const budget = 1000;
// const productPrice = 10;

// if (budget > productPrice) {
//     alert("Pinigu pakankamai");
// } else if (budget === productPrice) {
//     alert("reikes susiverzti dirzus");
// } else {
//     alert("pinigu nepakanka...");
// }


// const vardas = prompt('Koks tavo vardas?');

// console.log(vardas);
// console.log(100);

// const budget = prompt('koks jusu biudzetas?');
// const productPrice = 100;


// if (budget > productPrice) {
//     alert("Pinigu pakankamai");
// } else if (budget === productPrice) {
//     alert("reikes susiverzti dirzus");
// } else {
//     alert("pinigu nepakanka...");
// }

const budget = Number(prompt('koks jusu biudzetas?'));
const productPrice = 100;


if (budget > productPrice) {
    alert("Pinigu pakankamai");
} else if (budget === productPrice) {
    alert("reikes susiverzti dirzus");
} else {
    alert("pinigu nepakanka...");
}