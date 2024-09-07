import React, { useContext, useState } from "react";
import dice_1 from "../../../public/dice_1.png";
import dice_2 from "../../../public/dice_2.png";
import dice_3 from "../../../public/dice_3.png";
import dice_4 from "../../../public/dice_4.png";
import dice_5 from "../../../public/dice_5.png";
import dice_6 from "../../../public/dice_6.png";
import { DiceContext } from "../../contexts/DiceContext";
import Button from "../../components/Button";
import Rules from "./Rules";

const DiceClicker = () => {
    const dices = [
        {
            value: 1,
            imgPath: dice_1,
        },
        {
            value: 2,
            imgPath: dice_2,
        },
        {
            value: 3,
            imgPath: dice_3,
        },
        {
            value: 4,
            imgPath: dice_4,
        },
        {
            value: 5,
            imgPath: dice_5,
        },
        {
            value: 6,
            imgPath: dice_6,
        },
    ];
    const {
        selectedDice,
        randomDice,
        loading,
        addDiceScore,
        setError,
        resetScore,
        rollRandomDice
    } = useContext(DiceContext);
    const [showRules, setShowRules] = useState(false);
    return (
        <div className="flex flex-col gap-10 justify-center items-center py-24">
            <div className="w-56 flex flex-col justify-center items-center gap-2">
                <img src={dices[randomDice].imgPath} className={`${loading ? 'animate-spin' : ''} w-36`} onClick={() => rollRandomDice()} />
                <p className="text-xl">Click on Dice to roll</p>
                <Button
                    label="Reset Score"
                    classStyle="w-full py-2"
                    isOutline={true}
                    onClick={() => resetScore()}
                    disabled={loading}
                />
                <Button label="Show Rules" classStyle="w-full py-2" onClick={() => setShowRules(!showRules)} />
            </div>

            {showRules && <Rules/>}
        </div>
    );
};

export default DiceClicker;
