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
    countUp: (state, action): void => {
      state.countNumber ++;
    },
    countDown: (state, action): void => {
      state.countNumber --;
    },
    countReset: (state, action): void => {
      state.countNumber = 0;
    }
  }
})


export const selectCount = (state: RootState) => state.count.countNumber;

export default countSlice.reducer;
