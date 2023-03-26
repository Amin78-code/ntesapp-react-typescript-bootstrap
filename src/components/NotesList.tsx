import * as React from "react";
import { Note } from "../models/notes.model";
import Notes from "./Notes";

interface INotesListProps {
  notes: Note[];
  setNotes: any;
}

const NotesList: React.FunctionComponent<INotesListProps> = ({
  notes,
  setNotes,
}) => {
  const handleDelete = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  return (
    <div className="flex jcs flex-wrap  " style={{ columnGap: 10 }}>
      {notes.map((note) => {
        return <Notes key={note.id} note={note} handleDelete={handleDelete} />;
      })}
    </div>
  );
};

export default NotesList;
