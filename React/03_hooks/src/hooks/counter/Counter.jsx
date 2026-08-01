import { useState } from "react";

function Counter() {

  const [counter, setCounter] = useState(0)

  function increaseCounter(){
    if(counter >= 10){
        alert('Cannot graeter than 10')
        return
    }
    setCounter(counter + 1)
  }

  function decreaseCounter(){
    if(counter === 0){
        alert('Cannot be negative')
        return
    }
    setCounter(counter - 1)
  }

  return (
    <>
      Number: {counter}
      <button onClick={increaseCounter}>+</button>
      <button onClick={decreaseCounter}>-</button>
    </>
  );
}

export default Counter;
