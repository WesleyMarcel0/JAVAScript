
function carregar (){
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = ('agora são ' + hora + ' horas')

    if(hora >= 0 && hora < 12){
        //bom dia rgba(235, 221, 36, 0.911)
        imagem.src = 'imagens/manha.jpg'
        document.body.style.background = 'rgba(235, 221, 36, 0.911)'

    } else if (hora >= 12 && hora <= 18){
        //boa tarde rgb(233, 188, 64)
        imagem.src = 'imagens/tarde.jpg'
        document.body.style.background = 'rgb(233, 188, 64)'
    } else {
        //boa noite rgb(24, 7, 121)
        imagem.src = 'imagens/noite.jpg'
        document.body.style.background = 'rgb(0, 1, 39)'
    }
}

