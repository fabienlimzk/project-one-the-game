# [Minesweeper](https://en.wikipedia.org/wiki/Minesweeper_(video_game))
- Made by **Fabien Lim Zheng Kai**. All Rights Reserved. - © 2020

<img src="./image/beginner-level-demo.gif">

## 1. Technologies Used
- HTML
- CSS
- JavaScript

## 2. Approach Taken
- Started by creating three main functions. First function will generate a 10 by 10 gameboard. Second function that will generate 10 mines, push it into an mineArray and populate it on the grid. The last function which is assigned to a event listener that will turn the empty grid grey when clicked and to turn the mine red when clicked. 
- Then created a function that will generate a 2D Array of Objects to store which grid has mine, is opened, is flagged and number of mines around. I then created three functions. First function which will take the data from mineArray and pushed it into the 2D Array, second function will calculate the number of mines around each grid and third function will push the number of mines into the 2D Array. Then use DOM manipilation to display information on the respective grid.
- Able to flag and unflag the grid, also limit the number of grid based on the number of mines. When flagged, the total number of mines displayed on the top will decreased and when unflagged, the total number of mines will increased. 
- Able to reveal the empty grid 
- Able to end the game when one of the mine was revealed and reveal all the other mines.
- Make the game look more attractive by adding images to the grids, flags and mines.
- Having three level of difficulties: Beginner (10 by 10, 10 mines), Intermediate (16 by 16, 40 mines) and Expert (20 by 20, 69 mines).
- Reset game button that only come out when the game end and reset the game or choose other level.
- Check if the user has won, total spaces - number of spaces opened - total mines = 0 (Have a counter of how many spaces the user has opened).
- Able to play the game on most smaller devices.

## 3. Install Instructions
- [Play online here](https://fabienlimzk.github.io/sei23-project-one-minesweeper/)

## 4. Unsolved Problems/Things to improve
- Not able to reveal only the nearby grids that was clicked.
- Stopwatch that starts when the first grid was clicked, stops when the mines are revealed or all the grids are completed.