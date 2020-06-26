let container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);

let board = document.createElement("div");
board.id = "board";
container.appendChild(board);

let mineArray = [];

let size = 10;

function gridGenerator() {

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            let grid = document.createElement("div");
            grid.className = "grid";
            board.appendChild(grid);
            grid.dataset.row = row;
            grid.dataset.col = col;
            grid.addEventListener("click", clicked);
        }
    }

    let grids = document.querySelectorAll(".grid");
    
    for (let i = 0; i < grids.length; i++) {
        grids[i].id = "grid_no" + (i + 1);
    }
    
}

gridGenerator();


function clicked(e) {
    //console.log(e.target.id);
    this.style.backgroundColor = "lightgrey";

    //console.log("row" + e.target.dataset.row + " col" + e.target.dataset.col);
}


function setMine() {
    while (mineArray.length < 10) {
        
        let mineGrid = Math.floor(Math.random() * 100) + 1;
        console.log(mineGrid);

        //if mineGrid already exists
        if (mineArray.includes(mineGrid)) {
            //continue running the loop again
            continue;

        } else {

            let mineSpace = document.querySelector('#grid_no' + mineGrid);

            let mine = document.createElement('div');

            mine.className = "mine";

            mineSpace.appendChild(mine);

            mineArray.push(mineGrid);

            mine.addEventListener("click", revealGrid);

        }

    }
    
    console.log(mineArray);
}

setMine();


function revealGrid() {
    // alert("You lose!")
    this.style.backgroundColor = "red";
}