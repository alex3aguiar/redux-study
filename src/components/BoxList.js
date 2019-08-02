import React, {Component} from "react";
import Box from "./box.js";
import { connect } from "react-redux";


function addNode() {
  return {
    type: "addNode"
  };
}
var boxes = []
class BoxList extends Component {

    constructor(props) {
        debugger
        super(props);
        const { dispatch } = props;
        this.boundActions = bindActionCreators(actions, dispatch);
        }

    render() {
      return (
        <div>
        <button >
          addNode {boxes.length}
        </button>
  
        {boxes.map(box => (
          <Box key={box.id} box={box} />
        ))}
    </div>
      );
    }
  }






export default connect(state => ({ boxes: state }))(BoxList);








