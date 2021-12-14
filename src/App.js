import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  return (
    <Container>
      {!user ? (
        <Login />
      ) : (
        <AppBody>
          <Router>
            <Sidebar />
            <Routes>
              <Route path="/rooms/:roomId" element={<Chat />} />
              <Route path="/" element={<Chat />} />
            </Routes>
          </Router>
        </AppBody>
      )}
    </Container>
  );
}

const Container = styled.div`
  background-color: #dadbd3;
  height: 100vh;
  //places appbody in center
  display: grid;
  place-items: center;
`;

const AppBody = styled.div`
  display: flex;
  height: 90vh;
  width: 90vw;
  margin-top: -50px;
  background-color: #ededed;
`;
export default App;
