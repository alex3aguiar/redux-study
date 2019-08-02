import { createStore } from "redux";
const INICIAL_STATE = [
  { id: 1, top: 0, left: 400 },
  { id: 2, top: 100, left: 500 }
];
function reducer(state = INICIAL_STATE, action) {
  const newNode = { id: state.length + 1, top: 500, left: 500 };
  state.push(newNode);
  console.log(state)
  return state;
}

const store = createStore(reducer);

export default store;
