/*
18.08.25
Tictactoe
Author Silvan
*/


import {useEffect, useState} from "react";
import "./Tactoe.css"

export default function Tictactoe(){
    const[squares, setSquares] = useState(Array(9).fill(null))
    const[turn, setTurn] = useState(1)
    const[turn1, setTurn1] = useState("X")
    const[countX, setCountX] = useState(0)
    const[countO, setCountO] = useState(0)

    function turnhandler(){
        if(turn === 2){
            setTurn1("X")
            setTurn(1)
        }else{
            setTurn1("O")
            setTurn(2)
        }
    }

    function Square({value, onSquareClick}){
        return(
            <button className="Square" onClick={onSquareClick}>
                {value}
            </button>
        )
    }

    function handelclick(i) {
        const nextSquares = squares.slice();
        if(nextSquares[i] || calculateWinner(squares)) return;
        nextSquares[i] = turn1
        turnhandler()
        setSquares(nextSquares);
    }

    function calculateWinner(squares) {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];

            }
        }
        return null;
    }

    const winner = calculateWinner(squares);

    function resetGame() {
        setSquares(Array(9).fill(null));
        setTurn(1);
        setTurn1("X");
    }

    /*function countwins(){
        if(winner !== null){
            if (winner === "X"){
                setCountX(countX + 1)
            }else{
                setCountO(countO + 1)
            }
        }else{
            return null;
        }
    }*/

    useEffect(() => {
        if(winner !== null){
            if(winner === "X"){
                setCountX((prev) => prev + 1);
            }else{
                setCountO((prev) => prev + 1);
            }
        }
    }, [winner]);

    return(
        <>
            <div  className="board">
                <Square value={squares[0]} onSquareClick={() => handelclick(0)}/>
                <Square value={squares[1]} onSquareClick={() => handelclick(1)}/>
                <Square value={squares[2]} onSquareClick={() => handelclick(2)}/>

                <Square value={squares[3]} onSquareClick={() => handelclick(3)}/>
                <Square value={squares[4]} onSquareClick={() => handelclick(4)}/>
                <Square value={squares[5]} onSquareClick={() => handelclick(5)}/>

                <Square value={squares[6]} onSquareClick={() => handelclick(6)}/>
                <Square value={squares[7]} onSquareClick={() => handelclick(7)}/>
                <Square value={squares[8]} onSquareClick={() => handelclick(8)}/>
            </div>
            <div className="bar">
                <div className={`status ${winner ? "winner" : "turn"}`}>
                    {winner ? `Gewinner: ${winner}` : `Am Zug: ${turn1}`}
                </div>
                <div className="controls">
                    <button className="reset-btn" onClick={resetGame}>
                        Reset
                    </button>
                </div>
                <div className="scoreboard">
                    <div className="x-score">X: {countX}</div>
                    <div className="o-score">O: {countO}</div>
                </div>
            </div>
        </>
    )
}