import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login, setUser } from "../../store/session";
import { useDispatch } from 'react-redux'


const LoginForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    console.log("USER", user)
    if (!user.errors) {
      setAuthenticated(true);
      dispatch(setUser(user.data));
    } else {
      setErrors(user.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const demoLogin = async (e) => {
    setEmail('demo_user@aa.io');
    setPassword('password')
    const user = await login(email, password);
    console.log("USER", user)
    setAuthenticated(true);
    dispatch(setUser(user.data));

  }

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <form id="login" onSubmit={onLogin}>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        <button type="submit">Login</button>
        <button onClick={demoLogin}>Demo Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
