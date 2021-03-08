// External Components
import React, { useState } from "react";

// Intenral Components
import Message from "./message/message";

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
  return (
    <div className="chat-bar">
      <Header />
      <div className="chat-bar-center">
        <Message message={"Hey Stephen, what's up?"} user={"Jayden Elliott"} />
        <Message
          message={"Not alot bro, make arcstack great again"}
          user={"Stephen Ma"}
        />
        <Message
          message={"Lol nice, message test platform is getting there"}
          user={"Jayden Elliott"}
        />
        <Message message={"..."} user={"Jayden Elliott"} />
        <Message message={"..."} user={"Jayden Elliott"} />
        <Message message={"..."} user={"Jayden Elliott"} />
        <Message message={"..."} user={"Jayden Elliott"} />
        <Message message={"..."} user={"Jayden Elliott"} />
        <Message message={"..."} user={"Jayden Elliott"} />
        <Message message={"..."} user={"Jayden Elliott"} />
        <Message message={"..."} user={"Jayden Elliott"} />
        <Message message={"..."} user={"Jayden Elliott"} />
        <Message message={"..."} user={"Jayden Elliott"} />
        <Message message={"..."} user={"Jayden Elliott"} />
        <Message message={"..."} user={"Jayden Elliott"} />
      </div>

      <InputBar />
    </div>
  );
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
