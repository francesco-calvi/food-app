/* eslint-disable react/display-name */
import styled from "styled-components";
import { FlexCntCntr } from "../styles/FlexStyles";
import type { ColorProps, ButtonProps } from "../../shared/customTypes";
import { Button } from "@mui/material";
import { forwardRef } from "react";

const StyledBtnChild = styled.span`
  color: ${(props: ColorProps) => (props.color ? props.color : "inherit")};
`;

const Text = styled(StyledBtnChild)`
  font-weight: 600;
  font-size: 1.2em;
`;

const IconCnt = styled(StyledBtnChild)`
  margin-right: 10px;
  display: grid;
  place-items: center;
`;

const BasicButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, text, color, iconColor, bgColor, style }, ref) => {
    return (
      <Button
        ref={ref}
        className="button"
        style={{ ...style, background: bgColor ? bgColor : "transparent" }}
      >
        <FlexCntCntr style={{ color: color ? color : "inherit" }}>
          {children && <IconCnt color={iconColor}>{children}</IconCnt>}
          <Text color={color}>{text}</Text>
        </FlexCntCntr>
      </Button>
    );
  }
);

// const BasicButton: React.FC<ButtonProps> = ({
//   children,
//   text,
//   color,
//   iconColor,
//   bgColor,
//   style,
// }) => {
//   return (
//     <Button
//       className="button"
//       style={{ ...style, background: bgColor ? bgColor : "transparent" }}
//     >
//       <FlexCntCntr style={{ color: color ? color : "inherit" }}>
//         {children && <IconCnt color={iconColor}>{children}</IconCnt>}
//         <Text color={color}>{text}</Text>
//       </FlexCntCntr>
//     </Button>
//   );
// };

export default BasicButton;
