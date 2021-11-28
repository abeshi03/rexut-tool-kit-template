import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import countReducer from "../features/counter/countSlice";
import taskReducer from "../features/task/taskSlice";

export const store = configureStore({
  reducer: {
    count: countReducer,
    task: taskReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
