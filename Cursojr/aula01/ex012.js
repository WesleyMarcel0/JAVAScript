var agora = new Date()

var hora = agora.getHours()

console.log('agora são exatamente ${hora}')

if (hora < 12){
    console.log('Bom dia')
} else if (hora <= 18){
    console.log('Boa tarde')
} else {
    cosole.log('Boa noite')
}