/*let array = ['string', 1, true]
console.log(array)
console.log(array[1])

array.forEach(function(item, indice){console.log(item, indice)})

array.push('novo intem')
console.log(array)*/

function substituirPares (array) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === 0) {
            console.log("Você já é zero")
        }else if(array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0...`);
            array[i] = 0;
        }
    }
    return array;
}
let arr = [0, 1, 3, 4, 6, 8, 11, 30, 33, 42, 57, 89, 90, 91]
substituirPares(arr)
console.log(arr)