import React from "react";
import Box from "./box.js";
import { useSelector, useDispatch } from "react-redux";
import LineConnections from "./LinesConnections";

export default function BoxList() {
  const { boxes, connections } = useSelector(state => {
    return state;
  });
  const dispatch = useDispatch();
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  };
  const addNode = () => {
    const { width, height } = getWindowDimensions();
    dispatch({
      type: "ADD_NODE",
      node: {
        id: boxes.length + 1,
        top: Math.floor(Math.random() * height),
        left: Math.floor(Math.random() * width)
      }
    });
  };

  const addConnection = () => {
    dispatch({
      type: "ADD_CONNECTION",
      connection: {
        id: connections.length + 1,
        A: 1,
        B: 2
      }
    });
  };

  const handleOnMouseDown = e => {
    const targetId = e.target.dataset.circleid;
    dispatch({
      type: "MOUSE_DOWN",
      mouseDown: true,
      circleClicked: parseInt(targetId)
    });
  };
  const handleOnMouseUp = e => {
    dispatch({
      type: "MOUSE_DOWN",
      mouseDown: false
    });
  };

  const handleOnMouseMove = e => {
    const pageX = e.pageX;
    const pageY = e.pageY;
    dispatch({
      type: "MOUSE_MOVE",
      mouseMoving: true,
      mousePosition: { pageX, pageY }
    });
  };

  const { width, height } = getWindowDimensions();
  return (
    <div>
      <button onClick={addNode}>addNode {boxes.length}</button>
      <button onClick={addConnection}>
        addConnection {connections.length}
      </button>
      <svg
        className="connection"
        width={width}
        height={height}
        onMouseDown={handleOnMouseDown}
      >
        {boxes.map(box => (
          <Box
            onMouseUp={handleOnMouseUp}
            onMouseMove={handleOnMouseMove}
            key={box.id}
            box={box}
          />
        ))}
        <LineConnections connections={connections} boxes={boxes} />
      </svg>

      <ul>
        {connections.map(connection => (
          <li className="connection" key={connection.id}>
            {connection.A} => {connection.B}
          </li>
        ))}
      </ul>
    </div>
  );
}
