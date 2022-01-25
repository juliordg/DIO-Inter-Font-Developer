/*
    Paradigamas => imperativo => Orientado a Objeto

    Na orientação a Objetos
        - Os programas são "Objetos" que possuem uma serie de propriedades.
    Pilares:
        - Herença:
            - O objeto filho herda propriedades e métodos do objetro pao
        - Polifiormismo:
            - Objetos podem herdar a mesma classe pai, mas se comportam de forma diferente quando invocamos seus metodos.
        - Encapsulamento:
            - Cada classe tem propriedade e métodos independentes do restante do codigo.
        - Abstração:
            - Processo mental que consiste em isolar um aspecto determinado de um estado de coisas relativamente
            complexa, a fim de simplificar a sua avaliação, classificação ou para permitir comunicação do mesmo

    OOJS
        - Protótipos: todos os objetos javascript herdam propriedades e metodos de um prototype.
        O objeto Object.prototype está no topo desta cadeia.

        - Classes = Objetos
            - Syntatic sugar: uma sintaxe feita para facilitar a escrita.

*/

class ContaBancaria {
	constructor(agencia, numero, tipo) {
		this.agencia = agencia;
		this.numero = numero;
		this.tipo = tipo;
		this._saldo = 0;
	}

	sacar(valor) {
		if (valor > this._saldo) {
			return console.log('Saque negado; saldo insuficiente!');
		}

		this._saldo = this._saldo - valor;
		return console.log(`Valor solicitado foi ${valor} saldo disponivel: ${this._saldo}`);
	}

	depositar(valor) {
		this._saldo = this._saldo + valor;
		return this._saldo;
	}

	set saldo(valor) {
		this._saldo = valor;
	}

	get saldo() {
		return this._saldo;
	}
}

class ContaCorrente extends ContaBancaria {
	constructor(agencia, numero, cartaoCredito) {
		super(agencia, numero);
		this.tipo = 'corrente';
		this._cartaoCredito = cartaoCredito;
	}

	set cartaoCredito(valor) {
		this._cartaoCredito = valor;
	}

	get cartaoCredito() {
		return this._cartaoCredito;
	}
}

class ContaPoupanca extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'poupança';
	}
}

class ContaUniversitaria extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'universitária';
	}

	sacar(valor) {
		if (valor > 500) {
			return 'Operação negada.';
		}

		this._saldo = this._saldo - valor;
		return this._saldo;
	}
}

const minhaConta = new ContaCorrente(1, 211, true);
minhaConta.depositar(2000)
minhaConta.sacar(300)
const contaUni = new ContaUniversitaria(2, 333);
contaUni.sacar(250)

console.log(minhaConta)
console.log(contaUni)