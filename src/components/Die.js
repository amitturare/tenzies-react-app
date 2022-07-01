export default function Die(props) {
    function dieShape(count) {
        if (count === 1) {
            return (
                <div class="first-face">
                    <span class="dot"></span>
                </div>
            );
        } else if (count === 2) {
            return (
                <div class="second-face">
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
            );
        } else if (count === 3) {
            return (
                <div class="third-face">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
            );
        } else if (count === 4) {
            return (
                <div class="fourth-face">
                    <div class="column">
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>
                    <div class="column">
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>
                </div>
            );
        } else if (count === 5) {
            return (
                <div class="fifth-face">
                    <div class="column">
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>

                    <div class="column">
                        <span class="dot"></span>
                    </div>

                    <div class="column">
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>
                </div>
            );
        } else if (count === 6) {
            return (
                <div class="sixth-face">
                    <div class="column">
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>
                    <div class="column">
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
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
