const lista = [
    "pesce",
    "carne",
    "olio",
    "pasta"
];
const classeLista = document.querySelector("ol");

// for (let i = 0; i < lista.length; i++) {
//     console.log(lista[i])
// }
let i = 0;
while( i < lista.length) {
    classeLista.innerHTML +=`<li>${lista[i]}</li>`;
    i++;
}

