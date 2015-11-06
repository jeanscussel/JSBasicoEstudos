function dividir100(num){
	var valor = Number(num);
	
	try{
		if(isNaN(num))
			throw "Valor inválido!";
		return num/100;
	}catch(e) {
		alert(e);
		return 0;
	}finally {
		alert("Finally!!!!!");
	}
	
}
function dispara(){
	var valor = prompt("Digite um valor: "+"");
	alert(dividir100(valor));
}


