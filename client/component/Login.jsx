import React from 'react';
import { Link } from 'react-router-dom';

function Login() {

  const onConfirm = () => {
    const restart = confirm('This should redirect to "/" Landing page.');
    if (restart) {
      return;
    }
  };

  const onSignup = () => {
    const signup = confirm('This should show a signup form over the page.');
    if (singup) {
      return;
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input class='input-field' type='text' style={{ width: '500px', height: '35px', fontSize: '16px', margin: '10px 0 10px 340px', paddingLeft: '10px' }}></input>
      <div id='log-butt' style={{marginBottom: '100px'}}>
        <Link to='/' id='login' onClick={onConfirm}>Login</Link>
        <Link to='/login' id='signup' onClick={onSignup}>Signup</Link>
      </div>
    </div>
  );
};

export default Login;