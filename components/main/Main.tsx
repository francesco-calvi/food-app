import styled from "styled-components";
import type { ReactParentProps } from "../../shared/customTypes";

const StyledMain = styled.main`
  padding: 0 var(--padding);
`;

const Main: React.FC<ReactParentProps> = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
