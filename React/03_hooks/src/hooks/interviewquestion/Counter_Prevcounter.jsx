import { useState } from "react";

function CounterPrevcounter() {
  const [counter, setCounter] = useState(0);
// here the setState i.e. setCounter takes a callback.
// we dont need to write that but when to write
// if there's multiple state calls needed  

  const addEventHandler = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // this won't increase the value multiple times. we would need the callback

    setCounter((prevCounter)=>{
        prevCounter = prevCounter + 1
        return prevCounter
    })
    setCounter((prevCounter)=>{
        prevCounter = prevCounter + 1
        return prevCounter
    })
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
  };

  const removeEventHandler = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      counter: {counter}
      <button onClick={addEventHandler}>Add</button>
      <button onClick={removeEventHandler}>Remove</button>
    </>
  );
}

export default CounterPrevcounter
