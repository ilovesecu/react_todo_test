import React, { useState, useRef } from "react";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

interface TodoInserProps {
  onInsert: (subject: string, text: string, writer: string) => void;
}

function TodoInsert({ onInsert }: TodoInserProps) {
  const initialInputs = { subject: "", text: "", writer: "jsj" };
  const formRef = useRef(null);
  const [inputs, setInputs] = useState(initialInputs);
  const { subject, text, writer } = inputs;
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
    onInsert(subject, text, writer);
    setInputs(initialInputs);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const formOnKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    const key = e.key;
    if (key === "Enter") {
      if (formRef.current) {
        const form: HTMLFormElement = formRef.current;
        form.dispatchEvent(new Event("submit", { bubbles: true }));
      }
    }
  };

  return (
    <form onSubmit={onSubmit} onKeyDown={formOnKeyDown} ref={formRef}>
      <Row className="g-2">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="제목을 입력하세요">
            <Form.Control name="subject" type="text" placeholder="제목을 입력하세요" value={subject} onChange={onChange} />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="할 일을 입력하세요">
            <Form.Control name="text" type="text" placeholder="할 일을 입력하세요" value={text} onChange={onChange} />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="작성자">
            <Form.Control name="writer" type="text" placeholder="작성자" value={writer} onChange={onChange} />
          </FloatingLabel>
        </Col>
      </Row>
    </form>
  );
}

export default TodoInsert;
