import React, { useContext} from 'react';
import Notecontext from '../context/Notecontext';
export default function Note_item({ note, updatenote }) {
      const context = useContext(Notecontext);
      const { delnote } = context;
  return (
    <div>
      <div className="card mb-3" style={{ borderRadius: "10px" }}>
        <div className="card-body">
          <h5 className="card-title">{note.Title}</h5>
          <p className="card-text">{note.Description}</p>
          <div className="d-flex justify-content-end gap-2">
            <button className="btn btn-light btn-sm"  onClick={() => updatenote(note)}>
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button className="btn btn-dark btn-sm" onClick={()=>{delnote(note._id)}}>
              <i class="fa-solid fa-trash" ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
