
let num = document.querySelector('input#numeros')
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

function ilista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true

    } else {
        return false
    }
}

function adicionar() {

    if(isNumero(num.value) && !ilista(num.value, valores)){ // função isNumero é um numero e se ! = não esta, na a lista 
       window.alert('tudo ok')
    } else{
        window.alert('valor ja encontrado na lista ou não existente')
    }
}

function final(){


    window.alert('funcionando')
}

