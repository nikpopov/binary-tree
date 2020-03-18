import React, { Component, Fragment } from "react";
import Node from "./Node";

class NodeContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      hasLeftBranchLeftChild: false,
      hasLeftBranchRightChild: false,
      hasRightBranchLeftChild: false,
      hasRightBranchRightChild: false,
      clearAllLeftChildren: false,
      clearAllRightChildren: false
    };
  }

  componentDidMount() {
    if (this.props.clearAll) {
      this.setState({
        hasLeftBranchLeftChild: false,
        hasLeftBranchRightChild: false,
        hasRightBranchLeftChild: false,
        hasRightBranchRightChild: false
      });
    }
    if (this.props.clearAllLeftChildren) {
      this.setState({
        hasLeftBranchLeftChild: false,
        hasLeftBranchRightChild: false
      });
    }
    if (this.props.clearAllRightChildren) {
      this.setState({
        hasRightBranchLeftChild: false,
        hasRightBranchRightChild: false
      });
    }
  }

  onAddLeftBranchChildren = e => {
    this.setState({
      clearAllLeftChildren: false
    });
    this.onAddLeftBranchLeftChild();
    this.onAddLeftBranchRightChild();
  };

  onAddLeftBranchLeftChild = () => {
    this.setState({
      hasLeftBranchLeftChild: true
    });
  };

  onAddLeftBranchRightChild = () => {
    this.setState({
      hasLeftBranchRightChild: true
    });
  };

  onAddRightBranchChildren = e => {
    this.setState({
      clearAllRightChildren: false
    });
    this.onAddRightBranchLeftChild();
    this.onAddRightBranchRightChild();
  };

  onAddRightBranchLeftChild = () => {
    this.setState({
      hasRightBranchLeftChild: true
    });
  };

  onAddRightBranchRightChild = () => {
    this.setState({
      hasRightBranchRightChild: true
    });
  };
  onRemoveLeftBranchChildren = type => {
    this.setState({
      clearAllLeftChildren: true
    });
    this.onRemoveLeftBranchLeftChild();
    this.onRemoveLeftBranchRightChild();
  };

  onRemoveLeftBranchLeftChild = () => {
    this.setState({
      hasLeftBranchLeftChild: false
    });
  };

  onRemoveLeftBranchRightChild = () => {
    this.setState({
      hasLeftBranchRightChild: false
    });
  };

  onRemoveRightBranchChildren = () => {
    this.setState({
      clearAllRightChildren: true
    });
    this.onRemoveRightBranchLeftChild();
    this.onRemoveRightBranchRightChild();
  };

  onRemoveRightBranchLeftChild = () => {
    this.setState({
      hasRightBranchLeftChild: false
    });
  };

  onRemoveRightBranchRightChild = () => {
    this.setState({
      hasRightBranchRightChild: false
    });
  };

  render() {
    return (
      <div className="outer">
        <div className="inner">
          {this.props.hasLeftChild ? (
            <Fragment>
              <Node
                type="leftChild"
                onAddChildren={this.onAddLeftBranchChildren}
                onRemoveChildren={this.onRemoveLeftBranchChildren}
              />
              <NodeContainer
                hasLeftChild={this.state.hasLeftBranchLeftChild}
                hasRightChild={this.state.hasLeftBranchRightChild}
              />
            </Fragment>
          ) : null}
        </div>
        <div className="inner">
          {this.props.hasRightChild ? (
            <Fragment>
              <Node
                type="rightChild"
                onAddChildren={this.onAddRightBranchChildren}
                onRemoveChildren={this.onRemoveRightBranchChildren}
              />
              <NodeContainer
                hasLeftChild={this.state.hasRightBranchLeftChild}
                hasRightChild={this.state.hasRightBranchRightChild}
              />
            </Fragment>
          ) : null}
        </div>
      </div>
    );
  }
}

export default NodeContainer;
