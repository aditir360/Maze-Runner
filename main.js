/*
@title: Maze Runner
@author: Aditi Ranjan
*/


// The aim of the game is to reach the goal shown in the maze. 
const player = "p";
const wall = "w";
const exit = "e";

setLegend(
  [player, bitmap`
................
................
.......000......
.......0.0......
......0..0......
......0...0.0...
....000L.L0.0...
....0.0...000...
....0.07770.....
......0...0.....
.....0....0.....
.....0...0......
......000.......
......0.0.......
.....00.00......
................`],
  [wall, bitmap`
................
................
......333333....
....3333333333..
...333333333333.
....3333333333..
......333333....
................
................
....333333......
....3333333333..
....33333333333.
....3333333333..
....333333......
................
................`],
  [exit, bitmap`
................
................
.......222......
.......2.2......
......2...2.....
.....2.....2....
....2.......2...
...2.........2..
....2.......2...
.....2.....2....
......2...2.....
.......2.2......
.......222......
................
................
................`]
);

setSolids([player, wall]);

let level = 0;
const levels = [
  map`
p.w..
.w.w.
.w.e.
.....`,
  map`
p.w.w.
.w.w.
.w.w.
.e...`
];

setMap(levels[level]);

setPushables({
  [player]: []
});

// Your movements can be either one to the right, left, up, or down.

onInput("w", () => {
  getFirst(player).y -= 1;
});
onInput("a", () => {
  getFirst(player).x -= 1;
});
onInput("s", () => {
  getFirst(player).y += 1;
});
onInput("d", () => {
  getFirst(player).x += 1;
});

afterInput(() => {
  let playerPosition = getFirst(player);
  let exitPosition = getFirst(exit);

  // Display you win if the user gets to the goal position.
  if (playerPosition.x === exitPosition.x && playerPosition.y === exitPosition.y) {
    addText("You Win!", { x: 8, y: 4, color: color`L` });
  }
});
