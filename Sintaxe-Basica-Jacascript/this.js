//This = A palavra reservada this é uma referencia de contexto
//No exemplo, this refere-se ao objeto pessoa

const olaMundo = () => 'Olá mundo!!!'
const soma = (a, b) => a + b
console.log(olaMundo())
console.log(soma(1, 2))

// rrow function não faz hoisting não chama a funçãi ates da unção proprimanete ditd
const alunos = [
    {
        nome: 'Julio',
        nota: 5,
        turma: '1b'
    },
    {
        nome: 'Airla',
        nota: 8,
        turma: '1b'
    },
    {
        nome: 'Eduarda',
        nota: 9,
        turma: '1b'
    },
    {
        nome: 'Heitor',
        nota: 6,
        turma: '1b'
    }
]
function alunosAprovados(arr, media) {
    let aprovados = [];

    for(let i = 0; i < arr.length; i++){

        const {nota, nome} = arr[i]
        if(nota >= media) {
            aprovados.push(nome)
        }
    }
    return aprovados
}
console.log(alunosAprovados(alunos, 6))

function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade`
}

const pessoa1 = {
    nome: 'Airla',
    idade: 43
}
const pessoa2 = {
    nome: 'Eduarda',
    idade: 17
}
const pessoa3 = {
    nome: 'Heitor',
    idade: 4
}

console.log(calculaIdade.call(pessoa1, 30))
console.log(calculaIdade.call(pessoa2, 30))
console.log(calculaIdade.call(pessoa3, 30))
console.log(calculaIdade.apply(pessoa2, [11]))