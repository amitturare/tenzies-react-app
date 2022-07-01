import { useState, useEffect } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function App() {
    const newDiceArr = () => {
        const resultantArr = [];
        for (let i = 1; i <= 10; i++) {
            resultantArr.push({
                id: nanoid(),
                value: Math.floor(Math.random() * (7 - 1)) + 1,
                isHeld: false,
            });
        }
        return resultantArr;
    };

    const [diceArr, setDiceArr] = useState(newDiceArr());
    const [tenzies, setTenzies] = useState(false);
    const [totalRolls, setTotalRolls] = useState(0);

    // Check all the numbers are same or not
    function checkNumbers(arr) {
        return arr.every((item) => item.value === arr[0].value && item.isHeld);
    }

    useEffect(() => {
        if (checkNumbers(diceArr)) {
            setTenzies(true);
        }
    }, [diceArr]);

    // Set all the dice
    const diceElements = diceArr.map((die) => (
        <Die
            key={die.id}
            id={die.id}
            value={die.value}
            isHeld={die.isHeld}
            handleClick={holdDice}
        />
    ));

    // Roll Button
    function roll() {
        if (!tenzies) {
            setDiceArr((oldArr) =>
                oldArr.map((die) => {
                    if (die.isHeld) {
                        return { ...die, value: die.value };
                    } else {
                        return {
                            ...die,
                            value: Math.floor(Math.random() * (7 - 1)) + 1,
                        };
                    }
                })
            );
            setTotalRolls(totalRolls + 1);
        } else {
            setDiceArr(newDiceArr());
            setTenzies(false);
            setTotalRolls(0);
        }
    }

    // Hold Dice
    function holdDice(id) {
        setDiceArr((oldArr) =>
            oldArr.map((die) => {
                if (id === die.id) {
                    return { ...die, isHeld: !die.isHeld };
                } else {
                    return die;
                }
            })
        );
    }
    return (
        <main>
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">
                Roll until all dice are the same. Click each die to freeze it at
                its current value between rolls.
            </p>
            <div className="dice-container">{diceElements}</div>

            <p className="total-rolls">Total Rolls: {totalRolls}</p>

            <button className="roll-btn" onClick={roll}>
                {tenzies ? "Play Again!" : "Roll"}
            </button>
        </main>
    );
}
