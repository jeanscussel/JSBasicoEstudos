/*
	1. Indices
		- length
		- indexOf
		- lastIndexOf
	2. Ordenação
		- reverse
		- sort
	3. Cortes e emendas
		- join
		- concat
		- slice
		- splice
	4. Filas FIFO
		- push
		- pop
		- shift
		- unshift 
*/


//var paises = new Array();
//var paises = new Array("Brasil", "Argentina", "Uruguai", "Chile", "Brasil");

var paises = new Array();

paises[0] = "Brasil";
paises[1] = "Argentina";
paises[2] = "Uruguai";
paises[3] = "Chile";
paises[4] = "Brasil";

//mostrar elemento na posição
document.write("Mostrando os elementos na posição 0 " + paises[0] + "<br />");

//alterar elemento na posição
paises[0] = "Espanha";

//Quantidade de elementos no array
document.write("Mostrando a quantidade de elementos no array = "+ paises.length + "<br />");

//percorrer o array
for(var i=0; i<paises.length; i++)
	document.write("Percorrendo o array = "+ paises[i] + "<br />");
	
//saber o indice de um elemento
document.write("Verificando  o indice do elemento Argentina = " + paises.indexOf("Argentina") + "<br />");

//mostrar a ultima ocorrencia de um elemento dentro do array
document.write("Mostrar a ultima ocorrencia de um elemento dentro do array. Elemento 'Brasil' = " + paises.lastIndexOf("Brasil") + "<br />");

//SINTAXE LITERAL - Cria um objeto do tipo array. NÃO cria um tipo primitivo.
var cidades = ["Seara", "Paial", "Chapecó", "Xavantina"];

//Uma string também é um array
var nome = "Jean Scussel";

document.write("Uma string também é um array, por exemplo a string nome na posição 2 é = " + nome[2] + "<br />");

for(var i=0; i <nome.length; i++)
	document.write(nome[i] + "<br />");
	
//reverter a ordem dos valores
document.write("Reverter a ordem dos valores de um Array(paises) = " + paises.reverse() + "<br />");

//ordenar em ordem crescente(alfabética ou numérica)
document.write("Ordenar o array nomerica ou alfabeticamente = " + paises.sort() + "<br />");

//Alterar o separador do array
document.write("Alterar o separados dos elementos do array, EX: C/ ';' = " + paises.join(";") + "<br />");

//concatenar outros valores de array ao array
document.write("Concatenando 2 valores ao array = " + paises.concat("Peru", "Bolivia") + "<br />");

//retornar um subarray do array SLICE de um indice até o outro indicados
document.write("Retornar um subarray EX: valores entre posição 2 e 4 = " + paises.slice(2,4) + "<br />");

//método splice remove elementos do array e incluir de onde eu tirei o outro
document.write("Remvendo elementos na posição indicada e adicionando outros no lugar = " + paises.splice(2,2, "Italia", "Alemanha", "Suiça", "Japão") + "<br />");

//TRABALHAR OS ARRAY COMO FILAS - FIFO
var carros = ["Uno", "Passat", "Fusca", "Celta", "Opala", "Chevete"];

document.write("Array carros = " + carros + "<br />");

//adiciona novo elemento ao fim da fila
document.write("Adicionado outro valor ao fim da fila " + carros.push("Parati") + "<br />");
document.write("Fila com novo elemento = " + carros + "<br />");

//remove da fila apartir do inicio
document.write("Removendo elementos no inicio da fila = " + carros.shift() + "<br />");
document.write("Fila sem o primeiro elemento = " + carros + "<br />");

//remove elementos apartir do final (ultimo elemento)
document.write("Removendo elemento do final da fila = " + carros.pop() + "<br />");
document.write("Fila sem o ultimo elemento = " + carros + "<br />");

//adiciona um elemento furão na fila(no inicio da fila)
document.write("Adicionando elementos ao inicio da fila = " + carros.unshift("Ferrari") + "<br />");
document.write("Fila com novo elemento no inicio = " + carros + "<br />");











