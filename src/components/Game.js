import React, { useState } from 'react';
import { calculateWinner } from '../helpers';
import Board from './Board';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = i => {
        const boardCopy = [...board];
        if (winner || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }

    const renderMoves = () => (
        <button onClick={() => setBoard(Array(9).fill(null))}>
            Start Game
        </button>
    )

    return (
        <>
            <p>{winner ? 'Winner: ' + winner : 'Next player: ' + (xIsNext ? 'X' : 'O')}</p>
            <Board squares={board} onClick={handleClick} />
            {renderMoves()}
        </>

    )
}

export default Game;