import Image from "next/image";
import img from "../../public/img.jpg";
import { FlexCntAlgnCntr } from "../styles/FlexStyles";
import styled from "styled-components";
import { ImgBasicStyle } from "../styles/ImgBasicStyle";
import BookmarkIcon from "../icons/BookmarkIcon";
import StyledInput from "../styles/StyledInput";
import Form from "../form/Form";
import Link from "next/link";
import ShareBtn from "../buttons/ShareBtn";
import CommonBtn from "../buttons/CommonBtn";
import { setSelectedPost } from "../../store/features/postSlice";
import { useAppDispatch } from "../../store/hooks";
import type { PostProps } from "../../shared/customTypes";
import PostSection from "./PostSection";

type StyledParagraphProps = {
  color: string;
  fSize: string;
};

const StyledParagraph = styled.p`
  margin: 0;
  padding: 0;
  color: ${(props: StyledParagraphProps) => props.color};
  font-size: ${(props: StyledParagraphProps) => props.fSize};
`;

const FooterSection = styled.div`
  padding: 20px 20px 0 20px;
  border-top: 1px solid var(--gray);
  margin: 0 -20px;
`;

const Post: React.FC<PostProps> = ({ post }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      {post && (
        <div>
          <PostSection>
            <div>
              <StyledParagraph color="inherit" fSize="1.1em">
                {post.creator.name}
              </StyledParagraph>
              <StyledParagraph color="gray" fSize="0.8em">
                3 ore fa
              </StyledParagraph>
            </div>
          </PostSection>
          <Link href={"/detail/" + post.id}>
            <div onClick={() => dispatch(setSelectedPost(post.id))}>
              <p>{post.description}</p>
              <Image src={img} alt="" style={ImgBasicStyle} />
              <h2 style={{ margin: 0 }}>{post.title}</h2>
            </div>
          </Link>
          <FlexCntAlgnCntr style={{ margin: "20px auto" }}>
            <CommonBtn text={post.likes}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M17.516 3c2.382 0 4.487 1.564 4.487 4.712 0 4.963-6.528 8.297-10.003 11.935-3.475-3.638-10.002-6.971-10.002-11.934 0-3.055 2.008-4.713 4.487-4.713 3.18 0 4.846 3.644 5.515 5.312.667-1.666 2.333-5.312 5.516-5.312zm0-2c-2.174 0-4.346 1.062-5.516 3.419-1.17-2.357-3.342-3.419-5.515-3.419-3.403 0-6.484 2.39-6.484 6.689 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-4.586-3.414-6.689-6.484-6.689z" />
              </svg>
            </CommonBtn>
            <CommonBtn text={post.comments}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M12 3c5.514 0 10 3.592 10 8.007 0 4.917-5.144 7.961-9.91 7.961-1.937 0-3.384-.397-4.394-.644-1 .613-1.594 1.037-4.272 1.82.535-1.373.722-2.748.601-4.265-.837-1-2.025-2.4-2.025-4.872 0-4.415 4.486-8.007 10-8.007zm0-2c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 1.417.345 2.774.503 4.059.503 7.084 0 11.91-4.837 11.91-9.961-.001-5.811-5.702-10.006-12.001-10.006z" />
              </svg>
            </CommonBtn>
            <CommonBtn text={post.bookmarks}>
              <BookmarkIcon height="20" width="20" />
            </CommonBtn>
            <ShareBtn style={{ marginLeft: "auto" }} />
          </FlexCntAlgnCntr>
          <FooterSection>
            <PostSection>
              <Form>
                <StyledInput
                  type="text"
                  name=""
                  id=""
                  placeholder="Scrivi un commento..."
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 4h-3v-1h3v1zm12 9c0 2.206-1.794 4-4 4s-4-1.794-4-4 1.794-4 4-4 4 1.794 4 4zm-1 0c0-1.657-1.342-3-3-3s-3 1.343-3 3 1.342 3 3 3 3-1.343 3-3zm8-8v17h-24v-17h5.93c.669 0 1.293-.334 1.664-.891l1.406-2.109h8l1.406 2.109c.371.557.995.891 1.664.891h3.93zm-19 4c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1zm14 4c0-3.314-2.687-6-6-6s-6 2.686-6 6 2.687 6 6 6 6-2.686 6-6z" />
                </svg>
              </Form>
            </PostSection>
          </FooterSection>
        </div>
      )}
    </>
  );
};

export default Post;
