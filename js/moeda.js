/*Função para formatar numero como moeda*/

function moeda(num){
	var aux = num/100;
	aux = aux.toString().replace(".",",");/*Troca os pontos por virgula. toString pois numeros não tem a função replace*/
	/*Descobrir a parte inteira e a parte fracionaria do numero*/
	var parteInteira = aux.substring(0, aux.indexOf(","));
	var parteFracionaria = aux.substring(aux.indexOf(","), aux.length);
	if(parteInteira.length < 4)
		return "R$: "+parteInteira+parteFracionaria;
}
var valor = prompt("Digite um valor: ","");
alert(moeda(valor));

