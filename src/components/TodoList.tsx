import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/reducers/store";
import { TodoState } from "@/redux/types/todoInterface";
import ListGroup from "react-bootstrap/ListGroup";
import TodoItem from "./TodoItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface TodoListProps {
  todos: TodoState;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

function TodoList({ todos, onToggle, onRemove }: TodoListProps) {
  return (
    <Container>
      <Row>
        <Col>
          <ListGroup as="ul">
            {todos.map((todo) => (todo.done === false ? <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} /> : null))}
          </ListGroup>
        </Col>
        <Col>
          <ListGroup as="ul">
            {todos.map((todo) => (todo.done === true ? <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} /> : null))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default TodoList;
