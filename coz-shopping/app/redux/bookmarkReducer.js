import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialProducts = [];

export const bookMarkedProducts = createSlice({
  name: "bookMarkReducer",
  initialState: initialProducts,
  reducers: {
    addBookMarkedProducts: (state, action) => {
      const updatedState = [...state, action.payload];
      localStorage.setItem("bookmarkedProducts", JSON.stringify(updatedState));
      // console.log(updatedState)
      return updatedState;
    },
    deleteBookMarkedProduct: (state, action) => {
      const updatedState = state.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("bookmarkedProducts", JSON.stringify(updatedState));
      // console.log(updatedState)
      return updatedState;
    },
  },
});

const localStorageData = localStorage.getItem("bookmarkedProducts");
const initialState = localStorageData ? JSON.parse(localStorageData) : [];

export const bookMarkStore = configureStore({
  reducer: bookMarkedProducts.reducer,
  preloadedState: initialState,
});

export const { addBookMarkedProducts, deleteBookMarkedProduct } = bookMarkedProducts.actions;
export default bookMarkedProducts.reducer;
