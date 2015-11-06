/*Esta função remove os espaços em branco*/
function removerEspacos(texto){
	while(texto.indexOf(" ") != -1){/*Percorre o texto até achar um espaço*/
		var parte1 = texto.substring(0, texto.indexOf(" ")); /*armazena a primeira parte do texto antes do espaço*/
		var parte2 = texto.substring(texto.indexOf(" ")+1, texto.length);/*Armazena a segunda parte do texto depois do espaço*/
		texto = parte1 + parte2;
	}
	return texto;
}
var valor = prompt("Digite um texto: ", "");
alert(removerEspacos(valor));

