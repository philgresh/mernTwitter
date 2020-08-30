/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export default function Session({
  formType,
  errors,
  isSignedIn,
  processForm,
  processDemoForm,
}) {
  const [user, setUser] = useState({
    email: '',
    username: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    processForm(user);
  };

  const setDemoUser = () => {
    setUser({
      email: 'demo@email.com',
      username: 'test',
      password: 'password',
    });
  };

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    processDemoForm(user);
  };

  const update = (field) => {
    return (e) => setUser({ [field]: e.currentTarget.value });
  };

  const renderUsername = () => {
    if (formType === '/signup') {
      return (
        <label htmlFor="username">
          Username:
          <input
            id="username"
            type="text"
            value={user.username}
            onChange={update('username')}
          />
        </label>
      );
    }
    return null;
  };

  const renderErrors = () => {
    return (
      <ul className="session-errors">
        {errors.map((error, i) => (
          <li className="session-error" key={`error-${error}${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  };

  const renderInputs = () => {
    return (
      <div>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            type="text"
            value={user.email}
            onChange={update('email')}
          />
        </label>
        <br />
        {renderUsername()}
        <br />
        <label htmlFor="password">
          Password:
          <input
            id="password"
            type="password"
            value={user.password}
            onChange={update('password')}
          />
        </label>
      </div>
    );
  };

  const formHeader = () => {
    return (
      <div className="session-header">
        <div className="greeting">
          {formType === '/login' ? 'Welcome Back!' : 'Welcome!'}
        </div>
      </div>
    );
  };

  return (
    <div className="session-form">
      {formHeader()}
      <form onSubmit={handleDemoSubmit}>
        {renderInputs()}
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
        <button type="button" onClick={setDemoUser}>
          Sign in as Demo User
        </button>
      </form>
      {renderErrors()}
    </div>
  );
}
