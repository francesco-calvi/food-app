import styled from "styled-components";

const StyledCloseBtn = styled.div`
  color: #aaa;
  line-height: 50px;
  font-size: 80%;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 70px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: var(--secondary-color);
  }
`;

export default StyledCloseBtn;
