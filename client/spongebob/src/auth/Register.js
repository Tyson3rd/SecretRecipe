import React from 'react'
import RegistrationForm from '../component/RegistrationForm';
import {useState} from 'react'
import axios from 'axios'



export const Register = () => {
  
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // console.log("what is history", history)

 const handleSubmit = async(e) => {
     e.preventDefault()
     alert('send these details to backend')
     console.table({name, email, password})
    try {
      const res = await axios.post(`http://localhost:5000/users`, {
        name,
        email,
        password
    });
    console.log("what is RES here", res)
    } catch(error){
      console.log(error)
    }
 }
  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center text-light">
        <h1>Register</h1>
      </div>
      <div className="container">
        <div className="registration row">
          <div className="col-6 offset-md-3">
            <RegistrationForm
              handleSubmit={handleSubmit}
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          </div>
        </div>
      </div>
    </>
  );
}