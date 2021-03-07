// External Components
import React, { useEffect } from "react";

// Internal React Components
import ChatBar from "./chat-bar/chatBar";
import ChatChoiceBar from "./chat-choice-bar/chatChoiceBar";
import RoomChoiceBar from "./room-choice-bar/roomChoiceBar";
import StatusBar from "./status-bar/statusBar";

// Internal Non-React Components
import WebSocket_ from "../utils/connection/websocket";

// Styling
import "./homePage.scss";

function HomePage(props) {
  useEffect(() => {
    const wsHandler = new WebSocket_();
    wsHandler.connect();
  }, []);
  return (
    <div className="homepage">
      <RoomChoiceBar />
      <ChatChoiceBar />
      <ChatBar />
      <StatusBar />
    </div>
  );
}

export default HomePage;
