import Square from "./Square";

export default function Board({ squares, onClick }) {

    console.log(squares)

    return (
        <div className="container">
            <div className="board">
                {squares.map((square, i) => (
                    <Square key={i} value={square} onClick={() => onClick(i)} />
                ))}
            </div>
        </div>
    )
}