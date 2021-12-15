import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import { auth, provider } from "../firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../Reducer";

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => alert(err.message));
  };

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
        <Button className="login-btn" onClick={signIn}>
          Sign in with Google
        </Button>
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
  text-align: center;
  background-color: white;
  border-radius: 10px;
  img {
    height: 200px;
    object-fit: contain;
    object-position: center;
    border-radius: 20px;
    margin-bottom: 20px;
  }
  & .login-btn {
    margin-top: 20px;
    text-transform: inherit !important;
    background-color: #1a1c1e !important;
    color: white !important;
  }
`;
const LoginText = styled.div``;
export default Login;
