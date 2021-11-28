import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { SliceCaseReducers } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import React from "react";

export type Task = {
  id: number;
  title: string;
}

type Tasks = {
  idCount: number;
  tasks: Task[]
}

const initialState: Tasks = {
  idCount: 3,
  tasks: [
    {
      id: 1,
      title: "タスク1"
    },
    {
      id: 2,
      title: "タスク2"
    },{
      id: 3,
      title: "タスク2"
    }
  ]

}

export const TaskSlice = createSlice<Tasks, SliceCaseReducers<Tasks>, string>({
  name: "input",
  initialState,
  reducers: {
    newTask: (state, action: PayloadAction<string>) => {

      state.idCount ++;
      console.log(action.payload)

      const newTask = {
        id: state.idCount,
        title: action.payload
      }

      state.tasks = [...state.tasks, newTask];
    }
  }
})

export const { newTask } = TaskSlice.actions;

export const selectTasks = (state: RootState) => state.task;

export default TaskSlice.reducer;
