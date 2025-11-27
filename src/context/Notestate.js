import Notecontext from "./Notecontext";
import { useState } from "react";

const Notestate = (props) => {
  const mynote = [];
  const token_key = localStorage.getItem('token');
  const host = "https://gnote-test-backend.vercel.app";
  const [updnote, setupdnote] = useState(mynote);
    const fetchnote = async () => {
      const response = await fetch(`${host}/fetchnote`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "token_no": `${token_key}`
        },
      });

      const json = await response.json();
      console.log(json)
      setupdnote(json)
  };
const addnote = async (title, description, tag) => {
  const response = await fetch(`${host}/newnote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "token_no": `${token_key}`
    },
    body: JSON.stringify({
      Title: title,
      Description: description,
      tag: tag
    }),
  });
  // alert('s')
  const savedNote = await response.json();
  // console.log(savedNote);
  setupdnote(updnote.concat(savedNote));
};


  const delnote = async(id) => {
    const response = await fetch(`${host}/delnote/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "token_no": `${token_key}`
    }
  });
  const json = await response.json();
  console.log(json);
    const newnote = updnote.filter((updnote)=>{return updnote._id !== id})
     setupdnote(newnote);
  }; 
  const updatenote = async(id,title,description,tag) => {
    // alert(id)
  const response = await fetch(`${host}/updnote/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "token_no": `${token_key}`
    },
    body: JSON.stringify({
      Title: title,
      Description: description,
      tag: tag
    }),})
 const newNotes = JSON.parse(JSON.stringify(updnote));

  for (let index = 0; index < newNotes.length; index++) {
    const element = newNotes[index];

    if (element._id === id) {
      newNotes[index].Title = title;
      newNotes[index].Description = description;
      newNotes[index].Key = tag;
      break;
    }
  }

  setupdnote(newNotes);
  };

  return (
    <Notecontext.Provider value={{ mynote: updnote, addnote, delnote, updatenote ,fetchnote}}>
      {props.children}
    </Notecontext.Provider>
  );
};

export default Notestate;
