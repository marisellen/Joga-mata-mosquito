

var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTemp = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'Facil') {
	criaMosquitoTemp = 1500
}else if(nivel === 'Normal') {
	criaMosquitoTemp = 1000
}else if(nivel === 'Dificil') {
	criaMosquitoTemp = 750
}

function ajustaTamanho() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanho()

var cronometro = setInterval(function() {

	tempo -= 1
	if(tempo < 0){
		clearInterval(cronometro)
		clearInterval(criamosquito)
		window.location.href = 'vitoria.html',true;
	}else{
	document.getElementById('cronometro').innerHTML = tempo
	}
},1000) 

function posicaoRandomica() {

	if (document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()
	
		if(vidas > 3) {

			window.location.href = 'fim_de_jogo.html',true;
		
		}else{
		document.getElementById('v' + vidas ).src = "imagens/coracao_vazio.png"
		
		vidas++
		}
	}

    // criar posição alaatoria
	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

    // tirar posição negativa
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//criar o elemento html
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = tamanhoAleatorio() + ` ` + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = `mosquito`
	mosquito.onclick = function () {
		this.remove()
	}

	document.body.appendChild(mosquito)

}

function tamanhoAleatorio() {
	let classe = Math.floor(Math.random() * 3)

	switch(classe){
		case 0:
		return `mosquito1`
		case 1:
		return `mosquito2`
		case 2:
		return `mosquito3`
	}
}

function ladoAleatorio() {
	let classe = Math.floor(Math.random() * 2)

	switch(classe){
		case 0:
		return `ladoA`
		case 1:
		return `ladoB`
	}
}





