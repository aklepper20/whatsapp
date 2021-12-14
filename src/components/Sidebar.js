import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ChatIcon from "@mui/icons-material/Chat";
import { Avatar, IconButton } from "@mui/material";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import SideBarChat from "./SideBarChat";
import db from "../firebase";

function Sidebar() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);
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

      <SidebarSearch>
        <SearchContainer>
          <SearchIcon
            style={{ marginTop: "5px", color: "gray", padding: "2px" }}
          />
          <SearchInput
            type="text"
            placeholder="Search or start a new chat..."
          ></SearchInput>
        </SearchContainer>
      </SidebarSearch>

      <SidebarChat>
        <SideBarChat addNewChat />
        {rooms.map((room) => (
          <SideBarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </SidebarChat>
    </SidebarContainer>
  );
}

//only taking up 35% of space from AppBody, which is taking 65%
const SidebarContainer = styled.div`
  flex: 0.35;
  display: flex;
  flex-direction: column;
`;
const SidebarHeader = styled.div`
  padding: 20px;
  border-right: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
`;
const SidebarSearch = styled.div`
  display: flex;
  align-items: center;
  background-color: #f6f6f6;
  height: 40px;
  padding: 25px;
`;
const SearchContainer = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  height: 35px;
  border-radius: 20px;
`;
const SearchInput = styled.input`
  width: 190px;
  border: none;
  margin-left: 5px;
  border-radius: 20px;
`;
//telling chat to take up remaining space in the column flex within the component
const SidebarChat = styled.div`
  flex: 1;
  overflow: scroll;
  background-color: white;
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 10vw;
`;

export default Sidebar;
