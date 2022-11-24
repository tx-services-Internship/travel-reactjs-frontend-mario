import React from "react";
import "./viewStyle.css";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const View: React.FC<Props> = (props) => {
  return (
    <div
      className={`${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default View;
