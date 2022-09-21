import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const history = useHistory();

  const handleSubmit = (e) => { 
    e.preventDefault();
    history.push('/');
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <p>Login</p>
      <div>
        <label>
          Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password
          <input value={pass} onChange={(e) => setPass(e.target.value)} />
        </label>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Login;
