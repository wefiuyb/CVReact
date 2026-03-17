import { useState } from "react";
import "./tictactoe.css";

function Square({ value, onClick }: { value: string; onClick: () => void }) {
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
}

function Board({
    xIsNext,
    squares,
    onPlay,
}: {
    xIsNext: boolean;
    squares: string[];
    onPlay: (nextSquares: string[]) => void;
}) {
    function handleClick(i: number) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        onPlay(nextSquares);
    }
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Победитель: " + winner.player;
        const line = winner.line;
        const grid = document.querySelector(".board-grid")!;
        for (let i = 0; i < line.length; i++) {
            const index = line[i];
            grid.children[index].classList.add("winning-square");
        }
    } else {
        status = "Следующий игрок: " + (xIsNext ? "X" : "O");
    }
    return (
        <div>
            
            <div className="board-grid">
                <Square value={squares[0]} onClick={() => handleClick(0)} />
                <Square value={squares[1]} onClick={() => handleClick(1)} />
                <Square value={squares[2]} onClick={() => handleClick(2)} />
                <Square value={squares[3]} onClick={() => handleClick(3)} />
                <Square value={squares[4]} onClick={() => handleClick(4)} />
                <Square value={squares[5]} onClick={() => handleClick(5)} />
                <Square value={squares[6]} onClick={() => handleClick(6)} />
                <Square value={squares[7]} onClick={() => handleClick(7)} />
                <Square value={squares[8]} onClick={() => handleClick(8)} />
            </div>
            <div className="status">{status}</div>
        </div>
    );
}

function calculateWinner(squares: string[]) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return {line: [a, b, c], player: squares[a]};
        }
    }
    return null;
}

export function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares: string[]) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove: number) {
        document.querySelectorAll(".winning-square").forEach((element) => {
            element.classList.remove("winning-square");
        });
        setCurrentMove(nextMove);
    }


    return (
        <div className="game">
            <div className="game-board">
                <Board
                    xIsNext={xIsNext}
                    squares={currentSquares}
                    onPlay={handlePlay}
                />
            </div>
            <div className="game-info">
                <button onClick={() => jumpTo(0)}>Сбросить</button>
            </div>
        </div>
    );
}

export default function TicTacToe() {
    return (
        <div className="tictactoe">
            <Game />
        </div>
    );
}
