//FUNÇÃO PARA SOMA DINAMICA DO TOTAL DE MEDALHAS
function somaTotal(medalhas_gold, medalhas_silver, medalhas_bronze){
    
    //ARMAZENAR VALORES, TRANSFORMANDO-OS EM NUMEROS
    let nGold = Number(medalhas_gold)
    let nSilver = Number(medalhas_silver)
    let nBronze = Number(medalhas_bronze)
    
    let soma = nGold + nSilver + nBronze
    
    return soma
}