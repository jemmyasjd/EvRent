import React, { useState } from 'react'; // Import useState for form handling

const Register = () => {
  const [formData, setFormData] = useState({
    // Define initial form data structure
    username: '',
    email: '',
    password: '',
    // Add additional fields as needed
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Implement registration logic here (e.g., API call)
    // Handle successful registration (e.g., redirect to login)
    // Handle errors (e.g., display error messages)
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

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

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
