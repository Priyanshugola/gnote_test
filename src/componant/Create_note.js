import React, { useContext ,useState} from 'react';
import Notecontext from '../context/Notecontext';
export default function Create_note() {
    const context = useContext(Notecontext);
    const { addnote } = context;
    const [addednote, setaddednote] = useState({title : "",description:"",tag:"ganral"})

    const add_click = (e)=>{
         e.preventDefault();
        addnote(addednote.title,addednote.description,addednote.tag)
    }
    const onchange = (e)=>{
      setaddednote({...addednote,[e.target.name]:e.target.value})
    }
     if(localStorage.getItem('toekn')){
        // fetchnote()
      }else{
        // window.open('/login','_top');
      }
  return (
    <div className="container my-1" style={{ maxWidth: "100%" }}>
      <div className="p-2 rounded-4 " style={{borderColor: "#dc3545",backgroundColor: "#fff",}}>
        <h3 className=" fw-bold mb-4" style={{color: "#dc3545", letterSpacing: "0.5px",}}>
          Add a New Note
        </h3>

        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label fw-semibold" style={{ color: "#dc3545" }}>Title</label>
            <input type="text" className="form-control " onChange={onchange} name="title" placeholder="Enter note title" style={{ borderColor: "#dc3545", borderRadius: "10px",}}/></div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label fw-semibold" style={{ color: "#dc3545" }}>Description</label>
            <textarea name="description" onChange={onchange}className="form-control border-2" rows="2" placeholder="Write your note here..." style={{ borderColor: "#dc3545", borderRadius: "10px", }}></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="tag" className="form-label fw-semibold" style={{ color: "#dc3545" }} > Tag </label>
            <input type="text" className="form-control border-2" name="tag" placeholder="e.g. Work, Study, Personal" style={{ borderColor: "#dc3545", borderRadius: "10px", }} />
          </div>
          <button onClick={add_click}type="submit" className="btn w-100 fw-semibold py-2" style={{ backgroundColor: "#dc3545", color: "white", borderRadius: "12px", transition: "0.3s", }} onMouseOver={(e) => (e.target.style.backgroundColor = "#b92d3c")} onMouseOut={(e) => (e.target.style.backgroundColor = "#dc3545")} > Add Note </button>
        </form>
      </div>
    </div>
  );
}
