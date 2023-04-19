//RECURSIVIDADE
function fatorial(n){
    if (n == 1){
        return 1
    } else {
        return n = fatorial(n-1) //a propria funcção chamando seu numero
    }
}
console.log(fatorial(5))