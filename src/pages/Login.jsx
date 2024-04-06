import React, { useState } from 'react'; // Import useState for form handling
import '../styles/login.css';
import {useFirebase} from '../Context/Firebase';

const Login = () => {
    const firebase = useFirebase();
  const [formData, setFormData] = useState({

    email: '',
    password: '',

  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
        firebase.getUser(formData.email, formData.password);
    

    }


  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {/* Add more form fields as needed */}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
