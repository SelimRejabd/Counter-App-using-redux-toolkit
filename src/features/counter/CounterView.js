import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, deccrement, reset, increaseByAmount } from "./CounterSlice";

export default function CounterView() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <header>Counter</header>
      <div>count: {count}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(deccrement())}>Deccrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(increaseByAmount(2))}>
        IncreaseByTwo
      </button>
    </div>
  );
}
