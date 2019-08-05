import React from "react";

export default function Box({ box, onMouseDown, onMouseUp, onMouseMove }) {
  return (
    <circle
      data-circleid={box.id}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      cx={box.left}
      cy={box.top}
      r="30"
      stroke="black"
      strokeWidth="3"
      fill="red"
    />
  );
}
