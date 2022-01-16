function validarArray(arr, num) {
    try {
        if(!arr && !num) throw new ReferenceError('Envie os paramentros !!!');

        if (typeof arr !== 'object') throw new TypeError('Array precisar ser do tipo Object')
        
        if (typeof num !== 'number') throw new TypeError('Num precisar ser do tipo Number')
        
        if (arr.length !== num) throw new RangeError('Tamanho invalido')

    return arr;
} catch (e) {
    if (e instanceof ReferenceError) {
        console.log('Esse é um erro ReferenceError')
        console.log(e.message)
    }else if (e instanceof TypeError) {
        console.log('Esse é um erro TypeError')
        console.log(e.message)
    }else if (e instanceof RangeError) {
        console.log('Esse é um erro RangeError')
        console.log(e.message)
    }else {
        console.log('Tipo de erro não esperado:' + e)
    }
}
}
console.log(validarArray([1,2,3,4,5], 5))