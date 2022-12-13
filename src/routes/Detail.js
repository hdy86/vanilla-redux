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
const Title = styled.h2`
  font-size: 30px;
  margin: 0 0 30px;
`;
const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 16px;
    margin: 0;
  }
`;

function Detail({ toDos }) {
  const myId = useParams().id;
  const toDo = toDos.find((toDo) => toDo.id === parseInt(myId));

  return (
    <Container>
      <Title>{toDo?.text}</Title>
      <Text>
        <p>{toDo?.date}</p>
        <p>Created at: {toDo?.id}</p>
      </Text>
    </Container>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
