export default function Square({ value, onClick }) {
    console.log(value)
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    )
}