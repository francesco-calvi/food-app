import { FlexCntAlgnCntr, FlexCntAlgnCntrSB } from "../styles/FlexStyles";
import { Avatar } from "@mui/material";
import BasicButton from "../buttons/BasicButton";
import StyledCommonButton from "../styles/buttons/StyledCommonButton";
import { PostProps } from "../../shared/customTypes";
import StyledRightSide from "../styles/detail/StyledRightSide";

const RightSide: React.FC<PostProps> = ({ post }) => {
  return (
    <StyledRightSide>
      <p>PRIMO</p>
      <h1>{post?.title}</h1>
      <FlexCntAlgnCntrSB
        style={{
          width: "27%",
          margin: "0 auto 30px",
        }}
      >
        <FlexCntAlgnCntr>
          <svg
            style={{ fill: "var(--gray)", marginRight: "5px" }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7 14h-8v-9h2v7h6v2z" />
          </svg>
          40m
        </FlexCntAlgnCntr>
        <span style={{ display: "grid", placeItems: "center" }}>
          <svg
            style={{ fill: "var(--gray)", height: "5px", width: "5px" }}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
          </svg>
        </span>
        <FlexCntAlgnCntr>
          <svg
            style={{ fill: "var(--gray)", marginRight: "5px" }}
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M9 23h-6v-7.988c.517.217 1.134.384 1.938.484.274.034.524-.16.558-.434.034-.274-.16-.524-.434-.558-4.81-.603-5.062-5.307-5.062-6.004 0-3.587 2.913-6.5 6.5-6.5.788 0 1.543.141 2.242.397.82-.86 1.977-1.397 3.258-1.397s2.438.537 3.258 1.397c.699-.256 1.454-.397 2.242-.397 3.587 0 6.5 2.913 6.5 6.5 0 .691-.252 5.401-5.062 6.004-.274.034-.468.284-.434.558.034.274.284.468.558.434.804-.1 1.421-.267 1.938-.484v7.988h-6v-3.5c0-.311-.26-.5-.5-.5-.239 0-.5.189-.5.5v3.5h-4v-3.5c0-.311-.26-.5-.5-.5-.239 0-.5.189-.5.5v3.5z" />
          </svg>
          Facile
        </FlexCntAlgnCntr>
      </FlexCntAlgnCntrSB>
      <p style={{ fontSize: "1.3em", textAlign: "center" }}>
        {post?.description}
      </p>
      <FlexCntAlgnCntr style={{ width: "45%" }}>
        <span>di</span>
        <Avatar style={{ margin: "0 10px" }} />
        <span>{post?.creator.name}</span>
        <BasicButton
          text="Segui"
          bgColor="var(--primary-color)"
          style={{ width: "40%", marginLeft: "auto" }}
        />
      </FlexCntAlgnCntr>
    </StyledRightSide>
  );
};

export default RightSide;
