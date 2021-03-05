// External Components
import React from "react";

// Internal Components
import ChatBar from "./chat-bar/chatBar";
import ChatChoiceBar from "./chat-choice-bar/chatChoiceBar";
import RoomChoiceBar from "./room-choice-bar/roomChoiceBar";
import StatusBar from "./status-bar/statusBar";

// Styling
import "./homePage.scss";

function HomePage(props) {
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
