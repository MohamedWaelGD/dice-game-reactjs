import { createContext, useState, useRef, useEffect } from "react";

export const DiceContext = createContext();

export const DiceProvider = ({ children }) => {
    const NUMBER_OF_DICES = 6;
    const LOOP_MS = 500;
    const MAX_ROLL_MS = 3000;
    const [selectedDice, setSelectedDice] = useState();
    const [diceScore, setDiceScore] = useState(0);
    const [randomDice, setRandomDice] = useState(0);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const randomDiceRef = useRef(randomDice);

    useEffect(() => {
        randomDiceRef.current = randomDice;
    }, [randomDice])

    const addDiceScore = (value) => {
        setDiceScore((prev) => prev + value);
    };

    const selectDice = (value) => {
        setSelectedDice(value);
    };

    const rollRandomDice = () => {
        if (loading) return null;
        if (!selectedDice) {
            setError('You have not selected any number');
            return;
        }

        let ms = 0;
        setError('');
        setLoading(true);
        const interval = setInterval(() => {
            ms += LOOP_MS;
            if (ms >= MAX_ROLL_MS) {
                setLoading(false);
                clearInterval(interval);
                const finalRandomDice = randomDiceRef.current;
                console.log(selectedDice, finalRandomDice);
                if (selectedDice == finalRandomDice + 1) {
                    addDiceScore(selectedDice);
                } else {
                    if (diceScore - 2 < 0) {
                        addDiceScore(-diceScore);
                    } else {
                        addDiceScore(diceScore - 2);
                    }
                }
            }
            
            const randomDiceIndex = Math.floor(Math.random() * NUMBER_OF_DICES);
            setRandomDice(randomDiceIndex);
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
