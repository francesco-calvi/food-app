import StyledCommonButton from "../styles/buttons/StyledCommonButton";
import BasicButton from "./BasicButton";
import { MouseEventHandler, CSSProperties } from "react";
import type { ReactParentProps, ButtonProps } from "../../shared/customTypes";

type CommonBtnProps = ReactParentProps &
  ButtonProps & {
    style?: CSSProperties;
    onClick?: MouseEventHandler<HTMLDivElement>;
  };

const CommonBtn: React.FC<CommonBtnProps> = ({
  children,
  text,
  style,
  onClick,
}) => {
  return (
    <StyledCommonButton onClick={onClick} style={style}>
      <BasicButton text={text} iconColor="var(--gray)" bgColor="white">
        {children}
      </BasicButton>
    </StyledCommonButton>
  );
};

export default CommonBtn;
