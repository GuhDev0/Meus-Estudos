let valor_mensalidade = 200
let taxa_multa = 0.02
let total_dias = 10
let contador = 1


do{
   let dias_de_atraso = contador;
   let valor_multa = valor_mensalidade * taxa_multa * dias_de_atraso
   let novo_valor_mensalidade = valor_mensalidade + valor_multa
   console.log(`Dia(s) de atraso: ${dias_de_atraso} - mensalidade atualizado R$: ${novo_valor_mensalidade},00 `)
    contador++
}while(contador < total_dias);   