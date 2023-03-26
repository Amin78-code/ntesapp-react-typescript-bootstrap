import React, { useState } from "react";
import logo from "./logo.svg";
import { Card } from "react-bootstrap";
import "./App.css";
import react_logo from "./assets/react.png";
import ts_logo from "./assets/typescript.png";
import bs_logo from "./assets/bootstrap.png";
import { Note } from "./models/notes.model";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import TechCard from "./components/techCard";
import { Techs } from "./models/techs.models";
import CreateNotes from "./components/CreateNote";

function App() {
  const [techs, setTechs] = useState<Techs[]>([
    { name: "React", img: react_logo },
    { name: "TypeScript", img: ts_logo },
    { name: "Bootstrap", img: bs_logo },
  ]);

  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "Meetings",
      text: "Shedule the meeting with client and developers Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      color: "#000",
      date:
        new Date().getDate() +
        "/" +
        new Date().getMonth() +
        "/" +
        new Date().getFullYear(),
    },
    // {
    //   id: 2,
    //   title: "Yoga class",
    //   text: "Shedule dustry. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release ",
    //   color: "#ab1178",
    //   date:
    //     new Date().getDate() +
    //     "/" +
    //     new Date().getMonth() +
    //     "/" +
    //     new Date().getFullYear(),
    // },
    // {
    //   id: 3,
    //   title: "Visit Store",
    //   text: "Purchase when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release ",
    //   color: "#cc7878",
    //   date:
    //     new Date().getDate() +
    //     "/" +
    //     new Date().getMonth() +
    //     "/" +
    //     new Date().getFullYear(),
    // },
    // {
    //   id: 4,
    //   title: "Bike service",
    //   text: "Mechanic. when an unknown  type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It the release ",
    //   color: "#ab5555",
    //   date:
    //     new Date().getDate() +
    //     "/" +
    //     new Date().getMonth() +
    //     "/" +
    //     new Date().getFullYear(),
    // },
  ]);

  return (
    <div className="App">
      <Header />
      <div className="w-1 00 mx- auto">
        <div className="text-center mt-5">
          <h5>Technologies Used</h5>
        </div>
        <div className="cards-main">
          {techs.map((tech, index) => {
            return <TechCard key={index * 3} tech={tech} />;
          })}
        </div>
        <div className="flex jcsb">
          <div className="w-75">
            <div className="p-4">
              <h2 className="mb-4">Notes App</h2>
              <NotesList notes={notes} setNotes={setNotes} />
            </div>
          </div>

          <div className="w-25 p-4">
            <CreateNotes notes={notes} setNotes={setNotes} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
