import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../ComponentsCSS/modalcss.css";

export const AddTaskModal = ({task, show, onClose, onAdd ,onSave}) => {
  const [taskName, setTaskName] = useState("");

  const handleAdd = () => {
    if (!taskName.trim()) return;
    onAdd(taskName);
    setTaskName("");
  };

  const handleReset=()=>
  {
    setTaskName("");
  }
  return (
    <Modal
      show={show}
      onHide={onClose}
      centered
      backdrop="static"
      contentClassName="orange-modal"
    >
      {/* HEADER */}
      <Modal.Header className="orange-header">
        <Modal.Title>
          New Task
          <p className="subtitle">Let’s get things done</p>
        </Modal.Title>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
      </Modal.Header>

      {/* BODY */}
      <Modal.Body className="orange-body">
        <Form.Group>
          <Form.Label className="label-text">What’s your task?</Form.Label>
          <Form.Control
            type="text"
            placeholder="e.g. Learn React hooks"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="orange-input"
            autoFocus
          />
        </Form.Group>
      </Modal.Body>

      {/* FOOTER */}
      <Modal.Footer className="orange-footer">
        <Button className="cancel-btn" onClick={onClose}>
          Cancel
        </Button>
        <Button
          style={{
            background: "linear-gradient(135deg, #dd9013ff, #ffd166)",
            border: "none",
            color: "#3a0ca3",
            fontWeight: "600",
          }}
          onClick={() => onSave(taskName)}
        >
          {task ? "Save Changes" : "Add Task"}
        </Button>
         <Button
         className="danger"
          onClick={() => handleReset()}
        >
          Reset
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
