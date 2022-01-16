//Atividade 1: Maps

function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if (value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}
const usuarios = new Map();

usuarios.set('Airla', 'Admin');
usuarios.set('Eduarda', 'Admin');
usuarios.set('Heitor', 'User');
usuarios.set('Julio', 'Admin');

console.log(getAdmins(usuarios))

//Atividade 2: Set

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5]

function valorUnicos(arr){
    const maySet = new Set(arr);

    return [...maySet]
}
console.log(valorUnicos(meuArray))