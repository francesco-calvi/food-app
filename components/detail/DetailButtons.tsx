import { FlexCntAlgnCntr, FlexCntAlgnCntrSB } from "../styles/FlexStyles";
import BasicButton from "../buttons/BasicButton";
import ShareBtn from "../buttons/ShareBtn";
import CommonBtn from "../buttons/CommonBtn";
import BookmarkIcon from "../icons/BookmarkIcon";
import Modal from "../modal/Modal";
import { useState } from "react";
import { PostProps } from "../../shared/customTypes";
import { modalNames } from "../../shared/modalNames";

const DetailButtons: React.FC<PostProps> = ({ post }) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalName, setModalName] = useState("");

  const handleClick = (modalName: string) => {
    setModalName(modalName);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <FlexCntAlgnCntrSB
        style={{
          margin: "40px -40px",
          borderTop: "var(--border)",
          borderBottom: "var(--border)",
          padding: "15px var(--padding)",
        }}
      >
        <FlexCntAlgnCntr>
          <CommonBtn
            text={"Like  " + post?.likes}
            onClick={() => handleClick(modalNames.LIKES_MODAL)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M17.516 3c2.382 0 4.487 1.564 4.487 4.712 0 4.963-6.528 8.297-10.003 11.935-3.475-3.638-10.002-6.971-10.002-11.934 0-3.055 2.008-4.713 4.487-4.713 3.18 0 4.846 3.644 5.515 5.312.667-1.666 2.333-5.312 5.516-5.312zm0-2c-2.174 0-4.346 1.062-5.516 3.419-1.17-2.357-3.342-3.419-5.515-3.419-3.403 0-6.484 2.39-6.484 6.689 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-4.586-3.414-6.689-6.484-6.689z" />
            </svg>
          </CommonBtn>

          <CommonBtn
            text={"Salva  " + post?.bookmarks}
            onClick={() => handleClick(modalNames.BOOKMARKS_MODAL)}
          >
            <BookmarkIcon height="20" width="20" />
          </CommonBtn>
          <CommonBtn
            text={"Commenti  " + post?.comments}
            onClick={() => handleClick(modalNames.COMMENTS_MODAL)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M12 3c5.514 0 10 3.592 10 8.007 0 4.917-5.144 7.961-9.91 7.961-1.937 0-3.384-.397-4.394-.644-1 .613-1.594 1.037-4.272 1.82.535-1.373.722-2.748.601-4.265-.837-1-2.025-2.4-2.025-4.872 0-4.415 4.486-8.007 10-8.007zm0-2c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 1.417.345 2.774.503 4.059.503 7.084 0 11.91-4.837 11.91-9.961-.001-5.811-5.702-10.006-12.001-10.006z" />
            </svg>
          </CommonBtn>
        </FlexCntAlgnCntr>
        <div>
          <BasicButton
            text="Modalità Passo Passo"
            bgColor="var(--primary-color)"
          >
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M12-.006c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm5.999 19.999c2.429-1.825 4.001-4.73 4.001-7.999 0-5.519-4.481-10-10-10s-10 4.481-10 10c0 3.701 2.015 6.936 5.008 8.665v-4.023c0-.576-.36-.765-1.147-1.395-.581-.466-.981-1.194-.907-1.935.209-2.114.718-6.312.718-6.312h.5v5h.836l.186-5h.506l.144 5h.836l.201-5h.469l.166 5h.835v-5h.458s.562 4.171.793 6.292c.081.751-.341 1.493-.935 1.963-.791.626-1.151.806-1.151 1.391v5.042c.794.204 1.626.312 2.484.312 1.229 0 2.407-.222 3.496-.629v-3.371s-.977-.003-2.056 0c.668-5.83 2.586-11 3.883-11 .373 0 .67.297.673.709.005.802.004 7.091.003 12.29z" />
            </svg>
          </BasicButton>
        </div>
        <FlexCntAlgnCntr>
          <CommonBtn text="Stampa ricetta">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M24 5h-4v-5h-16v5h-4v13h4v6h9.519c2.947 0 6.029-3.577 6.434-6h4.047v-13zm-18-3h12v3h-12v-3zm8.691 16.648s1.469 3.352-2 3.352h-6.691v-8h12v2.648c0 3.594-3.309 2-3.309 2zm6.809-10.648c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5zm-5.5 9h-8v-1h8v1zm-3 1h-5v1h5v-1z" />
            </svg>
          </CommonBtn>
          <ShareBtn style={{ marginLeft: "auto" }} />
        </FlexCntAlgnCntr>
      </FlexCntAlgnCntrSB>
      <Modal
        post={post}
        openModal={openModal}
        closeModal={closeModal}
        modalName={modalName}
      />
    </>
  );
};

export default DetailButtons;
