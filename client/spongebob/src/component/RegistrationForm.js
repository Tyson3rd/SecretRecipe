import React from 'react'

const RegistrationForm = ({name,setName,email,setEmail,password,setPassword,handleSubmit}) => {
  return (
      <form className ="mt-3" onSubmit={handleSubmit}>
            <div className ="form-group mb-3">
              <label className="form-label">Your name</label>
              <input className="form-control" 
              type="text" 
              placeholder="Enter name" 
              value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className ="form-group mb-3">
              <label className="form-label">Your email</label>
              <input className="form-control" 
              type="email" 
              placeholder="Enter email" 
              value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className ="form-group mb-3">
              <label className="form-label">Your password</label>
              <input className="form-control" 
              type="password"
              name="password"
              autoComplete="on" 
              placeholder="Enter password" 
              value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <button className="btn btn-primary">Submit</button>
      </form>
  )
}

export default RegistrationForm
