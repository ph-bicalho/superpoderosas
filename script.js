/*
    OBJETIVO 1:  AO PASSAR O MOUSE POR CIMA DA CAIA DE SELEÇÃO DO PERSONAGEM DEVE-SE MUDAR O PERSONAGEM SELECIONADO
        -ADICIONAR CLASSE SELECIONADO NO NOVO PERSONAGEM            ---------- OK
        -RETIRAR O SELECIONADO DO PERSONAGEM QUE JA ESTAVA SELECI   ---------- OK
*/
const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    const idSelecionado = personagem.attributes.id.value;
    if(idSelecionado === 'fuzzy') return;
    
    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");

    personagem.classList.add("selecionado");

    const imagemJogador1 = document.getElementById('personagem-jogador-1');
    imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

    const nomeJogador1 = document.getElementById('nome-jogador-1');
    const nomeSelecionado = personagem.getAttribute('data-name');
    nomeJogador1.innerHTML = nomeSelecionado;
  });
});

/*
    OBJETIVO 2:  MUDA A IMAGEM DO PERSONAGEM-GRANDE E ALTERAR O NOME AO PASSAR O MOUSE POR OUTRO PERSONAGEM. 
       - ALTERAR IMAGEM JOGADOR 1 ----ok
       - ALTERAR NOME JOGADOR 1   ----ok

*/
