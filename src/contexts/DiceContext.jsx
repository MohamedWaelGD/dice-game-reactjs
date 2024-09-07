import { createContext, useState, useRef, useEffect } from "react";

export const DiceContext = createContext();

export const DiceProvider = ({ children }) => {
    const NUMBER_OF_DICES = 6;
    const LOOP_MS = 200;
    const MAX_ROLL_MS = 3000;
    const [selectedDice, setSelectedDice] = useState();
    const [diceScore, setDiceScore] = useState(0);
    const [randomDice, setRandomDice] = useState(0);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log("Score: ", diceScore);
    }, [diceScore]);

    const selectDice = (value) => {
        setSelectedDice(value);
    };

    const rollRandomDice = () => {
        if (loading) return null;
        if (!selectedDice) {
            setError('You have not selected any number');
            return;
        }

        setError('');
        setLoading(true);
        let localRandomDice = randomDice;
        let interval = 0;
        const intervalRef = setInterval(() => {
            interval += LOOP_MS;
            if (interval >= MAX_ROLL_MS) {
                if (selectedDice == localRandomDice + 1) {
                    setDiceScore((prev) => prev + selectedDice)
                } else {
                    setDiceScore((prev) => prev - 2 < 0 ? 0 : prev - 2);
                }
                setLoading(false);
                clearInterval(intervalRef);
                return
            }
            
            const randomDiceIndex = Math.floor(Math.random() * NUMBER_OF_DICES);
            setRandomDice(randomDiceIndex);
            localRandomDice = randomDiceIndex;
        }, LOOP_MS);
    };

    const resetScore = () => {
        setSelectedDice(undefined);
        setError("");
        setLoading(false);
        setDiceScore(0);
        setRandomDice(0);
    };

    return (
        <DiceContext.Provider
            value={{
                selectedDice,
                diceScore,
                error,
                loading,
                randomDice,
                setLoading,
                selectDice,
                setError,
                resetScore,
                rollRandomDice
            }}
        >
            {children}
        </DiceContext.Provider>
    );
};

export default DiceProvider;
