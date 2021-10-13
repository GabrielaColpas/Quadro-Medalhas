//FUNÇÃO QUE VAI RECEBER A ARRAY DE PAISES COMO PARAMETRO
function tratarDados(paises){

    //LOOP PARA PASSAR POR TODOS OS DADOS DA ARRAY
    for (let i = 0; i<=paises.length; i++){
        let pais = paises[i]

        //INVOCAR FUNÇÃO E PASSAR OS DADOS DO ARRAY COMO PARAMETRO
        criarTemplateLinha(
            pais.rank,
            pais.flag_url,
            pais.country,
            pais.medalhas_gold,
            pais.medalhas_silver,
            pais.medalhas_bronze
        )
    }
}
tratarDados(paises)