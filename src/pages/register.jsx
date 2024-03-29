import React, { useState } from "react"; // Import useState for form handling
import { useFirebase } from "../Context/Firebase";
const Register = () => {
  const firebase = useFirebase();
  // console.log(firebase);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [email2, setEmail2] = useState("");
  const [password2, setPassword2] = useState("");

  return (
    <div className="register-container">
      <h1>Register</h1>
      <div>
        <label>Email</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </div>
      <button
        onClick={() => firebase.createUser(email, password)}
        type="submit"
      >
        Sign up
      </button>
      <button onClick={() => firebase.signInWithGoogle()}>
        Sign up with google
      </button>

      <h1>Login</h1>
      <div>
        <label>Email</label>
        <input
          type="email"
          onChange={(e) => setEmail2(e.target.value)}
          value={email2}
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => setPassword2(e.target.value)}
          value={password2}
          required
        />
      </div>
      <button
        onClick={() => firebase.getUser(email2, password2)}
        type="submit"
      >
        Sign in
      </button>

    </div>
  );
};

export default Register;
