
let grid = document.getElementById("grid");
let playBtn = document.getElementById("playBtn");
let difficultySelector = document.getElementById("difficultySelector");

function createCellsEasy () {
    let numCelle = 99;
    for (let i = 0; i <= numCelle; i++) {
    const cella = document.createElement ("div")
    cella.classList.add ("squareSmall");
    cella.textContent = i + 1;
    grid.appendChild (cella);
    
    cella.addEventListener ("click", function () {
    cella.classList.toggle("highlight");
    console.log(cella.textContent = i + 1)
        });
    }
}

function createCellsMedium () {
    let numCelle = 79;
    for (let i = 0; i <= numCelle; i++) {
    const cella = document.createElement ("div")
    cella.classList.add ("squareMedium");
    cella.textContent = i + 1;
    grid.appendChild (cella);
    
    cella.addEventListener ("click", function () {
    cella.classList.toggle("highlight");
    console.log(cella.textContent = i + 1)
        });
    }
}

function createCellsHard () {
    let numCelle = 49;
    for (let i = 0; i <= numCelle; i++) {
    const cella = document.createElement ("div")
    cella.classList.add ("square");
    cella.textContent = i + 1;
    grid.appendChild (cella);
    
    cella.addEventListener ("click", function () {
    cella.classList.toggle("highlight");
    console.log(cella.textContent = i + 1)
        });
    }
}

// function difficulty (){
//     if 
// }

playBtn.addEventListener("click", createCellsHard);
