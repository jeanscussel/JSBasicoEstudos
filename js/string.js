//Função que remove espaços em branco de um texo
function removeEspacos(){
	var texto = prompt("Digite um texto: ","");
	var resultado = "";
	
	for(var i = 0; i < texto.length; i++)
	{ 
		if(i < texto.length && texto.substr(i,1) != " ")
			resultado += texto.substr(i,1);
	}
	document.getElementById("divTerminal").innerHTML = resultado;
}

// ---------------------------------------------------------------------
//Função para transformar numero em formato moeda
function numeroMoeda(){
	var num = prompt("Digite um número: ");
	var aux = num/100;
	/*substitui o ponto por virgula. Transforma em string pois numero nao tem a 
	função replace*/
	aux = aux.toString().replace(".", ","); 
	/*Pega somente o valor antes da vírgula(inteiro), ou seja, substring extrai uma parte 
	 da string, e indexOf acha o indice "," que foi indicado*/
	var parteInteira = aux.substring(0, aux.indexOf(","));
	/*Separa a parte fracionaria(depois da virgula), percorre da virgula indexOff(",")
	 até o fim .length*/
	if(aux.indexOf(",") == -1){//verifica se até a virgula é o valor em branco, acrescenta um 0 antes da virgula
		parteInteira = 0;
	}
	var parteFracionaria = aux.substring(aux.indexOf(","), aux.length);
	//Esta é um if em uma linha, o "?" é uma expressao de SE e os ":" de SENAO
	parteFracionaria = aux.indexOf(",") == -1 ?",00" : parteFracionaria.length <= 2 ? parteFracionaria+"0" : parteFracionaria;
	
	/*Testa parte inteira para ver se é de 3 digitos no máximo*/
	if(parteInteira.length < 4){
		document.getElementById("divTerminal").innerHTML = "R$: "+parteInteira+parteFracionaria;
	}
	/*Vamos percorrer a variavel para separar as casas de milhar com ponto*/
	var resultado =""; //Nova variavel auxuliar
	for(var i = parteInteira.length; i > 3;){
		/*o for inicia no valor total da variavel.
		 * os parametros dessa substring servem para extrair dela os primeiros
		 * 3 digitos e acrescentar um ponto antes deles */
		resultado = "."+parteInteira.substring(i-3, i)+resultado;
		/*retirar uma outra substring do que ainda nao foi avaliado*/
		parteInteira = parteInteira.substring(0, i-3);
		i = i -3;
	}
	document.getElementById("divTerminal").innerHTML = "R$: "+parteInteira+resultado+parteFracionaria;
}
