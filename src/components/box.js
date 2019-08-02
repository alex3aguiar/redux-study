import React, { Component } from "react";

class Box extends Component {
  state = { left: 0 + "px", top: 0 + "px", isDrag: false };


  componentDidMount() {
    const box = this.props.box;
    this.setState(previousState => ({
      left: box.left + "px",
      top: box.top + "px"
    }));
  }

  handleOnMouseDown = e => {
    e.persist();
    this.setState(previousState => ({ isDrag: true }));
  };
  handleOnMouseUp = e => {
    e.persist();
    this.setState(previousState => ({ isDrag: false }));
  };

  handleOnMouseMove = e => {
    e.persist();
    e.preventDefault();
    if (this.state.isDrag) {
      this.setState(previousState => ({
        left: e.clientX - 50 + "px",
        top: e.clientY - 50 + "px"
      }));
    }
  };

  render() {
    return (
      <div
        onMouseDown={this.handleOnMouseDown}
        onMouseUp={this.handleOnMouseUp}
        onMouseMove={this.handleOnMouseMove}
        className="caixa 0"
        style={{ left: this.state.left, top: this.state.top }}
      >
        {this.props.box.id.toString()}
      </div>
    );
  }
}

export default Box; // Don’t forget to use export default!
