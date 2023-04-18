var num = [5, 8, 2, 9, 3]
num[6] = 8 // cria na casa 6 e coloca o valor nela
num.push(7) // cria a proxima casa  e coloca o 7 nele
num.length //conta quantas casas tem o arrey
num.sort() //coloca em ordem crescente

for(let pos=0; pos < num.length; pos++){
// detalhe que < enquanto o pos foi maior que o valor do vetor ele vai cumprir com pos++

 console.log(num[pos]) //ver todos os valores do num

}

// outra forma de fazer é assim, bem mais facil

for( let pos in num ){ //esta forma é essa para vetores(arrey) e objetos
// para cada posição em num eu vou executar 
    console.log(num[pos])
}


// BUSCAR VALORES EM NUM

num.indexOf(7) //ele vai procurar o valor 7 e me manda a casa onde ele esta 
// se ele não achar ele retorna -1 pq não existe