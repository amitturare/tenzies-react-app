export default function Die(props) {
    function dieShape(count) {
        if (count === 1) {
            return (
                <div className="first-face">
                    <span className="dot"></span>
                </div>
            );
        } else if (count === 2) {
            return (
                <div className="second-face">
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            );
        } else if (count === 3) {
            return (
                <div className="third-face">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            );
        } else if (count === 4) {
            return (
                <div className="fourth-face">
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            );
        } else if (count === 5) {
            return (
                <div className="fifth-face">
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>

                    <div className="column">
                        <span className="dot"></span>
                    </div>

                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            );
        } else if (count === 6) {
            return (
                <div className="sixth-face">
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            );
        }
    }

    return (
        <div
            className={props.isHeld ? "die active" : "die"}
            onClick={() => props.handleClick(props.id)}
        >
            {dieShape(props.value)}
        </div>
    );
}
