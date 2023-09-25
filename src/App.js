import './App.css';
import { TextField } from '@mui/material';
import { useState } from 'react';

function App() {
  const [userData,setUserData] = useState({
    name:"",
    email:"",
    password:"",
    confirmpass:""
})


const [name,setName] = useState(0)
const [email,setEmail] = useState(0)
const [password,setPassword] = useState(0)
const [isNameValid,setIsNameValid] = useState(true)
const [isEmailValid,setIsEmailValid] = useState(true)
const [isPasswordValid,setIsPasswordValid] = useState(true)





const getUserData =(e)=>{
  const{name,value} = e.target
  setUserData({...userData,[name]:value})
  if (!!value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ )) {
    if(name==="name"){
      setName(value)
      setIsNameValid(true)
    }else if(name==="email"){
      setEmail(value)
      setIsEmailValid(true)
    }else{
      setPassword(value)
      setIsPasswordValid(true)
    }
  }else{
    if (name==="name") {
      setName(value)
      setIsNameValid(false)
      
    }else if(name==="email"){
      setEmail(value)
      setIsEmailValid(false)
    }else{
      setPassword(value)
      setIsPasswordValid(false)
    }
  }

}




console.log(userData);
const handleSubmit=(e)=>{
  e.preventDefault()
  if( name || email || password)
  
  
 {
   alert(`
    ------user details-----
    name :${userData.name}
    email :${userData.email}
    password :${userData.password}
    confirm password :${userData.confirmpass}
  `)
}else if(!name || !email ||! password){
  alert("please fill the form currectly!!!")
}
  
}





  return (
    <div style={{height:'100vh'}}  className="head d-flex justify-content-center align-items-center w-100 bg-dark">
      <div style={{width:'500px'}} className='container bg-info p-5'>
        <div style={{width:'400px'}} className='body  bg-light p-5 rounded'>
         <form onSubmit={handleSubmit}>
          <div className='hea  p-4 mb-5 w-10 text-center fw-bolder'>
            <h1>Register</h1>

          </div>
           <div className=' mb-3'>
              
              
                  
                <TextField className='w-100' id="standard-basic1" label='Name'  type='text' variant="standard"  name="name"  value={name || ""}  onChange={(e)=>getUserData(e)}  />
              
           </div>
           {
          !isNameValid &&
          <div className='mb-3 text-danger fw-bolder'>
            *invalid user input

          </div>
        }
           
           <div className='mb-3'>
              
              
                  
              <TextField className='w-100' id="standard-basic2" label='Email' type='email'  variant="standard" name="email" value={email ||""}  onChange={(e)=>getUserData(e)} />
            
         </div>
         {
          !isEmailValid &&
          <div className='mb-3 text-danger fw-bolder'>
            *invalid user input

          </div>
        }
         
         <div className='mb-3'>
              
              
                  
              <TextField className='w-100' id="standard-basic3" label='Password' type='password'  variant="standard" name='password' value={password || ""} onChange={(e)=>getUserData(e)}/>
            
         </div>
         {
         !isPasswordValid &&
          <div className='mb-3 text-danger fw-bolder'>
            *invalid user input

          </div>
        }
           
         <div className='mb-3'>
              
              
                  
              <TextField className='w-100' id="standard-basic4" label='confirm password4' type='password'  variant="standard" name='confirmpass'  onChange={(e)=>getUserData(e)}/>
            
         </div>
         <div className='d-flex justify-content-center align-items-center p-5 mb-2 mt-4'>
         <button  type="button" class="btn btn-secondary btn-lg w-100 fw-bolder" value={'submit'} onClick={handleSubmit}>Sign In</button>
         

         </div>
         <div className='mt-2 text-center'>
         <p>Have an Account?<a href='Login Here'>Login Here</a></p>
         </div>

            
         </form>
        </div>

      </div>

      
    </div>
  );
}

export default App;
