import React, { useContext,useEffect,useState,useRef } from 'react';
import Notecontext from '../context/Notecontext';
import Note_item from './Note_item';
import Create_note from './Create_note';

export default function Note() {
  const context = useContext(Notecontext);
  const { mynote, fetchnote,updatenote } = context;
  useEffect(() => {
    // if(localStorage.getItem('toekn')){
        fetchnote()
      // }else{
        // window.open('/login','_top');
      // }
  }, []);
    const { addnote } = context;
      const ref = useRef(null);
      const refclose = useRef(null);
      
    const [addednote, setaddednote] = useState({id:"",etitle : "",edescription:"",etag:""})
  const updmodal=(cur_note)=>{
      // alert('s')
      // console.log("Current Note → ", cur_note);

      ref.current.click()
      setaddednote({
        id: cur_note._id,
        etitle: cur_note.Title,
        edescription: cur_note.Description,
        etag: cur_note.Key
      });

    }
    const upd_click = (e)=>{
    refclose.current.click()
    updatenote(addednote.id,addednote.etitle,addednote.edescription,addednote.etag);
    }
    const onchange = (e)=>{
    setaddednote({...addednote,[e.target.name]:e.target.value})
    }  
    
  

  return (
    <>
{/* <Create_note /> */}
<button className="btn btn-danger fw-semibold d-none " ref={ref}data-bs-toggle="modal" data-bs-target="#addNoteModal">Add Note</button>
<div className="modal fade" id="addNoteModal" tabIndex="-1" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content rounded-4">

      <div className="modal-header" style={{ backgroundColor: "#dc3545", color: "white" }}>
        <h5 className="modal-title fw-bold">Add a New Note</h5>
        <button type="button" className="btn-close bg-light" data-bs-dismiss="modal"></button>
      </div>

      <div className="modal-body">
        
         <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label fw-semibold" style={{ color: "#dc3545" }}>Title</label>
            <input type="text" className="form-control " value={addednote.etitle} onChange={onchange} name="etitle" placeholder="Enter note title" 
            style={{ borderColor: "#dc3545", borderRadius: "10px",}}/></div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label fw-semibold" style={{ color: "#dc3545" }}>Description</label>
            <textarea name="edescription" value={addednote.edescription} onChange={onchange}className="form-control border-2" rows="2" placeholder="Write your note here..." 
            style={{ borderColor: "#dc3545", borderRadius: "10px", }}></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="tag" className="form-label fw-semibold" style={{ color: "#dc3545" }} > Tag </label>
            <input type="text"  value={addednote.etag} onChange={onchange}className="form-control border-2" name="etag" placeholder="e.g. Work, Study, Personal" 
            style={{ borderColor: "#dc3545", borderRadius: "10px", }} />
          </div>
        </form>
      </div>

      <div className="modal-footer">
        <button className="btn btn-outline-danger fw-semibold" ref={refclose} data-bs-dismiss="modal">Cancel</button>
        <button className="btn fw-semibold" onClick={upd_click} style={{ backgroundColor: "#dc3545", color: "white", borderRadius: "10px" }}>Update Note</button>
      </div>

    </div>
  </div>
</div>

    <div className="mt-4">
      <h2 className=" mb-3">My Notes</h2>
      <div className="container">
        {mynote.map((note, index) => (
          <Note_item key={index} updatenote={updmodal} note={note} />
        ))}
      </div>
    </div>
    </>
  );
}
