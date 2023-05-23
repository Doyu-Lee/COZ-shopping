import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("bookmarkedProducts"));

export const bookMarkedProducts = createSlice({
  name: "bookMarkReducer",
  initialState,
  reducers: {
    addBookMarkedProducts: (state, action) => {
      const updatedState = [
        ...state,
        { value: action.payload, isBookmarked: true },
      ];
      localStorage.setItem("bookmarkedProducts", JSON.stringify(updatedState));
      return updatedState;
    },
    deleteBookMarkedProduct: (state, action) => {
      const updatedState = state.filter(
        (item) => item.value.id !== action.payload.value.id
      );
      localStorage.setItem("bookmarkedProducts", JSON.stringify(updatedState));
      return updatedState;
    },
  },
});

export const { addBookMarkedProducts, deleteBookMarkedProduct } =
  bookMarkedProducts.actions;
export default bookMarkedProducts.reducer;
