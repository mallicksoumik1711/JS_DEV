import { useState } from "react";

function ChangeColor() {
  const [color, setColor] = useState("#212121");

  const hex = "0123456789ABCDEF";

  const generteRandomColor = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const changeColorHandler = () => {
    setColor(generteRandomColor());
  };

  return (
    <>
      <div style={{backgroundColor: color}}>
        <h1>Generate Random color in 1 click = {color}</h1>
        <button onClick={changeColorHandler}>Generate color</button>
      </div>
    </>
  );
}

export default ChangeColor;
