import { SearchOutlined } from "@mui/icons-material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import styled from "styled-components";
import db from "../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

function Chat() {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [roomName, setRoomName] = useState("");
  const { roomId } = useParams();
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [roomName]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));

      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("rooms").doc(roomId).collection("messages").add({
      message: input,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <ChatContainer>
      <ChatHeader>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <ChatHeaderInfo>
          <h3>{roomName}</h3>
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
        {messages.map((message) => (
          <ChatMessage
            //production use message.id === user.id, multiple ppl can have the same name
            className={`${
              message.name === user.displayName && "chat-reciever"
            }`}
          >
            <ChatName>{message.name}</ChatName>
            <Message> {message.message}</Message>
          </ChatMessage>
        ))}
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
`;

const ChatMessage = styled.div`
  position: relative;
  display: flex;
  font-size: 16px;
  padding: 7px;
  background-color: #fff;
  border-radius: 10px;
  width: 100px;
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
