import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { remove } from "../store";

const Li = styled.li`
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom: 2px solid #eee;
`;
const Text = styled.div`
  flex: 1;
  padding-right: 10px;

  a {
    text-decoration: none;
    font-size: 16px;
    color: #222;
  }
`;
const Btn = styled.div`
  button {
    padding: 5px 10px;
    border: 2px solid #666;
    background: transparent;
    color: #666;
    font-weight: bold;
    cursor: pointer;
  }
`;

function ToDo({ text, onBtnClick, id }) {
  return (
    <Li>
      <Text>
        <Link to={`/${id}`}>{text}</Link>
      </Text>
      <Btn>
        <button onClick={onBtnClick}>DEL</button>
      </Btn>
    </Li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(remove(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
