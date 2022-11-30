import React from "react";
import "./buttonStyles.css";

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
  variant?: "homeScreen" | "signupScreen" | "formScreen";
}

const Button: React.FC<Props> = ({ variant, children, onClick }) => {
  return (
    <button className={`base ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
