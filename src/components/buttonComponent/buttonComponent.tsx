import React from "react";
import "./buttonStyles.css";

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
  variant?: "homeScreen" | "formScreen" | "signupScreen";
}

const Button: React.FC<Props> = ({
  variant,
  children,
  onClick,
}) => {
  return (
    <button className={`base ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;