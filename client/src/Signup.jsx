import { useState} from 'react';
import axios from 'axios';
//import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {name,  email, password})
        .then(result => console.log(result))
        .catch(err => console.log(err))

    }

  return (
    <div className="form-container">
      
      <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
        <label>
          Username:
          <input type="text" name="username" required 
          onChange={(e)=> setName(e.target.value)}/>

          
        </label>
        <label>
          Email:
          <input type="email" name="email" required 
          onChange={(e)=> setEmail(e.target.value)}/>

          
        </label>
        <label>
          Password:
          <input type="password" name="password" required 
          onChange={(e)=>  setPassword(e.target.value)}/>

          
        </label>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
