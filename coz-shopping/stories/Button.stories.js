"use client";
import { Button as Star } from "./Button";
import { Provider } from "react-redux";
import { store } from "../app/redux/store";
export default {
  title: "Atom/Star",
  component: Star,
  tags: ["autodocs"],

  argTypes: {
    onClick: { action: "clicked" },
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <div
          style={{
            width: "30em",
            height: "20em",
            margin: "auto",
            position: "relative",
            borderRadius: "20px",
            border: "1px solid lightgray",
          }}
        >
          <Story />
        </div>
      </Provider>
    ),
  ],
};

export const BookmarkOn = {
  args: {
    isBookmarked: true,
    onClick: { action: "click button" },
  },
};

export const BookmarkOff = {
  args: {
    isBookmarked: false,
  },
};
