let jogador1 = 0;
let jogador2 = 1;
let placar = 0;

//if ternario
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são validos') : console.log('Jogadores invalidos');

//usando if
if ( jogador1 > 0 && jogador2 == 0) {
    console.log('Jogador 1 marcou um ponto');
    placar = jogador1 > jogador2;
}else if ( jogador2 > 0 && jogador1 == 0){
    console.log('Jogador 2 marcou ponto');
    placar = jogador2 > jogador1;
}else {
    console.log('Ninguem marcou ponto');
}
switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('Jofador 1 ganhou')
        break;
    
    case placar = jogador2 > jogador1:
        console.log('Jofador 2 ganhou')
        break;    
    default:
        console.log('Não houve vencedor')
}