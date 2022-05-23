import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import type { PostType } from "../../shared/customTypes";
import { mockPosts } from "../../shared/mockData";

// Define a type for the slice state
interface PostState {
  posts: PostType[];
  selectedPost: PostType | undefined;
}

// Define the initial state using that type
const initialState: PostState = {
  posts: mockPosts,
  selectedPost: undefined,
};

const getSelectedPostById = (state: PostState, id: number) => {
  return state.posts.find((p) => p.id === id)!;
};

export const postSlice = createSlice({
  name: "postReducer",
  initialState,
  reducers: {
    setSelectedPost: (state: PostState, action: PayloadAction<number>) => {
      const post: PostType = getSelectedPostById(state, action.payload);
      state.selectedPost = post;
    },
    incrementLikes: (state: PostState, action: PayloadAction<number>) => {
      const post: PostType = getSelectedPostById(state, action.payload);
      post.likes++;
      state.selectedPost = post;
    },
    incrementComments: (state: PostState, action: PayloadAction<number>) => {
      const post: PostType = getSelectedPostById(state, action.payload);
      post.comments++;
      state.selectedPost!.comments++;
    },
    incrementBookmarks: (state: PostState, action: PayloadAction<number>) => {
      const post: PostType = getSelectedPostById(state, action.payload);
      post.bookmarks++;
      state.selectedPost!.bookmarks++;
    },
  },
});

export const {
  setSelectedPost,
  incrementLikes,
  incrementComments,
  incrementBookmarks,
} = postSlice.actions;

export const selectPosts = (state: RootState) => state.postReducer.posts;
export const getSelectedPost = (state: RootState) =>
  state.postReducer.selectedPost;

export default postSlice.reducer;
