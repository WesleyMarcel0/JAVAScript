function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){ // enquanto c for maior que n o valor de c perde 1
        fat *= c
    }
    return fat
}