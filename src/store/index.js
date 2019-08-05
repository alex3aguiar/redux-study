import { createStore } from "redux";
const INICIAL_STATE = {
  boxes: [
    { id: 1, top: 50, left: 20 },
    { id: 2, top: 100, left: 110 },
    { id: 3, top: 130, left: 200 },
    { id: 4, top: 160, left: 300 },
    { id: 5, top: 190, left: 400 },
    { id: 6, top: 215, left: 500 }
  ],
  connections: [
    {
      id: 0,
      A: 1,
      B: 2
    },
    {
      id: 1,
      A: 1,
      B: 3
    },
    {
      id: 2,
      A: 3,
      B: 4
    },
    {
      id: 3,
      A: 3,
      B: 5
    },
    {
      id: 4,
      A: 3,
      B: 6
    },
    {
      id: 5,
      A: 4,
      B: 4
    },

  ],
  mouseMoving: false,
  mouseDown: false,
  circleClicked: null
};
function reducer(state = INICIAL_STATE, action) {
  switch (action.type) {
    case "ADD_NODE":
      return {
        ...state,
        boxes: [...state.boxes, action.node],
        connections: state.connections,
        mouseMoving: false,
        mouseDown: state.mouseDown,
        circleClicked: state.circleClicked
      };

    case "ADD_CONNECTION":
      return {
        ...state,
        connections: [...state.connections, action.connection],
        boxes: state.boxes,
        mouseMoving: false,
        mouseDown: state.mouseDown,
        circleClicked: state.circleClicked
      };
    case "MOUSE_MOVE":
      console.log(state.mouseDown);

      if (!state.mouseDown) {
        return state;
      }
      debugger;
      const newBoxesstate = state.boxes.filter(box => {
        return box.id !== state.circleClicked;
      });
      newBoxesstate.push({
        id: state.circleClicked,
        top: action.mousePosition.pageY,
        left: action.mousePosition.pageX
      });
      return {
        ...state,
        connections: state.connections,
        boxes: newBoxesstate,
        mouseMoving: true,
        mouseDown: state.mouseDown,
        circleClicked: state.circleClicked
      };
    case "MOUSE_DOWN":
    case "MOUSE_UP":
      return {
        ...state,
        connections: state.connections,
        boxes: state.boxes,
        mouseMoving: state.mouseMoving,
        mouseDown: action.mouseDown,
        circleClicked: action.circleClicked
      };
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
