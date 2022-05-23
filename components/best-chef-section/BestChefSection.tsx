import { Avatar } from "@mui/material";
import { FlexCntAlgnCntr } from "../styles/FlexStyles";
import BasicButton from "../buttons/BasicButton";

const BestChefRow: React.FC = () => {
  return (
    <FlexCntAlgnCntr style={{ margin: "15px 0" }}>
      <Avatar />
      <p
        style={{
          flex: "1",
          margin: "0 10px",
          fontSize: "0.9em",
          fontWeight: 600,
        }}
      >
        Una Stella in Cucina
      </p>
      <BasicButton
        text="Follow"
        bgColor="var(--primary-color)"
        style={{ fontSize: "0.7em" }}
      />
    </FlexCntAlgnCntr>
  );
};

const BestChefSection: React.FC = () => {
  return (
    <>
      <div>
        <BestChefRow />
        <BestChefRow />
        <BestChefRow />
        <BestChefRow />
        <BestChefRow />
      </div>
    </>
  );
};

export default BestChefSection;
