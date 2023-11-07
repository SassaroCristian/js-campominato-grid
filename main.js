let numCelle = 99;
let grid = document.getElementById("grid");
let playBtn = document.getElementById("playBtn");
let difficultySelector = document.getElementById("difficultySelector");

function createCells () {
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

playBtn.addEventListener("click", createCells);
