import { NextPage } from "next";
import {
  setSelectedPost,
  getSelectedPost,
} from "../../store/features/postSlice";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { FlexCntAlgnCntr } from "../../components/styles/FlexStyles";
import img from "../../public/img.jpg";
import Image from "next/image";
import { PostType } from "../../shared/customTypes";
import RightSide from "../../components/detail/RightSide";
import { ImgBasicStyle } from "../../components/styles/ImgBasicStyle";
import App from "../../components/App";
import DetailButtons from "../../components/detail/DetailButtons";

const DetailPage: NextPage = () => {
  const post: PostType | undefined = useAppSelector(getSelectedPost);

  return (
    <App>
      <FlexCntAlgnCntr>
        <Image src={img} alt="" style={ImgBasicStyle} />
        <RightSide post={post} />
      </FlexCntAlgnCntr>
      <DetailButtons post={post} />
    </App>
  );
};

export default DetailPage;
