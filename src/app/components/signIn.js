import React, { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await axios.post('YOUR_CLOUD_FUNCTION_URL/signIn', {
        email,
        password,
      });
      // Handle successful sign-in
      console.log('Sign-in response:', response.data);
    } catch (error) {
      setError(error.response.data.message || error.message);
      // Handle sign-in error
      console.error('Sign-in error:', error);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error && <p>{error}</p>}
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SignIn;
