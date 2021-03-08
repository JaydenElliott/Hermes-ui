// External Imports
import React from "react";

// Styling
import "./message.scss";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

function Message(props) {
  return (
    <div className="ui-message">
      <div className="ui-message-avatar">
        <FontAwesomeIcon
          icon={faUserCircle}
          style={{
            width: "35px",
            height: "35px",
          }}
        />
      </div>
      <div className="ui-message-content">
        <div className="ui-message-content-title-date">
          <div className="ui-message-content-title-date-name">{props.user}</div>
          <div className="ui-message-content-title-date-date">8/03/2021</div>
        </div>
        <div className="ui-message-content-content">{props.message}</div>
      </div>
    </div>
  );
}

export default Message;
