import React from "react";
import "./statusBar.scss";

function StatusBar(props) {
  return (
    <div className="status-bar">
      <div className="status-bar-header"></div>
      <div className="status-bar-content"></div>
      <div className="status-bar-footer"></div>
    </div>
  );
}

export default StatusBar;
