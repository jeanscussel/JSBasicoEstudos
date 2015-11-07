//data e hora corrente
var data = new Date();
document.write(data + "<br />");

//data por milissegundo, informando os milissegundos apartir de 01/jan/1970
var data = new Date(123456);//valor em milissegundos
document.write(data + "<br />");

//informando uma strind
var data = new Date("Jul/20/2011 02:30:35");
document.write(data + "<br />");

//informando dado por dado. OBS: mes começa em 0
var data = new Date(2014, 2, 22, 4, 35, 30);
document.write(data + "<br />");

//mostrar as horas GMT/UTC oficial
var data = new Date();
document.write("Brasil: " + data.getHours() + "<br />");
document.write("UTC/GMT: " + data.getUTCHours() + "<br />");

//retorna o dia do mês de 1 a 31
var data = new Date();
document.write("Dia do Mês: " + data.getDate() + "<br />");

//retorna o dia da semana 0 para domingo
var data = new Date();
document.write("Dia da semana: " + data.getDay() + "<br />");

//retorna os dias da semana com um array de nomes
var dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
var data = new Date("Dec/18/2015 11:30:30");
document.write("Indice do dia: " + data.getDay() + " - ");
document.write("Dia da semana: " + dias[data.getDay()] + "<br />");

//retorna o ano com 4 digitos
var data = new Date("Jul/18/2015 10:30:30");
document.write("Ano: " + data.getFullYear() + "<br />");

//retorna a quantidade de milissegundos
var data = new Date("Jul/18/2015 10:30:30");
document.write("MIlissegundos da data: " + data.getMilliseconds() + "<br />");

//retorna os minutos da data
var data = new Date("Jul/18/2015 10:30:30");
document.write("Minutos da data: " + data.getMinutes() + "<br />");

//retorna o mês da data
var data = new Date("Jul/18/2015 10:30:30");
document.write("Mês: " + data.getMonth() + "<br />");

//retorna o mês atual
var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
var data = new Date("Dec/18/2015 11:30:30");
document.write("Indice do mês: " + data.getMonth() + " - ");
document.write("Mês do ano: " + meses[data.getMonth()] + "<br />");

//retorna a quantidade tottal de milissegundos do objeto date apartir de 01/01/1970
var data = new Date("Jul/18/2015 10:30:30");
document.write("Total de milissegundos: " + data.getTime() + "<br />");

//retorna a diferença de minutos entre hora local e GMT
var data = new Date("Jul/18/2015 10:30:30");
document.write("Diferença Hora Brasilia GMT -3 x GMT em Minutos: " + data.getTimezoneOffset() + "<br />");

//Chama direto da classe, retorna quantidade de milissegundos de uma data
var data = new Date("Jul/18/2015 10:30:30");
document.write("Quantidade de milissegundos: " + Date.parse(data) + "<br />");

//METODOS PARA ATRIBUIR VALORES = SET
var data = new Date("Jul/18/2015 10:30:30");
document.write("Valor da alteração de ano: " + data.setFullYear(2016) + "<br />");
document.write("Ano alterado: " + data + "<br />");

//SET PARA DIA DO MÊS
var data = new Date("Jul/18/2015 10:30:30");
document.write("Dia do mês alterado: " + data.setDate(26) + "<br />");

//SET PARA O MÊS
var data = new Date("Jul/18/2015 10:30:30");
document.write("Mês alterado: " + data.setMonth() + "<br />");

//Mudar a data para string
var data = new Date("Jul/18/2015 10:30:30");
document.write("Data string: " + data.toDateString() + "<br />");

//Mudar a data para string com conversão do país local
var data = new Date();

data.setFullYear(2015);
data.setMonth(07);
data.setDate(18);
document.write("Data string formato BRASILEIRO: " + data.toLocaleDateString() + "<br />");









