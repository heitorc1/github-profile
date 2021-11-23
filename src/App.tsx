import React from "react";

import styled from "styled-components";
import Profile from "./pages/Profile";

import "./App.css";
import GlobalContext from "./context";
import theme from "./assets/theme";

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
  background-color: ${theme.colors.secondary.light};
  color: ${theme.colors.primary.text};

  min-height: 100vh;
`;

export default App;
