//map com o this
const maca = {
    value: 2
}

const laranja = {
    value: 3
}
function mapomThis(arr, thisArg) {
    return arr.map(function(item)  {
       return item * this.value; 
     }, thisArg)
}

const nums = [1, 2]

console.log('this -> maçã', mapomThis(nums, maca))
console.log('this -> Laranja', mapomThis(nums, laranja))

//map sem this

function mapSemThis(arr) {
    return arr.map(function(item) {
        return item * 2
    })
}
const nums1 = [1,2,4,6,8,9,12,34]
console.log(mapSemThis(nums1))

// filter

function filtraPares(arr) {
    return arr.filter(callback)
}

function callback(item) {
    return item % 2 === 0;
}

const meuArray = [1,2,3,4,5,6,7,8,9,10]

console.log(filtraPares(meuArray))

// reduce

function somaNumeros(arr) {
	if (!arr || !arr.length) return;
	const soma = arr.reduce((prev, curr) => prev + curr);

	return soma;
}

console.log(somaNumeros([1, 1, 1, 3]));

//reduce
function calculaSaldo(saldo, itens) {
	if (!saldo || !itens || !itens.length) return 'Envie todos os parâmetros';

	const saldoFinal = itens.reduce((acc, item) => acc - item.preco, saldo);

	return `O saldo final será de ${saldoFinal} reais`;
}

lista = [
	{
		preco: 2,
		nome: 'maçã',
	},
	{
		preco: 30,
		nome: 'roupa',
	},
	{
		preco: 25,
		nome: 'carne',
	},
];

saldo = 100;

console.log(calculaSaldo(saldo, lista));