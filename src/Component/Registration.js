import React, { useState } from 'react';
import './Reg.css'

const Registration = () => {
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState(prevProps => ({
      ...prevProps,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    // Redirect to login page
    window.location.href = '/Login';
  }

  return (
    <div className='reg'>
      <div className='hlo'>
        <form onSubmit={handleSubmit}>
          <h1>Registration Form</h1>

          <input type='text' placeholder='First Name' className="inp" />

          <input type='text' placeholder='Last Name' className="inp1" />
          <br /><br />

          <input type='number' placeholder='Birthday' className="inp" style={{ marginRight: '42%' }} />
          <br /><br />
          <div style={{ marginRight: '35%' }}>
            Gender:<input type="radio" />Female
            <input type="radio" />Male
            <input type="radio" />other
          </div>
          <br />

          <input type='email' placeholder='E-mail' name="email" className="inp" value={state.email}
            onChange={handleInputChange} style={{ marginRight: '42%' }} />

          <br /><br />

          <input type='password' placeholder='password' name="password" className="inp" value={state.password}
            onChange={handleInputChange} style={{ marginRight: '42%' }} />

          <br /><br />

          <button type='submit'>Register</button>
          <br />
          <a href="/Login" target="_blank" rel="noopener noreferrer">Login</a>
        </form>
      </div>
    </div>
  );
}

export default Registration;
