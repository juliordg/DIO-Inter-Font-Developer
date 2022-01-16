//Funciona como uma repetição de instrução até que a condição seja falsa?

//for(expresão condicional; condição; incremento)

//Exemplo

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5']

//array.length => tamanho total do array
//indice < array.length => enquanto incice for menor que o amanho total dos incises do array
for (let indice = 0; indice < array.length; indice++) {
    console.log(indice)
}
var a = 0;
while ( a < 10 ) {
    a++;
    console.log(a)
}
do {
    a++;
    console.log(a)
}while (a < 10)
