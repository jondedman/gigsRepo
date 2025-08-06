
import { useState } from "react";
import CounterButton from "./counterButton"
import CounterDisplay from "./counterDisplay";

const Counter = () =>{
const [count, setCount] = useState(0);

  return (
    <div>
      <CounterDisplay count={count}/>
      <CounterButton setCount={setCount} count={count} />
    </div>
  );
}

export default Counter;