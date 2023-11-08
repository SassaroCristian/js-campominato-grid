
let gridContainer = document.getElementById("gridContainer");
let playBtn = document.getElementById("playBtn");
let difficultySelector = document.getElementById("difficultySelector");
let selectedDifficulty = '';
const result = document.getElementById('result');
function createCells(numCelle) {
    gridContainer.innerHTML = "";

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

        cella.textContent = i + 1;
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
                cella.classList.toggle("highlightFlower");
            }
            console.log(cellValue);
        });
    }
}

function bombOrFlower() {
    const randomValue = Math.floor(Math.random() * 2);
    if (randomValue === 0) {
        return "bomb";
    } else {
        return "flower";
    }
}

function startGame () {
    
}
playBtn.addEventListener("click", function () {
    selectedDifficulty = difficultySelector.value;
    if (gridContainer.classList.contains("gameOver")) {
         location.reload();
    } else if (selectedDifficulty === "easy") {
        createCells(100);
    } else if (selectedDifficulty === "medium") {
        createCells(64);
    } else if (selectedDifficulty === "hard") {
        createCells(25);
    }
});
