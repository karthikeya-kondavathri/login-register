import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { useHistory  } from 'react-router-dom';

const Login = () => {/*
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Handle authentication logic here
    navigate('/home');
  };
*/ let history =  useHistory();

  return (
    <div className="form-container">
      
      <form>
      <h2>Login</h2>
        <label>
          Username:
          <input type="text" name="username" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <button onClick={()=> history.push('/home')}>Login</button>

      </form>
    </div>
  );
};

export default Login;
