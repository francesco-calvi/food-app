import StyledForm from "../styles/StyledForm";
import type { ReactParentProps } from "../../shared/customTypes";

type FormProps = ReactParentProps & {
  width?: string;
};

const Form: React.FC<FormProps> = ({ width, children }) => {
  return <StyledForm width={width}>{children}</StyledForm>;
};

export default Form;
