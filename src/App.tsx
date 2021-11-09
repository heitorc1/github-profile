import React from "react";

import styled from "styled-components";
import Profile from "./pages/Profile";

import "./App.css";
import GlobalContext from "./context";

const App: React.FC = () => {
  return (
    <GlobalContext>
      <Container>
        <Profile />
      </Container>
    </GlobalContext>
  );
};

const Container = styled.div`
  height: 100vh;
`;

export default App;
