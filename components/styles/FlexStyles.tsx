import styled from "styled-components";

const FlexCnt = styled.div`
  display: flex;
`;

const FlexCntAlgnCntr = styled(FlexCnt)`
  align-items: center;
`;

const FlexCntCntr = styled(FlexCntAlgnCntr)`
  justify-content: center;
`;

const FlexCntAlgnCntrSB = styled(FlexCntAlgnCntr)`
  justify-content: space-between;
`;

const FlexCntAlgnCntrSA = styled(FlexCntAlgnCntr)`
  justify-content: space-around;
`;

export {
  FlexCnt,
  FlexCntAlgnCntr,
  FlexCntCntr,
  FlexCntAlgnCntrSB,
  FlexCntAlgnCntrSA,
};
