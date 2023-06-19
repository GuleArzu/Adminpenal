import React,{useState} from 'react'
import './Log.css'
const Login = () => {
 
  const [State,setState]=useState(
    {
      email:"",
     
    }

  )
  const handleInputChange=(e)=>{
    const{name,value}=e.target;
    setState((preprops)=>({
      ...preprops,
      [name]:value
    }))
  }
const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(State)
  window.location.href = '/Registration';
}
  return (
    <div>
      <div className='reg'>
        <div className='hlo'>
          <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>


          <input type='email' placeholder='E-mail' className="inp" name='email' value={State.email} onChange={handleInputChange} />

          <br/><br/>

          <input type='password' placeholder='password' className="inp"  />

          <br/><br/>

          <button type='submit'>Login</button>
          <br/>  <br/>
        <a href="/Registration" target="_blank" rel="noopener noreferrer" >Registration</a>
          </form>

        </div>

      </div>

    </div>
  )
}

export default Login

