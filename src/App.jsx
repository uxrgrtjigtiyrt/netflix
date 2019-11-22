import React from "react";
import Main from "./pages/Main";
import Tv from "./pages/Tv";
import {BrowserRouter as Router, Route} from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  a{
    text-decoration:none;
    color:white;
  }

  body {
    background-color: black;
  }
`;

function App() {
  return (
    <>
    <header>
      <GlobalStyle />
      <Router>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/tv" exact>
          <Tv />
        </Route>
      </Router>
      </header>
    </>
  );
}

export default App;
