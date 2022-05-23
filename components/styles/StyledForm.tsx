import styled from "styled-components";
import Rounded from "./Rounded";

type StyledFormProps = {
  width?: string;
};

const StyledForm = styled(Rounded)`
  width: ${(props: StyledFormProps) => (props.width ? props.width : "100%")};
  display: flex;
  padding: 10px 15px;
  align-items: center;
  color: var(--gray);
`;

export default StyledForm;
