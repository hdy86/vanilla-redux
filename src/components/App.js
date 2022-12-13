import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 100px 20px;
  background: #eee;
  box-sizing: border-box;
`;

function App() {
  return (
    <Wrapper>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/:id" element={<Detail />}></Route>
        </Routes>
      </Router>
    </Wrapper>
  );
}

export default App;
