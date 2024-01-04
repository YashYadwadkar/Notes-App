import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([])

  function addNote(newNote){
    setNotes(prevValue=>{
      return [...prevValue, newNote]
    })
  }

  function deleteNote(id){
    setNotes(prevValue=>{
      prevValue.filter((note, index)=>{
        return index!==id
      }
    )})
  }

  return (
    <div>
      <Header />
      <CreateArea
      onAdd = {addNote}
       />
      {notes?.map((newNote, index)=>{
        return <Note 
            key={index}
            id={index}
            title={newNote.noteTitle}
            content={newNote.noteContent}
            onDelete={deleteNote}
          />          
      })}
      <Footer />
    </div>
  );
}

export default App;
