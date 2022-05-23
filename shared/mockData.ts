import type { PostType, Creator } from "./customTypes";

const mockCreator: Creator = { name: "John Doe", image: "" };

export const mockPosts: PostType[] = [
  {
    id: 1,
    creator: mockCreator,
    description:
      "Fusilloni alla norma con pomodoro, melanzane fritte e una pioggia formaggio",
    title: "Pasta alla norma",
    likes: 10,
    comments: 21,
    bookmarks: 20,
    image: "",
  },
  {
    id: 2,
    creator: mockCreator,
    description:
      "Fusilloni alla norma con pomodoro, melanzane fritte e una pioggia formaggio",
    title: "Pasta alla norma",
    likes: 100,
    comments: 53,
    bookmarks: 12,
    image: "",
  },
  {
    id: 3,
    creator: mockCreator,
    description:
      "Fusilloni alla norma con pomodoro, melanzane fritte e una pioggia formaggio",
    title: "Pasta alla norma",
    likes: 13,
    comments: 11,
    bookmarks: 20,
    image: "",
  },
];
