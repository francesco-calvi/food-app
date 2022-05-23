import { CSSProperties, ReactNode } from "react";

export type Creator = {
  name: string;
  image: string;
};

export type PostType = {
  id: number;
  creator: Creator;
  description: string;
  title: string;
  likes: number;
  comments: number;
  bookmarks: number;
  image: string;
};

export type ReactParentProps = {
  children?: ReactNode;
};

export type ColorProps = {
  color?: string;
};

export type ButtonProps = ReactParentProps &
  ColorProps & {
    text: string | number;
    iconColor?: string;
    bgColor?: string;
    style?: CSSProperties;
    ref?: any;
  };

export type PostProps = {
  post: PostType | undefined;
};
