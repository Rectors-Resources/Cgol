import "./About.css";

export default function About() {
  return (
    <div className="information">
      <header>
        <h1>Conway's Game of Life</h1>
      </header>

      <p>
        Conways Game of Life is a single player game created by mathematician{" "}
        <strong>John Conway</strong> in 1970 after trying to create an algorithm
        to replicate cellular automata replication and death. Originally played
        on paper the game found quick popularity among computer scientists for
        its dazzling graphics and insightful implications of applying this
        algorithm to model real world populations.
      </p>
      <p>The game consists of 3 rules:</p>
      <ul className="rules">
        <li>1. Any live cell with two or three live neighbours survives.</li>
        <li>
          2. Any dead cell with three live neighbours becomes a live cell.
        </li>
        <li>
          3. All other live cells die in the next generation. Similarly, all
          other dead cells stay dead.
        </li>
      </ul>
      <p>
        Every iteration the rules are applied to every cell with that cell
        either surviving on to the next iteration or dying and becoming open for
        the next iteration.
      </p>
    </div>
  );
}
