/*
quando clicar na seta pra avançar temos que esconder todas as imagens e mostrar a próxima imagem

a imagem atual começa em 0 pq é a primeira imagem, assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagens pra poder saber que agora eu vou mostrar a segunda imagem

esconder todas as imagens 
    pegar todas as imagens usando o DOM e remover a classe mostrar

mostrar a proxima imagem 
    pegar todas as imagens, descobrir qual é a proxima, e colcoar a classe mostrar  nela


*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

setaAvancar.addEventListener('click', function() {
    
    const totalDeImagens = imagensPainel.length - 1;
    if(imagemAtual === totalDeImagens) {
        return;
    }

imagemAtual++;

imagensPainel.forEach(imagem => {
    imagem.classList.remove('mostrar')
    });
    
imagensPainel[imagemAtual].classList.add('mostrar');    
})

setaVoltar.addEventListener('click', function(){

    if(imagemAtual === 0) {
        return;
    }
imagemAtual--;

imagensPainel.forEach(imagem => {
    imagem.classList.remove('mostrar')
    });

imagensPainel[imagemAtual].classList.add('mostrar');
})
