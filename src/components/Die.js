export default function Die(props) {
    return (
        <div
            className={props.isHeld ? "die active" : "die"}
            onClick={() => props.handleClick(props.id)}
        >
            <p>{props.value}</p>
        </div>
    );
}
