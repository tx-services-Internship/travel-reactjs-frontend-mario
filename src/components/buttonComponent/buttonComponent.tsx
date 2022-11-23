import React from "react";
import './buttonStyles.css';

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
  className: string;
}

const Button: React.FC<Props> = (props) => {
  return (
    <button
    className={`${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;