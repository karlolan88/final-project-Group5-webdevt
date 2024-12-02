import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'; // Importing the global styles

const UserAccountManagement = ({ users, setUsers, setLoggedInUser }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "regular",
  });
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between login and signup
  const navigate = useNavigate();

  // Reset form data
  const resetForm = () => {
    setFormData({ username: "", email: "", password: "", role: "regular" });
  };

  // Handle login
  const handleLogin = () => {
    const user = users.find(
      (u) => u.username === formData.username && u.password === formData.password
    );

    if (user) {
      setLoggedInUser(user);
      // Redirect based on role
      navigate(user.role === "admin" ? "/admin-dashboard" : "/user-dashboard");
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  // Handle signup
  const handleSignUp = () => {
    if (!formData.email.includes("@")) {
      alert("Invalid email format.");
      return;
    }
    if (users.some((u) => u.username === formData.username)) {
      alert("Username already exists. Please choose a different username.");
      return;
    }

    setUsers([...users, { ...formData, id: Date.now() }]);
    alert("User registered successfully!");
    resetForm();
    setIsSignUp(false); // Switch to login after successful signup
  };

  // Handle form updates
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="account-management-container">
      <h2>User Account Management</h2>
      {isSignUp ? (
        <>
          <h3 className="form-header">Sign Up</h3>
          <input
            className="input-field"
            placeholder="Username"
            value={formData.username}
            onChange={(e) => handleChange("username", e.target.value)}
          />
          <input
            className="input-field"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <input
            className="input-field"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
          />
          <select
            className="input-field"
            value={formData.role}
            onChange={(e) => handleChange("role", e.target.value)}
          >
            <option value="regular">Regular User</option>
            <option value="admin">Admin</option>
          </select>
          <button className="action-button" onClick={handleSignUp}>
            Sign Up
          </button>
          <p className="switch-text">
            Already have an account?{" "}
            <span className="link" onClick={() => setIsSignUp(false)}>
              Log In
            </span>
          </p>
        </>
      ) : (
        <>
          <h3 className="form-header">Log In</h3>
          <input
            className="input-field"
            placeholder="Username"
            value={formData.username}
            onChange={(e) => handleChange("username", e.target.value)}
          />
          <input
            className="input-field"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
          />
          <button className="action-button" onClick={handleLogin}>
            Log In
          </button>
          <p className="switch-text">
            No account yet?{" "}
            <span className="link" onClick={() => setIsSignUp(true)}>
              Sign Up
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default UserAccountManagement;
