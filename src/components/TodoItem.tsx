import { Todo } from "@/redux/types/todoInterface";
import React from "react";
import Badge from "react-bootstrap/Badge";
import { ListGroup } from "react-bootstrap";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
  const handleToggle = () => {
    onToggle(todo.id);
  };
  const handleRemove = () => {
    onRemove(todo.id);
  };

  return (
    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold" onClick={handleToggle}>
          {todo.subject}
        </div>
        {todo.text}
      </div>
      <Badge bg="primary" pill onClick={handleRemove}>
        (x)
      </Badge>
    </ListGroup.Item>
  );
}

export default TodoItem;
