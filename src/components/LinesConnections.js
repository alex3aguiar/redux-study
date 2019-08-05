import React from "react";

// import { Container } from './styles';

export default function LineConnections({ connections, boxes }) {
  return connections.map(connection => {
    const boxA = boxes.find(box => {
      return box.id === connection.A;
    });

    const boxB = boxes.find(box => {
      return box.id === connection.B;
    });

    return (
      <line
        key={connection.id}
        x1={boxA.left}
        y1={boxA.top}
        x2={boxB.left}
        y2={boxB.top}
        stroke="black"
      />
    );
  });
}
