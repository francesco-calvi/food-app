import styled from "styled-components";
import Rounded from "./Rounded";

type RoundedContainerProps = {
  marginBottom?: string;
};

const RoundedContainer = styled(Rounded)`
  padding: 20px;
  margin: 0 10px;
  margin-bottom: ${(props: RoundedContainerProps) => props.marginBottom};
`;

export default RoundedContainer;
