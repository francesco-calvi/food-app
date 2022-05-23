import styled from "styled-components";
import Rounded from "../Rounded";

const StyledModal = styled(Rounded)`
  width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.5em;
  background: white;
`;

export default StyledModal;
