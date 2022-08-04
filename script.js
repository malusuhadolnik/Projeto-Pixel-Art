
//window.onload = function() {}

//Requisito 4
function createGridLine(numPixels){
  let grid = document.querySelector("#pixel-board"); 
  for (let index = 1; index<= numPixels; index++) { 
    let divLines = document.createElement("div");
    //divLines.className = "lines";
    //let ID = "id"+index;
    //divLines.id = ID;
      for (let contador = 1; contador <= numPixels; contador++){
        let box = document.createElement("div");
        box.className = "pixel";
        divLines.appendChild(box);
      }
    grid.appendChild(divLines);
   }

}
createGridLine(5);

//Requisito 6
function selectColor(corSelecionada){
  selecao = document.getElementById(corSelecionada);
  selecao.classList.add("selected");
}
selectColor("corPreta");

//Requisito 7
let pegaPalette = document.querySelector("#color-palette");
let pegaCores = document.querySelectorAll(".color");

function trocaClassSelected(event) {
  for (let index = 0; index < pegaCores.length; index ++){ //passando pelas divs da paleta e verificando qual tem a classe select
  if (pegaCores[index].className === "color selected"){ //se a classe for color selected, remover o select
     pegaCores[index].classList.remove("selected");
      }
  }
//agora a gente precisa add o select na div que foi clicada (o alvo):
  event.target.classList.add("selected");
}
//por fim,precisamos fazer a função da troca de classe disparar quando houver clique em alguma das caixinhas da paleta
for (let index = 0; index < pegaCores.length; index ++){
    pegaCores[index].addEventListener("click", trocaClassSelected);
}

//requisito 8
let pixelsAColorir = document.querySelector("#pixel-board"); //Pega a div do pixelboard

function colorePixel(event) {  //função para estabelecer o que acontece quando o evento é acionado
  let divSelected = document.querySelector(".selected"); //pega a div com a classe selected;
  let corSelecionada = window.getComputedStyle(divSelected).backgroundColor; //pega a cor do background

  let quadroDePixels = event.target; //o alvo do nosso evento é a variável quadro de pixels
  quadroDePixels.style.backgroundColor = corSelecionada; //mudamos a cor do nosso alvo :)
  }
 
 pixelsAColorir.addEventListener('click', colorePixel); //estabelece que, ao clicar, a função de colorir pixels é chamada
 
//Requisito 9
function addCleanButton(){
  let placeButton = document.querySelector(".buttons-container"); //define onde o botãovai entrar
  
  let botao = document.createElement("button"); //cria o botão
  botao.innerHTML = "Limpar";
  botao.setAttribute("id", "clear-board"); //adiciona a id clear-board

  placeButton.appendChild(botao); //anexa o novo elemento ao local escolhido
};

addCleanButton();

function cleanPixelBoard (){
//ao clicar no botão Limpar, a cor de fundo do pixel-board deve ser branca
 let getCleanButton = document.querySelector(".buttons-container");
 console.log(getCleanButton);
 let getPixels = document.querySelectorAll(".pixel");
 console.log(getPixels);
 let quadroLimpo = "white";

 getCleanButton.addEventListener("click", function(){
  for (let index =0; index < getPixels.length; index++){
    if (getPixels[index].style.backgroundColor !== quadroLimpo){
      getPixels[index].style.backgroundColor = quadroLimpo;
    }
  }
 });
}
cleanPixelBoard();




