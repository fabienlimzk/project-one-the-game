let container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);

let board = document.createElement("div");
board.id = "board";
container.appendChild(board);

const MINE = '•';

//let size = 10;

function generateGrid(size) {
    let id = 0;
    for (let row = 0; row < size; row ++) {
        const rowElement = document.createElement("div");
        rowElement.className = "row";
        for (let col = 0; col < size; col ++) {
            const grid = document.createElement("div");
            grid.className = "grid";
            grid.id = `grid_number${id}`; // template literal - string with interpolated JS
            rowElement.appendChild(grid);
            grid.dataset.row = row;
            grid.dataset.col = col;
            grid.addEventListener("click", clicked);
            id += 1;
        }
        board.appendChild(rowElement);
    }
}

generateGrid(10);


function generateGridData(size) {
    const gridData = new Array(size).fill('').map(element => new Array(size).fill('').map(el => ''));
    return gridData;
}

const data = generateGridData(10);


function createMine() {
    return {
        isMine: true,
        isOpened: false,
    };
}


function createSpace(minesAround) {
    return {
        minesAround,
        isMine: false,
        isOpened: false,
    };
}


const mineArray = [];

function setMine(numberOfMines) {
    while (mineArray.length < numberOfMines) {
        let mineGrid = Math.floor(Math.random() * 100);
        console.log("mine is in " + mineGrid);
        //if mineGrid already exists
        if (mineArray.includes(mineGrid)) {
            //continue running the loop again
            continue;
        } else {
            let mineSpace = document.querySelector('#grid_number' + mineGrid);
            let mine = document.createElement('div');
            mine.className = "mine";
            mine.textContent = MINE;
            mineSpace.appendChild(mine);
            mineArray.push(mineGrid);
            mine.addEventListener("click", revealGrid);
        }
    }
    console.log(mineArray);
}

setMine(10);


// Get the mines into the data
for (let i = 0; i < data.length; i++) {
    let id = i * 10;
    for (let j = 0; j < data[0].length; j++) {
        if (mineArray.includes(id)) {
            data[i][j] = createMine();
        }
        id += 1;
    }
}

function getTopLeft(grid, row, col) {
    return grid[row - 1][col - 1];
}

function getTopMiddle(grid, row, col) {
    return grid[row - 1][col];
}

function getTopRight(grid, row, col) {
    return grid[row - 1][col + 1];
}

function getMiddleLeft(grid, row, col) {
    return grid[row][col - 1];
}

function getMiddleRight(grid, row, col) {
    return grid[row][col + 1];
}

function getBottomLeft(grid, row, col) {
    return grid[row + 1][col - 1];
}

function getBottomMiddle(grid, row, col) {
    return grid[row + 1][col];
}

function getBottomRight(grid, row, col) {
    return grid[row + 1][col + 1];
}

function hasRowTop(grid, row) {
    return !!(grid[row - 1]);
}

function hasRowBottom(grid, row) {
    return !!(grid[row + 1]);
}

function hasColumnLeft(grid, col) {
    return !!(grid[col - 1]);
}

function hasColumnRight(grid, col) {
    return !!(grid[col + 1]);
}

