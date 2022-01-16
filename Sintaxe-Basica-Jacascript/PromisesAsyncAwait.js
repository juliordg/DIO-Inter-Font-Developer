/*
Assíncrono:
    Que não ocorre ou não se efetiva ao memo tempo.

    JavaScript roda por padraão rode de forma sincrona
    cliente -> servidor -> cliente

Promises ou promessa:
    Inicialmente, seu valor é desconhecido. Ela pode, então, ser resolvida ou rejeitada

    Promises tem 3 estador
    1 -> Pending 2 -> Fulfilld 3 -> Rejected

    O que são APIs:
    Aplication Programming Interface
    Uma API é uma forma de intermediar os resultados da back-end com o que é apresetado no front-end
    Conseguimos acessar por meui de URLs
    
    veremos muito o medoto JSON
    JSON: JavaScript Objest Noatation
    É muito comum que APIs retornem seus dados no formato .json, portanto precisamos tratar esses dados quando os recebemos.
    .json é np fprmato de objeto

    Metodo fetch:
    É a grande estrela quando falamos do copnsumo de APIs
    O metodo fetch retorna uma promises
    podendo ser encadeada com um .then e passada para formato .json


*/

//exemplo de Promises:

const myPromises = new Promise((res, rej) => {
    window.setTimeout(() => {
        res(console.log('Resolvoda'));
    }, 2000);
});