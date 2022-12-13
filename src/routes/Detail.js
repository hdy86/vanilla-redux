import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
  background: #fff;
  box-sizing: border-box;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.2);

  @media all and (max-width: 767px) {
    padding: 30px 20px;
  }
`;

function Detail({ toDos }) {
  const myId = useParams().id;
  const toDo = toDos.find((toDo) => toDo.id === parseInt(myId));

  return (
    <Container>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </Container>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
