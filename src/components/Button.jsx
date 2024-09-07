import React from "react";
import { Link } from "react-router-dom";

const Button = ({ label, isOutline, isRounded, link, onClick, disabled, classStyle }) => {
    const baseStyle = "flex justify-center items-center rounded font-semibold";
    const roundedStyle = isRounded ? "rounded" : "";
    const finalStyle = isOutline
        ? `${baseStyle} ${roundedStyle} border border-black bg-transparent hover:bg-zinc-100`
        : `${baseStyle} ${roundedStyle} bg-black text-white hover:bg-zinc-900`;
    return link ? (
        <Link to={link}>
            <button className={`${finalStyle} ${classStyle}`} disabled={disabled} onClick={onClick}>{label}</button>
        </Link>
    ) : (
        <button className={`${finalStyle} ${classStyle}`} disabled={disabled} onClick={onClick}>{label}</button>
    );
};

export default Button;
