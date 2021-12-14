import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

function SideBarChat({ addNewChat }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter a name for a chat...");

    if (roomName) {
    }
  };

  return !addNewChat ? (
    <SidebarChatContainer>
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <SidebarChatInfo>
        <h2>Room Names</h2>
        <p>Last message...</p>
      </SidebarChatInfo>
    </SidebarChatContainer>
  ) : (
    <NewChat onClick={createChat}>
      <h2>Add New Chat</h2>
    </NewChat>
  );
}
const SidebarChatContainer = styled.div`
  display: flex;
  padding: 20px;
  cursor: pointer;
  border-bottom: 1px solid #f6f6f6;
  &:hover {
    background-color: #ebebeb;
  }
`;
const SidebarChatInfo = styled.div`
  margin-left: 15px;
  h2 {
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

const NewChat = styled.div`
  width: 100%;
  background-color: #1a1c1e;
  h2 {
    font-size: 26px;
    margin-bottom: 8px;
    padding: 10px;
    text-align: left;
    text-align: center;
    color: #fff;
  }
`;

export default SideBarChat;
