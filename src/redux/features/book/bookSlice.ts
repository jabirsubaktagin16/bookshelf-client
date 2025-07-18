import { type RootState } from "@/redux/store";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type IBook } from "../../../types/types";

interface InitialState {
  books: IBook[];
}

const initialState: InitialState = {
  books: [],
};

const bookSlice = createSlice({
  name: "book",
  initialState: initialState,
  reducers: {
    setBook: (state, action: PayloadAction<IBook>) => {
      state.books = [];
      state.books.push(action.payload);
    },
  },
});

export const selectBooks = (state: RootState) => {
  return state.shelves.books;
};

export const { setBook } = bookSlice.actions;

export default bookSlice.reducer;
