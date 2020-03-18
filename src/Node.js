import React from "react";

const Node = props => {
  return (
    <div className="node">
      <div
        className="plusWrap"
        onClick={() => props.onRemoveChildren()}
      >
        <div className="plus">-</div>
      </div>
      <div className="plusWrap" onClick={() => props.onAddChildren()}>
        <div className="plus">+</div>
      </div>
    </div>
  );
};

export default Node;
