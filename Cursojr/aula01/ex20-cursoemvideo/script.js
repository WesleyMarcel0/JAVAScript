
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] //cria vetor vazio

//************************ */

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inlista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true

    } else {
        return false
    }
}

function adicionar() {

    if(isNumero(num.value) && !inlista(num.value, valores)){ // função isNumero é um numero e se ! = não é, se a lista 
       window.alert('tudo ok')
    } else{
        window.alert('valor ja encontrado na lista')
    }
}