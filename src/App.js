import styled from "styled-components";

function App() {
  return (
    <Container>
      <AppBody></AppBody>
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
