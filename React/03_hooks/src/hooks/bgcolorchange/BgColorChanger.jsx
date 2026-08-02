import { useState } from "react";

function BgColorChanger() {
  const [color, setColor] = useState("#212121");

  const colors = [
    {
        colorName: "Red",
        bgColor: "red",
    },
    {
      colorName: "Blue",
      bgColor: "blue",
    },
    {
      colorName: "Green",
      bgColor: "green",
    },
    {
      colorName: "Yellow",
      bgColor: "yellow",
    },
    {
      colorName: "Pink",
      bgColor: "pink",
    },
    {
      colorName: "Purple",
      bgColor: "purple",
    },
  ];

  const colorHandler = (bgColor) => {
    setColor(bgColor)
  }

  return (
    <>
      <div style={{backgroundColor: color}} className="border p-4 rounded-full bg-zinc-900 flex justify-between top-32">
        {colors.map(({ colorName, bgColor }) => (
          <div
            className={`bg-${bgColor}-700 px-4 py-1 rounded-full cursor-pointer`}
          >
            <button key={bgColor} onClick={() => colorHandler(bgColor)}>{colorName}</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default BgColorChanger;
