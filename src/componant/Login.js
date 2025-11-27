import React,{useState} from 'react'
// import {useHistory} from 'react-router-dom'

export default function Login() {
      const host = "https://gnote-test-backend.vercel.app";
    //   const history = useHistory();
    const [login_crad, setlogin_crad] = useState({email :'',password:''})
    const formsubmit = async(e)=>{
        // alert('ss');
         e.preventDefault();
      const response = await fetch(`${host}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
        Mail: login_crad.email,
        Password: login_crad.password
        })
      });
      const json = await response.json();
      console.log(json)
      if(json.success){
        localStorage.setItem('token',json.token);
        window.open('/','_top')
      }else{
        alert('invalid data');
      }

    }
     const onchange = (e)=>{
    setlogin_crad({...login_crad,[e.target.name]:e.target.value})
    }  
  return (
    <div>
        <form onSubmit={formsubmit}>
        <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold" style={{color:"#dc3545"}}>Email</label>
            <input type="email" className="form-control" name="email"onChange={onchange} value={login_crad.email} placeholder="Enter your email" style={{borderColor:"#dc3545",borderRadius:"10px"}} required /></div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold" style={{color:"#dc3545"}}>Password</label>
            <input type="password" className="form-control" name="password" onChange={onchange} value={login_crad.password} placeholder="Enter your password" style={{borderColor:"#dc3545",borderRadius:"10px"}} required /></div>
        <button type="submit" className="btn w-100 fw-semibold py-2" style={{backgroundColor:"#dc3545",color:"white",borderRadius:"12px",transition:"0.3s"}} >Signup</button>
        </form>
     </div>
  )
}
