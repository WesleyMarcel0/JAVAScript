
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
       

        if(valores.indexOf(num.value) == -1){

            let addnumero = document.createElement('option') // criando nova option pra nao sobre-escrever a outra
            addnumero.text = ('valor adicionado foi '+ num.value) //add o texto
            valores.push(Number(num.value)) //add na lista de vetores
            lista.appendChild(addnumero) //add na lista da tela
            res.innerHTML = ''
            
        } else {
            alert('esse valor ja existe na lista')
        }
       
    } else{
        window.alert('valor ja encontrado na lista ou não existente')
    }
        num.value = '' //apagar o valor escrito na barra
        num.focus() // deixa ele piscando logo apos apagar
}

function final(){
    res.innerHTML = ''
    if ( valores.length == 0){
        window.alert('não possui valores digitados ainda.')
    } else {

        let tol = valores.length

         res.innerHTML += ('<p>Numeros cadastrados:'+ tol + '</p>')

        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){ //vai fazer essa confirmação pra cada casa de valores

            soma += valores[pos] //vai somar os valores

            if(valores[pos] > maior){// vai fazer a confirmação todas as vezes chamado
                maior = valores[pos] //recebe o valor atual de valor[pos]
            }

            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }

        media = soma/tol

         res.innerHTML += ('<p>o valor mais alto é:' + maior + '</p>')
         res.innerHTML += ('<p>o menor valor é:' + menor +'</p>')
         res.innerHTML += ('<p>a soma de todos da:' + soma +'</p>')
         res.innerHTML += ('<p>a media destes numeros da:' + media +'</p>')
    }
   
}

