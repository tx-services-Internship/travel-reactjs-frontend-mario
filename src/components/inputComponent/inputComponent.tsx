import React, { ChangeEvent } from "react";
import './inputStyles.css';

interface Props {
  children?: React.ReactNode;
  type: string;
  className: string;
  placeholder: string,
  name: string,
  required: boolean | StringConstructor,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<Props> = (props) => {
  return (
    <input
      type={`${props.type}`}
      className={`${props.className}`}
      placeholder={`${props.placeholder}`}
      name={`${props.name}`}
      required
      onChange={props.onChange}
    >
      {props.children}
    </input>
  );
}

export default Input;