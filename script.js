
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

function selectColor(corSelecionada){
  selecao = document.getElementById(corSelecionada);
  selecao.classList.add("select");
}

selectColor("corPreta");

