import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import db from "../firebase";

function SideBarChat({ addNewChat, id, name }) {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter a name for a chat...");

    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <SidebarChatContainer>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <SidebarChatInfo>
          <h2>{name}</h2>
          <p>{messages[0]?.messages}</p>
        </SidebarChatInfo>
      </SidebarChatContainer>
    </Link>
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
