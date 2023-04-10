const ligar = document.getElementById('ligar'); //Pegando o id
const desligar = document.getElementById('desligar'); //Pegando o id
const lampada= document.getElementById('lampada'); //Pegando o id


ligar.addEventListener('click', lampadaLigada); //Adicionando o evento click

function lampadaLigada () {
   //  if (!lampadaQuebrada ()) { {Se a lâmpada não estiver quebrada, ela vai trocar a imagem para ligada. OBS: ! Ponto de exclamação serve como uma negação.
    lampada.src = './src/imagens/ligada.png'; //Adicionando a imagem ligada
    let fundo = document.getElementById('fundo');
    fundo.style.backgroundColor = '#ffc222'; //Mudando a cor do fundo
    //}
}

desligar.addEventListener('click', lampadaDesligada); //Adicionando o evento click

function lampadaDesligada () {
    //if (!lampadaQuebrada ()) { Se a lâmpada não estiver quebrada, ela vai trocar a imagem para desligada.OBS: ! Ponto de exclamação serve como uma negação.
    lampada.src = './src/imagens/desligada.png'; //Adicionando a imagem desligada
    let fundo = document.getElementById('fundo');
    fundo.style.backgroundColor = '#696969'; //Mudando a cor do fundo
  // }
}

// lampada.addEventListener('mouseup', lampadaQuebrada); Usei esse evento também para colocar a imagem quebrada

// lampada.addEventListener('dblclick', lampadaQuebrada); // Outra forma de fazer a imagem mudar para a imagem de lampada quebrada com 2 clicks

// function lampadaQuebrada () {
//     lampada.src = './src/imagens/quebrada.png';
// }

 lampada.addEventListener('mouseup', lampadaQuebrada);

 function lampadaQuebrada () {
     
   lampada.src = './src/imagens/quebrada.png';
    audio = document.getElementById('audio');
    audio.src = './src/audio/Efeito-sonoro-de-lampada-quebrando.mp3';
   audio = document.querySelector('audio');
   audio.play();
    
}


 //O indexOF serve para fazer uma varredura numa outra string
//  function lampadaQuebrada () {
//    return lampada.src.indexOf ('quebrada') > - 1;
// }








 
