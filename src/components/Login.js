import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
function Login() {
  const signIn = () => {};
  return (
    <Container>
      <Main>
        <img
          src="https://www.designbombs.com/wp-content/uploads/2017/01/live-chat-apps.jpg"
          alt="Sign in Logo"
        />
        <LoginText>
          <h1>Sign into Chat App</h1>
        </LoginText>
        <Button onClick={signIn}>Sign in with Google</Button>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
`;
const Main = styled.div`
  padding: 100px;
  text-align: centerl
  background-color: white;
  border-radius: 10px;
  img {
      width: 500px;
      height: 400px;
      object-fit: contain;
      object-position: center;
  }
`;
const LoginText = styled.div``;
export default Login;
