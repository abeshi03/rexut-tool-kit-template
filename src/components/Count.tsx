import React, {memo, VFC} from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {countDown, selectCount, countUp, countReset} from "../features/counter/countSlice";

/* eslint-disable-next-line react/display-name */
export const Count: VFC = memo((props) => {

  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();


  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispatch(countUp(count))}>カウントアップ</button>
      <button onClick={() => dispatch(countDown(count))}>カウントダウン</button>
      <button onClick={() => dispatch(countReset(count))}>リセット</button>
    </>
  );
});
