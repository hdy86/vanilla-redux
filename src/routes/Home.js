import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { add } from "../store";
import ToDo from "../components/ToDo";

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
  font-size: 36px;
  margin: 0;
`;
const Form = styled.form`
  display: flex;
  margin: 30px 0;

  @media all and (max-width: 767px) {
    margin: 20px 0;
  }
`;
const Input = styled.input`
  flex: 1;
  padding: 15px;
  border: 3px solid #666;
  border-right: 0;
  font-size: 16px;

  @media all and (max-width: 767px) {
    padding: 10px;
  }
`;
const Button = styled.button`
  padding: 15px;
  border: 0;
  background: #666;
  font-size: 16px;
  color: #fff;
  font-weight: bold;

  @media all and (max-width: 767px) {
    padding: 10px;
  }
`;
const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    setText("");
    addToDo(text);
  }

  return (
    <Container>
      <Title>To Do List</Title>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="할 일을 입력하세요."
          value={text}
          onChange={onChange}
        />
        <Button>Add</Button>
      </Form>
      <Ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </Ul>
    </Container>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}
function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(add(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
