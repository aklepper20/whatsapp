import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ChatIcon from "@mui/icons-material/Chat";
import { Avatar, IconButton } from "@mui/material";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import SideBarChat from "./SideBarChat";
import db from "../firebase";
import { useStateValue } from "../StateProvider";

function Sidebar() {
  const [rooms, setRooms] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <SidebarContainer>
      <SidebarHeader>
        <Avatar src={user?.photoURL} />
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
