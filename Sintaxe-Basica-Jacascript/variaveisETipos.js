
function verificarPalidromo(string) {
    if(!string) return "String inexistente;"

    return string.split("").reverse().join("") === string
}
console.log(verificarPalidromo("ovo"))