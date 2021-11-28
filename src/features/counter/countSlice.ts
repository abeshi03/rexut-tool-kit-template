import { createSlice } from "@reduxjs/toolkit";
import { SliceCaseReducers } from "@reduxjs/toolkit/src/createSlice";
import { RootState } from "../../app/store";

type CountState = {
  countNumber: number;
}

const initialState: CountState = {
  countNumber: 0
}

export const countSlice = createSlice<CountState, SliceCaseReducers<CountState>, string>({
  name: "count",
  initialState,
  reducers: {
    countUp: (state): void => {
      state.countNumber ++;
    },
    countDown: (state): void => {
      state.countNumber --;
    },
    countReset: (state): void => {
      state.countNumber = 0;
    }
  }
})

export const { countUp, countDown, countReset } = countSlice.actions;

export const selectCount = (state: RootState) => state.count.countNumber;

export default countSlice.reducer;
