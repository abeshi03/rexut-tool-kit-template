import React, {ChangeEvent, FormEvent, memo, useState, VFC} from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {newTask, selectTasks} from "../features/task/taskSlice";

/* eslint-disable-next-line react/display-name */
const Task: VFC = memo((props) => {

  const [input, setInput] = useState<string>("");

  const state = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {

    setInput(e.target.value);
  }

  const onSubmitNewTask = (e: FormEvent<HTMLFormElement>): void => {

    e.preventDefault();
    dispatch(newTask(input));
  }

  return (
    <>
      <form onSubmit={onSubmitNewTask}>
        <input
          type="text"
          value={input}
          onChange={onChangeInput}
        />
        <button>追加</button>
      </form>
      <p>インプットの文字列{ input }</p>
      {state.tasks.map((task) => (
        <React.Fragment>
          <p>id: {task.id}</p>
          <p>title: {task.title}</p>
          <p>--------------------</p>
        </React.Fragment>
      ))}
      <p>タスク数{state.idCount}</p>
    </>
  );
});

export default Task;
