import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';  
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [noteDetails, setNoteDetails] = useState({noteTitle : "", noteContent : ""})
  const [isExpanded, setExpanded] = useState(false)
  
  function handleOnChange(event){
    const {name, value} = event.target;
    
    setNoteDetails(prevNote=>{
      return{
      ...prevNote,
      [name] : value
  }})
  }

  function handleOnClick(event){

    props.onAdd(noteDetails)
    event.preventDefault();
    setNoteDetails({noteTitle : "", noteContent : ""})
  }

  function expand(){
    setExpanded(true)
  }

  return (
    <div>
      <form className="create-note">
      {isExpanded &&
      <input name="noteTitle" onChange={handleOnChange} value={noteDetails.noteTitle} placeholder="Title" />
      }
        
        <textarea onClick={expand} name="noteContent" onChange={handleOnChange} value={noteDetails.noteContent} placeholder="Take a note..." rows={isExpanded ? "3" : "1"}/>
        <Zoom in={isExpanded}>
        <Fab onClick={handleOnClick}>
        <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
