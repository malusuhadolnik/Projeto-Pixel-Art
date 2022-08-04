
//window.onload = function() {}

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

//Requisito 7
function selectColor(corSelecionada){
  selecao = document.getElementById(corSelecionada);
  selecao.classList.add("selected");
}
selectColor("corPreta");

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
//O pixel do quadro clicado deve ter sua cor alterada para a cor selecionada na paleta de cores (exercício anterior)
//Vamos pegar a cor do background da cor selecionada e armazenar em uma nova variável
// function colorePixel(){;
let pixelsAColorir = document.querySelector("#pixel-board"); //Pega a div do pixelboard

function colorePixel(event) {  //função para estabelecer o que acontece quando o evento é acionado
  let divSelected = document.querySelector(".selected"); //pega a div com a classe selected;
  let corSelecionada = window.getComputedStyle(divSelected).backgroundColor; //pega a cor do background

  let quadroDePixels = event.target;
  quadroDePixels.style.backgroundColor = corSelecionada;
  }
 
 pixelsAColorir.addEventListener('click', colorePixel); //estabelece que, ao clicar, a função de colorir pixels é chamada
 



