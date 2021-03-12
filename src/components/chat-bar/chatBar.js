// External Components
import React, { useState, useEffect, useContext } from "react";

// Intenral Components
import Message from "./message/message";
import { UserContext } from "../../context/userContext";

// Styling
import "./chatBar.scss";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { faCookieBite } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function ChatBar(props) {
  const userInfo = useContext(UserContext);
  useEffect(() => {
    messageScrollToBottom();
  }, []);
  return (
    <div className="chat-bar">
      <Header />
      <div className="chat-bar-center" id="chat-bar-center">
        {console.log("chatbar", userInfo)}
        <Message message={"asdfasdfasdfas"} user={userInfo.username} />
        <Message message={"..."} user={userInfo.username} />
        <Message message={"..."} user={userInfo.username} />
        <Message message={"..."} user={userInfo.username} />
        <Message message={"..."} user={userInfo.username} />
        <Message message={"..."} user={userInfo.username} />
        <Message message={"..."} user={userInfo.username} />
      </div>

      <InputBar />
    </div>
  );
}

/* Utility function to scroll the message to bottom on page load */
function messageScrollToBottom() {
  var messageBody = document.getElementById("chat-bar-center");
  console.log(messageBody);
  messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
}

function Header(props) {
  const [searchOpen, toggleSearchOpen] = useState(false);

  function openCloseSearch() {
    !searchOpen
      ? (document.getElementById("chat-bar-header-search").style.width = "60%")
      : (document.getElementById("chat-bar-header-search").style.width = "0px");

    toggleSearchOpen(!searchOpen);
  }

  return (
    <div className="chat-bar-header">
      <button
        className="chat-bar-header-search-button"
        onClick={openCloseSearch}
      >
        <FontAwesomeIcon
          icon={faSearch}
          style={{
            width: "18px",
            height: "18px",
          }}
        />
      </button>
      <div className="chat-bar-header-search" id="chat-bar-header-search">
        <form>
          <input placeholder="Search ..." />
        </form>
      </div>
      <button className="chat-bar-header-call">
        <FontAwesomeIcon
          icon={faPhone}
          style={{
            width: "18px",
            height: "18px",
          }}
        />
      </button>
      <button className="chat-bar-header-video">
        <FontAwesomeIcon
          icon={faVideo}
          style={{
            width: "20px",
            height: "20px",
          }}
        />
      </button>
    </div>
  );
}

function InputBar(props) {
  return (
    <div className="chat-bar-footer">
      <div className="chat-bar-footer-input-container">
        <form>
          <input placeholder="Type a message ..." />
        </form>
        <button className="chat-bar-footer-input-container-more">
          <FontAwesomeIcon
            icon={faPaperclip}
            style={{
              width: "17px",
              height: "17px",
            }}
          />
        </button>
      </div>
    </div>
  );
}

export default ChatBar;
