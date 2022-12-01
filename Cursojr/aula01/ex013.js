var agora = new Date()
var diaSem = agora.getDay()

/*
0 = Domingo
1 = SEgunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = SAbado
*/

switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('segunda')
        break
    case 2:
        console.log('terça')
        break
    case 3:
        console.log('quarta')
        break
    case 4:
        console.log('quinta')
        break
    case 5:
        console.log('sexta')
        break
    case 6:
        console.log('domingo')
        break
        default:
            console.log('[ERRO] dia invalido')

}