import { SearchOutlined } from "@mui/icons-material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Chat() {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <ChatContainer>
      <ChatHeader>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <ChatHeaderInfo>
          <h3>RoomName</h3>
          <p>Last Seen at ....</p>
        </ChatHeaderInfo>
        <ChatHeaderRight>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </ChatHeaderRight>
      </ChatHeader>
      <ChatBody>
        <span>cody klepper</span>
        <ChatMessage>
          <p> hi aly</p>
        </ChatMessage>
      </ChatBody>
      <ChatFooter></ChatFooter>
    </ChatContainer>
  );
}

const ChatContainer = styled.div`
  flex: 0.65;
  display: flex;
  flex-direction: column;
`;
const ChatHeader = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;
const ChatHeaderInfo = styled.div`
  flex: 1;
  padding-left: 20px;
  h3 {
    margin-bottom: 3px;
    font-weight: 500;
  }
  p {
    color: gray;
  }
`;

const ChatHeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 100px;
`;
const ChatBody = styled.div`
  flex: 1;
  background-repeat: repeat;
  background-position: center;
  padding: 30px;
  overflow: scroll;
  span {
    font-size: xx-small;
    font-weight: bold;
  }
  /* background-image: url() */
`;

const ChatMessage = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  padding: 7px;
  background-color: #fff;
  border-radius: 10px;
  width: fit-content;
  margin-bottom: 30px;
`;
const ChatFooter = styled.div``;

export default Chat;
