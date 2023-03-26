import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Note } from "../models/notes.model";

interface ICreateNotesProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({
  notes,
  setNotes,
}) => {
  const [error, setError] = useState<string>("");

  const titleRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const colorRef = useRef<HTMLInputElement | null>(null);

  const submitNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      titleRef.current?.value == "" ||
      textRef.current?.value == "" ||
      colorRef.current?.value == ""
    ) {
      return setError("Both fields must required.");
    } else {
      setError("");
      setNotes([
        ...notes,
        {
          id: notes.length + 1,
          title: (titleRef.current as HTMLInputElement).value,
          text: (textRef.current as HTMLTextAreaElement).value,
          color: (colorRef.current as HTMLInputElement).value,
          date:
            new Date().getDate() +
            "/" +
            new Date().getMonth() +
            "/" +
            new Date().getFullYear(),
        },
      ]);
      (titleRef.current as HTMLInputElement).value = "";
      (textRef.current as HTMLTextAreaElement).value = "";
      (colorRef.current as HTMLInputElement).value = "";
    }
  };

  return (
    <Form onSubmit={(e) => submitNote(e)}>
      <Form.Group className="mb-3" controlId="formNotes">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Note Title"
          className="text-white bg-transparent"
          ref={titleRef}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formNoteText">
        <Form.Label>Note</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          placeholder="Enter Note Text"
          className="text-white bg-transparent"
          ref={textRef}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formColor">
        <Form.Label htmlFor="colorInput">Choose Note Color</Form.Label>
        <Form.Control
          type="color"
          id="colorInput"
          defaultValue="#812c2c"
          ref={colorRef}
        />
      </Form.Group>
      <p className="text-red bg-pink-300">{error}</p>
      <div className="flex jce">
        <Button variant="primary" type="submit">
          Add Note
        </Button>
      </div>
    </Form>
  );
};

export default CreateNotes;
