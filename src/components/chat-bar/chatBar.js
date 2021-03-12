// External Components
import React, { useState, useEffect, useContext } from "react";

// Intenral Components
import Message from "./message/message";
import { UserContext } from "../../context/userContext";

// Styling
import "./chatBar.scss";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip,faPhone, faVideo, faSearch } from "@fortawesome/free-solid-svg-icons"; // prettier-ignore

function ChatBar(props) {
  const userInfo = useContext(UserContext);
  useEffect(() => {
    console.log("hi");
    messageScrollToBottom();
  });
  return (
    <div className="chat-bar">
      <Header />

      <div className="chat-bar-center" id="chat-bar-center">
        {userInfo.messages.state.map((msg) => {
          return <Message message={msg} user={userInfo.username.state} />;
        })}
      </div>
      <InputBar />
    </div>
  );
}

/* Utility function to scroll the message to bottom on page load */
function messageScrollToBottom() {
  var messageBody = document.getElementById("chat-bar-center");
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

function InputBar() {
  const [msg, setMsg] = useState("");
  const userInfo = useContext(UserContext);
  const sendMessage = (e) => {
    e.preventDefault();
    let newMsgs = [...userInfo.messages.state, msg];
    userInfo.messages.func(newMsgs);
    setMsg("");
  };
  return (
    <div className="chat-bar-footer">
      <div className="chat-bar-footer-input-container">
        <form onSubmit={sendMessage}>
          <input
            placeholder="Type a message ..."
            value={msg}
            onChange={(e) => {
              setMsg(e.currentTarget.value);
            }}
          />
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
