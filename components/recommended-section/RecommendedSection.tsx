import styled from "styled-components";
import { FlexCnt, FlexCntAlgnCntr } from "../styles/FlexStyles";
import img from "../../public/img.jpg";
import Image from "next/image";
import { Avatar, IconButton } from "@mui/material";
import { ImgBasicStyle } from "../styles/ImgBasicStyle";

const StyledRecommendedImgCnt = styled.div`
  position: relative;
`;

const StyledRecommended = styled.div`
  width: 50%;
  margin: 10px;
`;

const StyledFavoritesIcon = styled.div`
  position: absolute;
  bottom: 7px;
  left: 4px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  display: grid;
  place-items: center;
`;

const RecommendedImgCnt: React.FC = () => {
  return (
    <StyledRecommendedImgCnt>
      <Image src={img} alt="" style={ImgBasicStyle} />
      <StyledFavoritesIcon>
        <IconButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            style={{ fill: "white" }}
          >
            <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
          </svg>
        </IconButton>
      </StyledFavoritesIcon>
    </StyledRecommendedImgCnt>
  );
};

const Recommended: React.FC = () => {
  return (
    <StyledRecommended>
      <RecommendedImgCnt />
      <p style={{ margin: "5px 0 10px 0" }}>Ramen</p>
      <FlexCntAlgnCntr>
        <Avatar style={{ width: "25px", height: "25px", marginRight: "6px" }} />
        <span>Creator</span>
      </FlexCntAlgnCntr>
    </StyledRecommended>
  );
};

const RecommendedSection: React.FC = () => {
  return (
    <>
      <FlexCnt>
        <Recommended />
        <Recommended />
      </FlexCnt>
    </>
  );
};

export default RecommendedSection;
