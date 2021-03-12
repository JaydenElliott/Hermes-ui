// External Components
import React, { useEffect, useState } from "react";

// Internal React Components
import ChatBar from "./chat-bar/chatBar";
import ChatChoiceBar from "./chat-choice-bar/chatChoiceBar";
import RoomChoiceBar from "./room-choice-bar/roomChoiceBar";
import StatusBar from "./status-bar/statusBar";
import { UserContext } from "../context/userContext";

// Internal Non-React Components
import WebSocket_ from "../utils/connection/websocket";

// Styling
import "./homePage.scss";

function HomePage(props) {
  const [username, setUsername] = useState("Testing");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const wsHandler = new WebSocket_();
    wsHandler.connect();
  }, []);
  return (
    <UserContext.Provider
      value={{
        username: { state: username, func: setUsername },
        messages: { state: messages, func: setMessages },
      }}
    >
      <div className="homepage">
        <RoomChoiceBar />
        <ChatChoiceBar />
        <ChatBar />
        <StatusBar />
      </div>
    </UserContext.Provider>
  );
}

export default HomePage;
