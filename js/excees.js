	try{
	/*TRY: Tenta executar o código a seguir!*/
		var x = a;
		var b = x +10;
		alert(b);
	}catch(e) {
	/*recebe um parametro chamado 'e' que é o erro ocorrido.
	  .name mostra o nome do erro e .message mostra a mensagem de erro
	  pode ser usado o método toString() que vai retornao o mesmo resultado
	*/
		alert(e.name + " - " + e.message);
	}
	