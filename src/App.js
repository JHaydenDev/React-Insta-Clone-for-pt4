import React, { Component } from "react";
import styled from "styled-components";
import Authenticate from "./components/Authentication/Authentication";
import Login from "./components/Authentication/Login";


//styling
const AppContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin: 0 10%;
  justify-content: space-around;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <AppContainer className="App">
        <Login />
      </AppContainer>
    );
  }
}

export default Authenticate(App);