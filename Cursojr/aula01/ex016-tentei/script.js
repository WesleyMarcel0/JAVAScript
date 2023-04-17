
function contar() {

    let inicio = document.querySelector('input#txti') //a variavel let não vai existir quando terminaar a função
    let fim = document.querySelector('input#txtf') //economiza memoria
    let passo = document.querySelector('input#txtp')
    let res = document.querySelector('div#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        //se o valor de INICIO ou FIM ou PASSO for igual a 0
        //window.alert('[ERRO]FALTÃO DADOS')
        res.innerHTML = 'Impossivel contar.'
    }else {
       res.innerHTML = 'Contando... <br>'
       let i = Number(inicio.vlue)
       let f = Number(fim.value)
       let p = Number(passo.value)
        if (p = 0){
            window.alert('passo invalido! Considerando passo 1')
        }

       if(i > f){
       for(let c = 1 ; c <= f ; c += p) {
        //contagem crescente
        res.innerHTML += (c +'\u{2764}')
       }
        
     } else {
        for(let c = i; c >= f; c-=p) {
        //contagem regressiva
        res.innerHTML += (c + '\u{2764}')
        }

     }

      res.innerHTML += '\u{1F3C1}'
    }
}

