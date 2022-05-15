import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./slices/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Прибавить
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Отнять
        </button>
    </div>
  );
}

export default App;
