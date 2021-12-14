import React from "react";
import styled from "styled-components";
import ChatIcon from "@mui/icons-material/Chat";
import { Avatar, IconButton } from "@mui/material";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <Avatar />
        <HeaderRight>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </HeaderRight>
      </SidebarHeader>
      <SidebarSearch></SidebarSearch>
      <SidebarChat></SidebarChat>
    </SidebarContainer>
  );
}

//only taking up 35% of space from AppBody, which is taking 65%
const SidebarContainer = styled.div`
  flex: 0.35;
`;
const SidebarHeader = styled.div`
  padding: 20px;
  border-right: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
`;
const SidebarSearch = styled.div``;
const SidebarChat = styled.div``;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 10vw;
`;
export default Sidebar;
