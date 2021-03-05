// External Components
import React from "react";

// Styling
import "./chatBar.scss";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { faCookieBite } from "@fortawesome/free-solid-svg-icons";

function ChatBar(props) {
  return (
    <div className="chat-bar">
      <div className="chat-bar-header"></div>
      <div className="chat-bar-center"></div>
      <div className="chat-bar-footer">{inputBar()}</div>
    </div>
  );
}

function inputBar(props) {
  return (
    <div className="chat-bar-footer-input-container">
      <form>
        <input placeholder="Type a message ..." />
      </form>
      <button className="chat-bar-footer-input-container-send">
        <FontAwesomeIcon
          icon={faPaperPlane}
          style={{
            width: "17px",
            height: "17px",
          }}
        />
      </button>
      <button className="chat-bar-footer-input-container-more">
        <FontAwesomeIcon
          icon={faPaperclip}
          style={{
            width: "17px",
            height: "17px",
          }}
        />
      </button>
      <button className="chat-bar-footer-input-container-cookie">
        <FontAwesomeIcon
          icon={faCookieBite}
          style={{
            width: "17px",
            height: "17px",
          }}
        />
      </button>
    </div>
  );
}

export default ChatBar;
