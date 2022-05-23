import { useState, useEffect, CSSProperties } from "react";
import { useAppDispatch } from "../../store/hooks";
import {
  incrementBookmarks,
  incrementLikes,
  incrementComments,
} from "../../store/features/postSlice";
import Image, { StaticImageData } from "next/image";
import bookmarkIcon from "../../public/bookmark-icon.png";
import commentIcon from "../../public/comment-icon.png";
import likeIcon from "../../public/like-icon.png";
import { FlexCntAlgnCntrSA } from "../styles/FlexStyles";
import StyledModalCnt from "../styles/modal/StyledModalCnt";
import StyledModal from "../styles/modal/StyledModal";
import StyledCloseBtn from "../styles/modal/StyledCloseBtn";
import StyledCounterValue from "../styles/modal/StyledCounterValue";
import { modalNames } from "../../shared/modalNames";
import type { PostProps } from "../../shared/customTypes";

type ModalProps = PostProps & {
  openModal: boolean;
  closeModal: () => void;
  modalName: string;
};

type Icons = {
  [index: string]: StaticImageData;
};

const icons: Icons = {
  [modalNames.LIKES_MODAL]: likeIcon,
  [modalNames.COMMENTS_MODAL]: commentIcon,
  [modalNames.BOOKMARKS_MODAL]: bookmarkIcon,
};

type CounterValues = {
  [index: string]: number | undefined;
};

const Modal: React.FC<ModalProps> = ({
  post,
  openModal,
  closeModal,
  modalName,
}) => {
  const [isOpen, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setOpen(openModal);
  }, [openModal]);

  const increment = () => {
    switch (modalName) {
      case modalNames.LIKES_MODAL: {
        dispatch(incrementLikes(post!.id));
        break;
      }
      case modalNames.COMMENTS_MODAL: {
        dispatch(incrementComments(post!.id));
        break;
      }
      case modalNames.BOOKMARKS_MODAL: {
        dispatch(incrementBookmarks(post!.id));
        break;
      }
    }
    // setTimeout(() => {
    //   dispatch(updatePost(post));
    // }, 1000);
  };

  const onOpenStyles: CSSProperties = {
    visibility: isOpen ? "visible" : "hidden",
    opacity: isOpen ? "1" : "0",
  };

  const couterValues: CounterValues = {
    [modalNames.LIKES_MODAL]: post?.likes,
    [modalNames.COMMENTS_MODAL]: post?.comments,
    [modalNames.BOOKMARKS_MODAL]: post?.bookmarks,
  };

  return (
    <StyledModalCnt style={onOpenStyles}>
      <StyledModal>
        <StyledCloseBtn onClick={() => closeModal()}>Close</StyledCloseBtn>
        <FlexCntAlgnCntrSA>
          {modalName && (
            <Image
              src={icons[modalName]}
              alt=""
              onClick={increment}
              style={{ cursor: "pointer" }}
            />
          )}
          <StyledCounterValue>{couterValues[modalName]}</StyledCounterValue>
        </FlexCntAlgnCntrSA>
      </StyledModal>
    </StyledModalCnt>
  );
};

export default Modal;
