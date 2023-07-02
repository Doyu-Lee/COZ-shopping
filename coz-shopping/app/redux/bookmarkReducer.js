import { createSlice } from "@reduxjs/toolkit";

const initialState = typeof window !== 'undefined' && localStorage.getItem("bookmarkedProducts") ? JSON.parse(localStorage.getItem("bookmarkedProducts")) : null;

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
  bookMarkedProducts.actions; // createSlice로 생성된 actions를 외부에서 호출할 수 있도록 함
export default bookMarkedProducts.reducer; // reducer 또한 export 시켜 store에 리듀서를 등록할 수 있도록 함