function getNeighbourMines(grid, row, col) {
    let mines = 0;
    if (hasRowTop(grid, row) && hasRowBottom(grid, row)){
        if (hasColumnLeft(grid, col) && hasColumnRight(grid, col)) {
            if (getTopLeft(grid, row, col).isMine) {
                mines += 1;
            }
            if (getTopMiddle(grid, row, col).isMine) {
                mines += 1;
            }
            if (getTopRight(grid, row, col).isMine) {
                mines += 1;
            }
            if (getMiddleLeft(grid, row, col).isMine) {
                mines += 1;
            }
            if (getMiddleRight(grid, row, col).isMine) {
                mines += 1;
            }
            if (getBottomLeft(grid, row, col).isMine) {
                mines += 1;
            }
            if (getBottomMiddle(grid, row, col).isMine) {
                mines += 1;
            }
            if (getBottomRight(grid, row, col).isMine) {
                mines += 1;
            }
        } else if (hasColumnLeft(grid, col)) {
            if (getTopLeft(grid, row, col).isMine) {
                mines += 1;
            }
            if (getTopMiddle(grid, row, col).isMine) {
                mines += 1;
            }
            if (getMiddleLeft(grid, row, col).isMine) {
                mines += 1;
            }
            if (getBottomLeft(grid, row, col).isMine) {
                mines += 1;
            }
            if (getBottomMiddle(grid, row, col).isMine) {
                mines += 1;
            }
        } else {
            if (getTopMiddle(grid, row, col).isMine) {
                mines += 1;
            }
            if (getTopRight(grid, row, col).isMine) {
                mines += 1;
            }
            if (getMiddleRight(grid, row, col).isMine) {
                mines += 1;
            }
            if (getBottomMiddle(grid, row, col).isMine) {
                mines += 1;
            }
            if (getBottomRight(grid, row, col).isMine) {
                mines += 1;
            }
        }
    } else if (hasRowTop(grid, row)) {
        if (hasColumnLeft(grid, col) && hasColumnRight(grid, col)) {
            if (getTopLeft(grid, row, col).isMine) {
                mines += 1;
            }
            if (getTopMiddle(grid, row, col).isMine) {
                mines += 1;
            }
            if (getTopRight(grid, row, col).isMine) {
                mines += 1;
            }
            if (getMiddleLeft(grid, row, col).isMine) {
                mines += 1;
            }
            if (getMiddleRight(grid, row, col).isMine) {
                mines += 1;
            }
        } else if (hasColumnLeft(grid, col)) {
            if (getTopLeft(grid, row, col).isMine) {
                mines += 1;
            }
            if (getTopMiddle(grid, row, col).isMine) {
                mines += 1;
            }
            if (getMiddleLeft(grid, row, col).isMine) {
                mines += 1;
            }
        } else {
            if (getTopMiddle(grid, row, col).isMine) {
                mines += 1;
            }
            if (getTopRight(grid, row, col).isMine) {
                mines += 1;
            }
            if (getMiddleRight(grid, row, col).isMine) {
                mines += 1;
            }
        }
    } else {
        if (hasColumnLeft(grid, col) && hasColumnRight(grid, col)) {
            if (getMiddleLeft(grid, row, col).isMine) {
                mines += 1;
            }
            if (getMiddleRight(grid, row, col).isMine) {
                mines += 1;
            }
            if (getBottomLeft(grid, row, col).isMine) {
                mines += 1;
            }
            if (getBottomMiddle(grid, row, col).isMine) {
                mines += 1;
            }
            if (getBottomRight(grid, row, col).isMine) {
                mines += 1;
            }
        } else if (hasColumnLeft(grid, col)) {
            if (getMiddleLeft(grid, row, col).isMine) {
                mines += 1;
            }
            if (getBottomLeft(grid, row, col).isMine) {
                mines += 1;
            }
            if (getBottomMiddle(grid, row, col).isMine) {
                mines += 1;
            }
        } else {
            if (getMiddleRight(grid, row, col).isMine) {
                mines += 1;
            }
            if (getBottomMiddle(grid, row, col).isMine) {
                mines += 1;
            }
            if (getBottomRight(grid, row, col).isMine) {
                mines += 1;
            }
        }
    }
    return mines;
}

// Get the minesAround placed in the data
for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[0].length; j++) {
        if (data[i][j] === '') {
            data[i][j] = createSpace(getNeighbourMines(data, i, j));
        }
    }
}

console.log(data);


// function gridGenerator() {

//     for (let row = 0; row < size; row++) {
//         for (let col = 0; col < size; col++) {

//             let grid = document.createElement("div");
//             grid.className = "grid";
//             board.appendChild(grid);
//             grid.dataset.row = row;
//             grid.dataset.col = col;
//             grid.addEventListener("click", clicked);

//         }
//     }

//     let grids = document.querySelectorAll(".grid");
    
//     for (let i = 0; i < grids.length; i++) {

//         grids[i].id = "grid_no" + (i + 1);

//     }
    
// }

// gridGenerator();


function clicked(e) {
    console.log(e.target.id);
    // console.log("row" + e.target.dataset.row);
    // console.log("col" + e.target.dataset.col);
    // this.style.backgroundColor = "lightgrey";
    let row = e.target.dataset.row;
    let col = e.target.dataset.col;
    
    // console.log(data[row][col].minesAround);

    if (data[row][col].minesAround != 0) {
        this.style.backgroundColor = "lightgrey";
        e.target.innerText = data[row][col].minesAround;
        data[row][col].isOpened = true;
    } else if (data[row][col].minesAround == 0) {
        this.style.backgroundColor = "lightgrey";
    } 
    
}


function revealGrid() {
    // alert("You lose!")
    this.style.backgroundColor = "red";
}