const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")
const imagens = document.querySelectorAll('.imagem')
var indice = 0

botaoAlterarTema.addEventListener("click", () => {
	const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
	
	esconderImagemAtiva();
	
	mostrarNovaImagem();
	
	body.classList.toggle("modo-escuro");
	
	if(modoEscuroEstaAtivo) {
		imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
	} else {
		imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
	}
})

function esconderImagemAtiva() {
	const imagemAtiva = document.querySelector(".ativa");
	imagemAtiva.classList.remove("ativa");
}

function mostrarNovaImagem() {
	indice += 1
	if(indice > 5) {
		indice = 0
	}
	imagens[indice].classList.add("ativa")
}