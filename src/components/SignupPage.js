import React, { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en');

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordStrong = password.length >= 8;

  let greeting = '';

  if (nationality === 'en') {
    greeting = 'Hello';
  } else if (nationality === 'de') {
    greeting = 'Hallo';
  } else if (nationality === 'fr') {
    greeting = 'Bonjour';
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ border: isEmailValid ? '2px solid green' : '2px solid red' }}
        />
        <br />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ border: isPasswordStrong ? '2px solid green' : '2px solid red' }}
        />
        <br />

        <label>Nationality:</label>
        <select value={nationality} onChange={(e) => setNationality(e.target.value)}>
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
        <br />

        <p>{greeting}</p>
        <p>Your email is {email}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignupPage;