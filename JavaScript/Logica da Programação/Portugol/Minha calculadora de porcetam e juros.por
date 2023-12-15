programa
{
	
	funcao inicio()
	{
		real valorParaCalcular
		real valorPorcetagem
		real porcetagemDividida
		real resultado_desconto
		real resultado_descontado
		real quantidadeDeJuros
		escreva("Informe o Valor: \n")
		leia(valorParaCalcular )

		escreva("Informe a Porcetagem: \n")
		leia(valorPorcetagem)
		resultado_descontado = (valorPorcetagem /100) * valorParaCalcular
		resultado_desconto =    valorParaCalcular - resultado_descontado
			
		quantidadeDeJuros = resultado_descontado + valorParaCalcular

		 escreva(""+valorParaCalcular+" Com "+valorPorcetagem+"% de Desconto é "+resultado_desconto+" \n")
		 escreva("valor descontado: "+resultado_descontado+" \n")
		 
		 escreva(""+valorParaCalcular+" Com "+valorPorcetagem+"% de Juros é "+quantidadeDeJuros+"")
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 775; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */