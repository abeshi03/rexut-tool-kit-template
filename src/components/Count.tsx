import React, {memo, VFC} from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { selectCount } from "../features/counter/countSlice";

/* eslint-disable-next-line react/display-name */
export const Count: VFC = memo((props) => {

  const count = useAppSelector(selectCount);

  return (
    <div>{count}</div>
  );
});
