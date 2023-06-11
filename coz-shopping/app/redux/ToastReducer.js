import { createSlice } from "@reduxjs/toolkit";

const initialState = { notifications: [] };

export const toastReducer = createSlice({
  name: "toastReducer",
  initialState,
  reducers: {
    enqueue: (state, action) => {
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };
    },
    dequeue: (state) => {
      return { ...state, notifications: state.notifications.slice(1) };
    },
  },
});

export const { enqueue, dequeue } = toastReducer.actions;
export default toastReducer.reducer;
