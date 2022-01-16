//if e else
function numeroPositivo(num) {
    const ehNegativo = num < 0;
    const maiorQueDez = num > 10;

    if(ehNegativo) {
        return `Esse numero é negativo ${num}`
    }else if(!ehNegativo && maiorQueDez) {
        return `Esse numero é ${num} é positivo e maior que 10`
    }
    return "Esse numero é positivo";
}
console.log(numeroPositivo(-1))

//for

function multiplicarPorDois(arr) {
    let multiplicados = [];

    for(let i =0; i < arr.length; i++) {
        multiplicados.push(arr[i] * 2);
    }
    return multiplicados
}
const numeros = [2, 10, 456, 758, 25]
console.log(multiplicarPorDois(numeros))

//while = > executa instrução até que a condição seja falsa
// while enquando
function exemploWhile(){
    let num = 0
    while(num <= 5) {
        console.log(num)
        num++
    }
}
exemploWhile()

//do while - executa instrução até que a condição seja falsa, mas execulta pelo menos uma vez

function exemploDoWhile(){
    let num = 6
    do {
        console.log(num)
        num++
    }
    while(num <= 5)
}
exemploDoWhile()