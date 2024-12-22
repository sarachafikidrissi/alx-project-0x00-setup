import { ButtonProps } from "@/interfaces";
import React  from "react";

const Button: React.FC<ButtonProps> = ({title, styles=""}) => {
return (

        <button className={`bg-red-400 text-white ${styles} `}>{title}</button>
)
}

export default Button