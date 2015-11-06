window.onload = function() {
	carregarPoltronas();
};

var poltronas = [false, true, false, true, true, true, false, true, false];
function carregarPoltronas() {
	var imagens = document.getElementsByTagName("img");
	for(var i=0; i<imagens.length; i++) {
		if(poltronas[i]) {
			imagens[i].src = "images/vazia.png";	
		} else {
			imagens[i].src = "images/cheia.png";
		}
			
	}
}

function selecionarPoltronas(){
	var imagens = document.getElementsByTagName("img");
	for(var i=0; i<poltronas.length; i++){
		if(poltronas[i]){
			imagens[i].src = "images/cheia.png";
			
			var yes = confirm("Você quer essa poltrona?");
			
			if(yes) {
				break;
			} else {
				imagens[i].src = "images/vazia.png";
			}
		}
	}
}

function selecionarPoltronasCasais(){
	var imagens = document.getElementsByTagName("img");
	for(var i=0; i<poltronas.length; i++){
		if(poltronas[i] && poltronas[i+1]){
			imagens[i].src = "images/cheia.png";
			imagens[i+1].src = "images/cheia.png";
			var yes = confirm("Você quer essas poltronas?");
			
			if(yes) {
				break;
			} else {
				imagens[i].src = "images/vazia.png";
				imagens[i+1].src = "images/vazia.png";
			}
		}
	}
}













