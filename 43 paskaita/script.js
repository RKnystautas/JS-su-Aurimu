let pasirinkimas = '';
const telefonai = [
    'Iphone',
    'Samsung',
    'Xiaomi',
    'LG',
    'Nokia'
];

function renderList(telefonuMasyvas) {

}
const form = document.querySelector('form');

telefonai.forEach(creatingElement);

function creatingElement(phone) {
    const div = document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');
    ///3 uzduoties pradzia
    input.addEventListener('change', filterCatalogue);
    ///
    input.setAttribute('id', phone);
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'phoneModel');
    input.setAttribute('value', phone);
    label.setAttribute('for', phone);
    label.innerHTML = phone;
    form.appendChild(div);
    div.appendChild(input);
    div.appendChild(label);

}

telefonai.forEach(createListItem);

function createListItem(telefonas) {
    let ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = telefonas;

    ul.appendChild(li);

}

function filterCatalogue(event) {
    const ul = document.querySelector('ul');
    ul.innerHTML = '';
    pasirinkimas = event.target.value;
    const atfiltruotiTelefonai = telefonai.filter(telefonuFiltras);
    atfiltruotiTelefonai.forEach(createListItem);
}

function telefonuFiltras(verte) {
    return verte === pasirinkimas;
}

/////////////// atsarginis variantas
/*
function filterCatalogue(event) {
        const ul = document.querySelector('ul');
        ul.innerHTML = '';
        createListItem(event.target.value);
}
*/


// const atfiltruotiTelefonai = telefonai.filter(filterPhones);


// function filterPhones(telefonas) {

// }

// function pasirinktasTelefonas(verte) {
//     return verte.target.value ===
// }

// const isfiltruota = telefonai.filter(pasirinktasTelefonas)