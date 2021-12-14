import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

function SideBarChat() {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <SidebarChatContainer>
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <SidebarChatInfo>
        <h2>Room Names</h2>
        <p>Last message...</p>
      </SidebarChatInfo>
    </SidebarChatContainer>
  );
}
const SidebarChatContainer = styled.div``;
const SidebarChatInfo = styled.div``;
export default SideBarChat;
