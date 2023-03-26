import * as React from "react";
import { Badge, Button, Card } from "react-bootstrap";
import { Note } from "../models/notes.model";
import { FaBeer } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

interface INotesProps {
  note: Note;
  handleDelete: Function;
}

const Notes: React.FunctionComponent<INotesProps> = ({
  note,
  handleDelete,
}) => {
  return (
    <Card
      style={{
        width: "300px",
        backgroundColor: "#1e1e1e",
        border: "1px solid #585858",
        marginBottom: "10px",
      }}
    >
      <Card.Body>
        <div className="w-full flex jcsb">
          <Card.Title>{note.title}</Card.Title>
          <div
            className=""
            style={{
              width: "3rem",
              height: "3rem",
              backgroundColor: note.color,
              borderRadius: "50%",
              margin: "-8px -8px 0 0",
            }}
          ></div>
        </div>
        <Badge bg="warning" text="dark" className="mb-2">
          ID: {note.id}
        </Badge>
        <Card.Text>{note.text}</Card.Text>
        <div className="w-full flex jcsb">
          <Card.Subtitle className="text-muted" style={{ fontSize: "10px" }}>
            Date: {note.date}
          </Card.Subtitle>
          <AiFillDelete
            onClick={() => handleDelete(note.id)}
            className="delete-icon"
            style={{
              color: "#cd3333",
              fontSize: "40px",
              cursor: "pointer",
              borderRadius: "20px",
              padding: "10px",
            }}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default Notes;
