
function contar() {

    let inicio = document.getElementById('txti') //a variavel let não vai existir quando terminaar a função
    let fim = document.getElementeById('txtf') //economiza memoria
    let passo = document.getElementById('txtp')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        //se o valor de INICIO ou FIM ou PASSO for igual a 0
        window.alert('[ERRO]FALTÃO DADOS')
    }else {
        window.alert('tudo certo')
    }
}

