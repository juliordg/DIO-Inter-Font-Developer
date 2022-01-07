/* Comentario de varias linas */
//comentario de apnenas uma lina

//Variavel pode ser alterada
//Constante não se altera

function returnEvenValues(array) {
    let evenNuns = [];
    let evenNunsImp = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNuns.push(array[i]);
        }else if(array[i] % 2 === 1) {
            evenNunsImp.push(array[i])
        }
    }
    console.log("Os numeros pares são: ", evenNuns)
    console.log("Os numeros impares são: ", evenNunsImp)
}
let array = [1, 2, 3, 6, 7, 8];
returnEvenValues(array);