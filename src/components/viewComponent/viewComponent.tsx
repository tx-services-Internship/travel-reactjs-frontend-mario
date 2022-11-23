import React from "react";

interface Props {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  height?: string;
}

const View: React.FC<Props> = ({
  children,
  style,
  display,
  justifyContent,
  alignItems,
  height
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      {children}
    </div>
  );
}

export default View;