
function contar() {

    let tabuada = document.querySelector('input#tabuada')
    let t = Number(tabuada.value)
    let res = document.querySelector('select#res')
    let iniciar = 1
    let fim = 10
    
    if( t == 0){
        alert('[ERRO]')
            
    } else {
        res.innerHTML = ''
        do {
            
            let item = document.createElement('option')
            item.text = (t + ' X ' + iniciar + '=' + t*iniciar)
            //item.value = (res + inicio) essa parte é ultio quando outros progremas precisarem de value para localizar onde esta sendo chamado
            res.appendChild(item)
            iniciar++
        } while( iniciar <= 10 )
    }

}

