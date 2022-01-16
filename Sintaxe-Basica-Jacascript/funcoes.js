//funções => são blocos de comando e instruções para execução de determinadas tarefas

//ex function nomeDaFuncao (parameros se necessario) {
    //instução, bloco de codigo
//}

//nomeDaFuncao() => assim chamamos a função

function funcao() {
    console.log('Olá mundo')
}
funcao()

//Funções com paramentros
/* As funções podem receber em su declaração, paramentros, que servem como variaveis, onde sua atribuição pode se feita durante
a chamada da função*/

function mensagem(primeiro, segundo){
    console.log(primeiro, segundo)
}
mensagem('Tudo certo', 'Jovem')