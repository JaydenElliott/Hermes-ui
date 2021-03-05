// External Components
import React from "react";

// Styling
import "./chatBar.scss";

function ChatBar(props) {
  return (
    <div className="chat-bar">
      <div className="chat-bar-header"></div>
      <div className="chat-bar-center"></div>
      <div className="chat-bar-footer">
        <div className="chat-bar-footer-input-container"></div>
      </div>
    </div>
  );
}

export default ChatBar;
