
let gridContainer = document.getElementById("gridContainer");
let playBtn = document.getElementById("playBtn");
let newGameBtn = document.getElementById("newGameBtn");
let difficultySelector = document.getElementById("difficultySelector");
let selectedDifficulty = '';
const result = document.getElementById('result');
let bombCount = 0;
let score = document.getElementById("score")
let scoreCount = 0;
function createCells(numCelle) {
    gridContainer.innerHTML = "";
    bombCount = 0;

    for (let i = 0; i < numCelle; i++) {
        const cella = document.createElement("div");

        if (selectedDifficulty === "easy") {
            cella.classList.add("squareEasy");
            gridContainer.classList.add("bg-game");
        } else if (selectedDifficulty === "medium") {
            cella.classList.add("squareMedium");
            gridContainer.classList.add("bg-game");
        } else if (selectedDifficulty === "hard") {
            cella.classList.add("squareHard");
            gridContainer.classList.add("bg-game");
        }

        
        gridContainer.appendChild(cella);

        const cellValue = bombOrFlower();
        cella.setAttribute("data-value", cellValue);

        cella.addEventListener("click", function () {
            if (cellValue === "bomb") {
                cella.classList.toggle("highlightBomb");
                result.textContent = 'Hai schiacciato una bomba💣💥... Game Over!';
                gridContainer.classList.add("gameOver");
                result.classList.add("bg-result");
            } else if (cellValue === "flower") {
                cella.classList.add("highlightFlower");
                scoreCount += 100; 
                score.textContent = `Score: ${scoreCount}`;
                score.classList.add("score");
            }
            console.log(cellValue);
        });
    }
}

function bombOrFlower() {
    if (bombCount < 16) {
        const randomValue = Math.floor(Math.random() * 2);
        if (randomValue === 0) {
            bombCount++;
            return "bomb";
        } else {
            return "flower";
        }
    } else {
        return "flower";
    }
}

function startGame () {
    
}

playBtn.addEventListener("click", function () {
    selectedDifficulty = difficultySelector.value;
    if (selectedDifficulty === "easy") {
        createCells(100);
    } else if (selectedDifficulty === "medium") {
        createCells(64);
    } else if (selectedDifficulty === "hard") {
        createCells(25);
    }
});

newGameBtn.addEventListener("click", function() {
    if (gridContainer.classList.contains("gameOver")) {
        location.reload();
   } else {

   }
});

