import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

interface Props {
  children?: React.ReactNode;
}

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  color: "#06da91",
  fontSize: "1.5rem",
  width: "10vw",
  marginTop: "1vh",
  marginBottom: "3vh",
  minWidth: "10rem",
  borderRadius: "15px",
  whiteSpace: "nowrap",
  "&:hover": {
    backgroundColor: "#116F59",
    color: "#F0F0F0",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "0.8rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.75rem",
  },
}));

const ButtonComponent: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <ColorButton>{children}</ColorButton>
    </div>
  );
};

export default ButtonComponent;
