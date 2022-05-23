import styled from "styled-components";

const StyledModalCnt = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.25);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s;
  backdrop-filter: blur(1px);
`;

export default StyledModalCnt;
