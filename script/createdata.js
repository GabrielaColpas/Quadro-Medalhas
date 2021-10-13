//CRIAÇÃO DOS DADOS DA TABELA

//SELECIONAR LOCAL PARA INSERÇÃO DOS DADOS
let quadroMedalhas = document.querySelector("section.quadro-medalhas")

//CRIAR QUADRO/LINHAS PARA PASSAR DADOS
function criarTemplateLinha(
    rank,
    flag_url,
    country,
    medalhas_gold,
    medalhas_silver,
    medalhas_bronze

){
    //CRIAÇÃO LINHA E ATRIBUIÇÃO DE CLASS
    let linha = document.createElement("div");
    linha.classList.add("linha")
   
    let colunaRank = criarColunaRank(rank)
    linha.appendChild(colunaRank)

    let colunaCoutryImage = criarImage(flag_url)
    linha.appendChild(colunaCoutryImage)

    let colunaCountry = criarColunaCountry(country) 
    linha.appendChild(colunaCountry)

    let colunaGold = criarColunaGold(medalhas_gold)
    linha.appendChild(colunaGold)

    let colunaSilver = criarColunaSilver(medalhas_silver)
    linha.appendChild(colunaSilver)

    let colunaBronze = criarColunaBronze(medalhas_bronze)
    linha.appendChild(colunaBronze)

    let colunaTotal = criarColunaTotal(somaTotal(medalhas_gold,medalhas_silver,medalhas_bronze))
    linha.appendChild(colunaTotal)

    quadroMedalhas.appendChild(linha)
}

//CRIAR COLUNA DE RANK, PASSANDO O VALOR QUE ELA VAI RECEBER COMO PARAMETRO
function criarColunaRank(rank){
    let colunaRank = document.createElement("div")
    colunaRank.classList.add("coluna", "coluna-rank")
    
    //CRIAR SPAN
    let colunaRankSpan = document.createElement("span")
    colunaRankSpan.innerText = rank
    colunaRank.appendChild(colunaRankSpan)
    
    return colunaRank
}
criarColunaRank()

function criarColunaCountry (pais){
    let colunaCountry = document.createElement("div")
    colunaCountry.classList.add("coluna", "coluna-country")
    
    let colunaCountrySpan = document.createElement("span")
    colunaCountrySpan.innerText = pais
    colunaCountry.appendChild(colunaCountrySpan)

    return colunaCountry
}
criarColunaCountry()

function criarImage(image){
    let colunaCoutryImage = document.createElement("img")
    colunaCoutryImage.setAttribute("src", image)
    colunaCoutryImage.setAttribute("alt", criarColunaCountry())
    
    return colunaCoutryImage
}
criarImage()

function criarColunaGold(numberGold){
    let colunaGold = document.createElement("div")
    colunaGold.classList.add("coluna", "coluna-gold")

    let colunaGoldSpan = document.createElement("span")
    colunaGoldSpan.innerHTML = numberGold
    colunaGold.appendChild(colunaGoldSpan)

    return colunaGold
}
criarColunaGold()

function criarColunaSilver(numberSilver){
    let colunaSilver = document.createElement("div")
    colunaSilver.classList.add("coluna", "coluna-silver")

    let colunaSilverSpan = document.createElement("span")
    colunaSilverSpan.innerHTML = numberSilver
    colunaSilver.appendChild(colunaSilverSpan)

    return colunaSilver
}
criarColunaSilver()

function criarColunaBronze(numberBronze){
    let colunaBronze = document.createElement("div")
    colunaBronze.classList.add("coluna", "coluna-bronze")

    let colunaBronzeSpan = document.createElement("span")
    colunaBronzeSpan.innerHTML = numberBronze
    colunaBronze.appendChild(colunaBronzeSpan)

    return colunaBronze
}
criarColunaBronze()

function criarColunaTotal(total){
    let colunaTotal = document.createElement("div")
    colunaTotal.classList.add("coluna", "total")

    let colunaTotalSpan = document.createElement("span")
    colunaTotalSpan.innerHTML = total
    colunaTotal.appendChild(colunaTotalSpan)

    return colunaTotal
}
criarColunaTotal()

