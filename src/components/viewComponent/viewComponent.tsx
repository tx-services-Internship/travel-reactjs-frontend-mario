import React from "react";
import "./ViewStyle.css";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const View: React.FC<Props> = (props) => {
  return <div className="viewComponent">{props.children}</div>;
};

export default View;
