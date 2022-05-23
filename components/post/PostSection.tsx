import { FlexCntAlgnCntr } from "../styles/FlexStyles";
import type { ReactParentProps } from "../../shared/customTypes";
import { Avatar } from "@mui/material";

const PostSection: React.FC<ReactParentProps> = ({ children }) => {
  return (
    <section>
      <FlexCntAlgnCntr>
        <Avatar style={{ marginRight: "10px" }} />
        {children}
      </FlexCntAlgnCntr>
    </section>
  );
};

export default PostSection;
