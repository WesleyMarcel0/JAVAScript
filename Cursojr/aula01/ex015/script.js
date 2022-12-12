
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('anotxt')
    var res = document.querySelector('div#res')

    if (fano.ariaValueMax.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] VERIFIQUE O ANO NOVAMENTE')
    } else {
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var genero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')


      if (fsex[0].checked) {
        genero = 'Homen'
        if (idade >=0 && idade < 10){
            //criança
            img.setAttribute('src', 'foto-bebe-m.png')
        } else if ( idade < 21){
            //jovem
        }else if (idade < 50){
            //adulto
        } else {
            //velho
        }
      } else if (fsex[1].checked){
        genro = 'Mulher'
        if (idade >=0 && idade < 10){
            //criança
        } else if ( idade < 21){
            //jovem
        }else if (idade < 50){
            //adulto
        } else {
            //velho
        }
      }

      res.style.textAlign = 'center'
      res.innerHTML = (genero + ' de '+'Idade calculada:' + idade)
      res.appendChild(img)
    }
}

