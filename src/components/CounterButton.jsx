import { useState } from "react";

const counterButton = (props) => {

    
      const incrementCounter = () => {
        props.setCount(props.count + 1);
      };
    
        const decrementCounter = () => {
        props.setCount(props.count - 1);
      };
return (
    <>
    <button onClick={incrementCounter}>Increment</button>
    <button onClick={decrementCounter}>Decrement</button>
    </>
)
}

export default counterButton;