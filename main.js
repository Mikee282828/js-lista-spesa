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
    const element = document.createElement("li");
    element.append(lista[i]);
    classeLista.append(element);
    i++;
}

