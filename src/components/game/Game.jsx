import { useEffect, useState } from "react";
import {
  generateGameBoard,
  gameOfLife,
  randomInput,
  controlInput,
} from "../../assets/gameLogic";
import "./Game.css";

export default function Game() {
  const [size, setSize] = useState(30);
  const [speed, setSpeed] = useState(300);
  const [iterations, setIterations] = useState(false);
  const [cellSize, setCellSize] = useState(1);
  const [color, setColor] = useState('limegreen')

  const [grid, setGrid] = useState(randomInput(generateGameBoard(size)));

  function setNewGrid(newSize) {
    setSize(newSize);

    setGrid(randomInput(generateGameBoard(newSize)));
  }
  //births or kills a cell
  function handleCellClick(row, column) {
    const copy = grid;

    for (let q = 0; q < grid.length; q++) {
      for (let b = 0; b < grid[q].length; b++) {
        if (q === row && b === column) {
          if (grid[q][b] === 0) {
            grid[q][b] = 1;
          } else {
            grid[q][b] = 0;
          }
        }
      }
    }
    setGrid(copy);
  }

  useEffect(() => {
    if (iterations) {
      const interval = setTimeout(() => {
        setGrid(gameOfLife(grid));
      }, speed);

      return () => clearTimeout(interval);
    }
  }, [grid, iterations]);

  return (
    <div>
      <div
        style={{
          border: "2px solid black",
          display: "flex",
          margin: "0.5rem",
          padding: "1rem",
          justifyContent: 'space-around',
        }}
      >
        <div className="parameters">
          <div >
            <label htmlFor="grid-size">Grid-Size: </label>
            <input
              type="number"
              id="grid-size"
              value={size}
              max="100"
              min="10"
              step="10"
              onChange={(e) => setNewGrid(e.target.value)}
            ></input>

            <button className="plus-and-minus" onClick={(e) => setNewGrid(size + 10)}>+</button>
            <button className="plus-and-minus" onClick={(e) => setNewGrid(size - 10)}>-</button>
          </div>

          <div>
            <label htmlFor="speed">Speed (ms): </label>
            <input
              type="number"
              id="speed"
              max="50000"
              min="10"
              step="50"
              onChange={(e) => setSpeed(e.target.value)}
              value={speed}
            ></input>
            <button className="plus-and-minus" onClick={(e) => setSpeed(speed + 50)}>+</button>
            <button className="plus-and-minus" onClick={(e) => setSpeed(speed - 50)}>-</button>
          </div>
          <div>
            <label htmlFor="cell-size">Cell-Size: </label>
            <input
              type="number"
              id="cell-size"
              max="1"
              min="0.1"
              step="0.1"
              value={cellSize}
              onChange={(e) => setSize(e.target.value)}
            ></input>
            <button className="plus-and-minus" onClick={(e) => setCellSize(cellSize + 0.1)}>+</button>
            <button className="plus-and-minus" onClick={(e) => setCellSize(cellSize - 0.1)}>-</button>
          </div>
          {/*spot for color selector*/}
          <div>
            <label htmlFor="color-select">Color: </label>
            <select id="color-select"
            onChange={e => {
              setColor(e.target.value)
            }}>
              <option value="limegreen">Green</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="orange">Orange</option>
              <option value="yellow">Yellow</option>
              <option value="purple">Purple</option>
            </select>
          </div>
          <p><span style={{color: 'red'}}>Caution!</span> The larger your grid size the slower your browser will run! Especially on mobile! </p>

        </div>
        <p onClick={(e) => setIterations(!iterations)}
        className="game-buttons"
        style={{backgroundColor: color}}>
          {!iterations ? "Start Game" : "Stop Game"}
        </p>
        <p
        className="game-buttons"
        style={{backgroundColor: color}}
          onClick={(e) => {
            setGrid(randomInput(generateGameBoard(size)));
          }}
        >
          Random Board
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${size}, 1fr)`,
          textAlign: "center",
          margin: '0.3rem',
          border: '2px solid black',
        }}
      >
        {grid.map((arr, row) =>
          arr.map((inner, column) => (
            <p
              className="cells"
              row={row}
              column={column}
              onClick={(e) => {
                handleCellClick(row, column);
              }}
              style={{
                backgroundColor: `${inner === 1 ? color : "white"}`,

                color: `${inner === 1 ? color : "white"}`,
                border: "0.1px solid #030104cc",
                borderRadius: "30px",
                fontSize: `${cellSize}rem `,
                cursor: "pointer",
              }}
            >
              {inner}
            </p>
          ))
        )}
      </div>
    </div>
  );
}
