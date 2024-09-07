import React, { useContext } from "react";
import Button from "../../Button";
import { DiceContext } from "../../../contexts/DiceContext";

const SelectDice = () => {
    const {selectedDice, selectDice, loading, error } = useContext(DiceContext);
    const dices = [1, 2, 3, 4, 5, 6];
    return (
        <div className="flex flex-col items-end gap-5">
            {error && <p className="text-red-500 text-lg font-semibold">{error}</p>}
            <div className="flex gap-4">
                {dices.map((v, i) => (
                    <Button
                        label={v}
                        key={i}
                        isOutline={selectedDice != v}
                        classStyle="block w-16 h-16"
                        onClick={() => selectDice(v)}
                        disabled={loading}
                    />
                ))}
            </div>
            <p className="text-xl font-bold">Select Number</p>
        </div>
    );
};

export default SelectDice;
