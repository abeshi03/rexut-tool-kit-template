import { createSlice } from "@reduxjs/toolkit";
import { SliceCaseReducers} from "@reduxjs/toolkit/src/createSlice";

type initialState = {
  countNumber: number;
}

const initialState: initialState = {
  countNumber: 0
}

export const countSlice = createSlice<initialState, SliceCaseReducers<initialState>, string>({
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
export const selectCount = (state: initialState) => state.countNumber;

export default countSlice.reducer;
