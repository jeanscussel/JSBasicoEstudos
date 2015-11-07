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
























