import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import {login}  from '../features/userSlice';

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(login({
            name: name,
            email: email,
            password:password,
            loggedIn:true,
        })
        );
    };




  return (
    <>

    <div className='flex items-center justify-center h-[100vh]'>
   <form 
   onSubmit={(e)=>handleSubmit(e)}
   className='flex flex-col items-center justify-center 
    border-2 border-black h-[40vh] w-[40vw] shadow-xl rounded-lg'>
        <h1 className='font-black text-2xl'>Login Page</h1>

        <input 
        className="m-5 p-2 border-2 border-indigo-800 rounded-lg w-[35vw]"
        type="name"
        placeholder="Enter name here..."
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />

         <input
         className="m-5 p-2 border-2 border-indigo-800 rounded-lg  w-[35vw]"
         type="email"
         placeholder="Enter email here..."
         value={email}
         onChange={(e)=>setEmail(e.target.value)}
         />

         <input
         className="m-5 p-2 border-2 border-indigo-800 rounded-lg  w-[35vw]"
         type="password"
         placeholder="Enter password here..."
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
         />
         <button type='submit'>Submit</button>
   </form>
   </div>
    </>
    
  )
}

export default Login