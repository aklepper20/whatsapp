import { SearchOutlined } from "@mui/icons-material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Chat() {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    setInput("");
  };

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
        <ChatMessage className={`${true && "chat-reciever"}`}>
          <ChatName>cody klepper:</ChatName>
          <Message> hi aly</Message>
          <TimeStamp>3:15pm</TimeStamp>
        </ChatMessage>
      </ChatBody>
      <ChatFooter>
        <InsertEmoticonIcon style={{ color: "gray" }} />
        <MessageForm>
          <MessageInput
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message..."
          ></MessageInput>
          <MessageSubmitBtn type="submit" onClick={sendMessage}>
            SEND
          </MessageSubmitBtn>
        </MessageForm>
        <MicIcon style={{ color: "gray" }} />
      </ChatFooter>
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
  /* background-image: url() */
`;

const ChatMessage = styled.div`
  position: relative;
  display: flex;
  font-size: 16px;
  padding: 7px;
  background-color: #fff;
  border-radius: 10px;
  width: fit-content;
  margin-bottom: 30px;

  &.chat-reciever {
    margin-left: auto;
    background-color: #dcf8c6;
  }
`;

const ChatName = styled.span`
  position: absolute;
  top: -15px;
  font-size: xx-small;
  font-weight: bold;
`;

const TimeStamp = styled.p`
  margin-left: 10px;
  margin-top: 4px;
  font-size: xx-small;
`;

const Message = styled.p``;
const ChatFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  border-top: 1px solid lightgray;
`;

//take up all space with flex 1
const MessageForm = styled.form`
  flex: 1;
  display: flex;
`;
//now we can stretch the input to take up all that space
const MessageInput = styled.input`
  flex: 1;
  border-radius: 30px;
  padding: 10px;
  border: none;
`;
const MessageSubmitBtn = styled.button`
  display: none;
`;

export default Chat;
