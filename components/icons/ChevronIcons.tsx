import { IconButton } from "@mui/material";
import { CSSProperties } from "react";
import { ReactParentProps } from "../../shared/customTypes";

const chevronStyles: CSSProperties = {
  display: "grid",
  placeItems: "center",
  padding: "12px",
  margin: "0 4px",
  backgroundColor: "rgba(0, 0, 0, 0.04)",
};

const ChevronIcon: React.FC<ReactParentProps> = ({ children }) => {
  return <IconButton style={chevronStyles}>{children}</IconButton>;
};

export const ChevronIconLeft = () => {
  return (
    <ChevronIcon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        viewBox="0 0 24 24"
      >
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      </svg>
    </ChevronIcon>
  );
};

export const ChevronIconRight = () => {
  return (
    <ChevronIcon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        viewBox="0 0 24 24"
      >
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      </svg>
    </ChevronIcon>
  );
};
