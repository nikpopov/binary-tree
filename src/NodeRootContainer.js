import React, { Component, Fragment } from "react";
import NodeContainer from "./NodeContainer";
import Node from "./Node";

class NodeRootContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasLeftChild: false,
      hasRightChild: false,
      clearAll: false
    };
  }

  onAddChildren = e => {
    this.setState({
      clearAll: false
    });
    this.onAddLeftChild();
    this.onAddRightChild();
  };

  onAddLeftChild = () => {
    this.setState({
      hasLeftChild: true
    });
  };

  onAddRightChild = () => {
    this.setState({
      hasRightChild: true
    });
  };

  onRemoveChildren = () => {
    this.setState({
      clearAll: true
    });
    this.onRemoveLeftChild();
    this.onRemoveRightChild();
  };

  onRemoveLeftChild = () => {
    this.setState({
      hasLeftChild: false
    });
  };

  onRemoveRightChild = () => {
    this.setState({
      hasRightChild: false
    });
  };

  render() {
    return (
      <Fragment>
        <div>
          <Node
            type="root"
            onAddChildren={this.onAddChildren}
            onRemoveChildren={this.onRemoveChildren}
          />
        </div>
        <div>
          <NodeContainer
            clearAll={this.state.clearAll}
            hasLeftChild={this.state.hasLeftChild}
            hasRightChild={this.state.hasRightChild}
          />
        </div>
      </Fragment>
    );
  }
}

export default NodeRootContainer;
